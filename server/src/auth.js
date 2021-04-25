require("dotenv").config();

const auth = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const send_mail = require("./gmail");
const { userModel: user, close } = require("./mongo/mongo");

const TEXT_MAP = {
	ERR_EMAIL_USED: "A user has already registered with that email",
	ERR_INVALID_EMAIL_PASSWORD:
		"Unable to process your request, please check that your email and password meets the requirements",
	ERR_INVALID_LOGIN: "Invalid username or password",
};
const EXPIRE_TIME = 3_600_000;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*|[^\s]*\s.*)$/;

/** Checks wether the email is valid
 *  @param {string} email email
 *  @returns {boolean} is valid.
 */
const is_valid_email = (email) => {
	if (!email || !EMAIL_REGEX.test(String(email).toLowerCase())) return false;
	const domain = String(email)
		.substring(String(email).indexOf("@") + 1)
		.split(".");
	return !(domain.length < 3 || domain.length == 3
		? domain[0] === "student" || domain[0] === "lib"
		: false ||
		  domain[domain.length - 2] + "." + domain[domain.length - 1] !==
				"edu.au" ||
		  domain.length == 4
		? domain[0] !== "student" && domain[0] !== "lib"
		: false);
};

/** Checks wether the email and password is valid
 *  @param {string} email email
 *  @param {string} password password
 *  @returns {boolean} is valid.
 */
const is_valid_email_password = (email, password) => {
	return (
		password != null &&
		!PASSWORD_REGEX.test(String(password)) &&
		String(password).length < 20 &&
		is_valid_email(email)
	);
};

/** Checks wether or not a JSON Object is empty
 *  @param {object} object JSON Object
 *  @returns {boolean} true or false
 */
const is_empty = (object) => {
	return !(object && Object.keys(object).length > 0);
};

/**  Hashes the input string
 *   @param {string} string string to be hashed
 *   @returns {string} hashed string
 */
const hash = (string) => {
	return bcrypt.hashSync(string, 10);
};

/** Creates a JWT
 *  @param {object} user_doc user document
 * @returns {string} JWT Token
 */
const create_token = (user_doc) => {
	return jwt.sign(
		{
			username: user_doc.username,
			email: user_doc.email,
			role: user_doc.role,
			expires: new Date(new Date().getTime() + EXPIRE_TIME),
		},
		process.env.ACCESS_TOKEN_SECRET
	);
};

/** Verifies JWT authenticity
 *  @param {string} token JWT token
 *  @returns {object} token payload
 */
const authenticate_token = (token) => {
	let res = {};

	if (token == null) return res;

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
		if (err) console.log(err);
		res = payload;
	});

	//verify expiry date
	if (
		!is_empty(res) &&
		new Date(res.expires).getTime() <= new Date().getTime()
	) {
		res = {};
	}

	return res;
};

/** Handles CORS Pre-Flight Request
 *  @param {object} res response object
 *  @param {string} method request method
 */
const cors = (res, method) => {
	res.set("Access-Control-Allow-Origin", "http://localhost:3000");
	res.set("Access-Control-Allow-Headers", "Content-Type");
	res.set("Access-Control-Allow-Methods", method);
	res.set("Access-Control-Allow-Credentials", true);

	console.log("CORS " + method);
};

//login with bcrypt.compareSync(string, hashedpass)

//get user info endpoint
auth.get("/getUserData", (req, res, next) => {
	const access_token = req.cookies.LOGIN_INFO;
	if (access_token) {
		res.json(authenticate_token(access_token));
		return;
	}
	res.send({ error: "ERR_NOT_LOGGED_IN" });
});

//logout endpoint
auth.get("/logout", (req, res, next) => {
	res.clearCookie("LOGIN_INFO");
	res.send({ redirect: "/" });
});

//login endpoint
auth.post("/login", async (req, res, next) => {
	const email = req.body.email;
	var password = req.body.password;

	//revalidate email and password
	if (!is_valid_email_password(email, password)) {
		res.send({ error_msg: TEXT_MAP["ERR_INVALID_EMAIL_PASSWORD"] });
		return;
	} else {
		//create user object
		let user_doc = { email: email };

		const matches = await user.findOne(user_doc);
		if (
			matches == null ||
			!bcrypt.compareSync(password, matches.password)
		) {
			res.send({
				error_msg: TEXT_MAP["ERR_INVALID_LOGIN"],
			});
			return;
		}

		user_doc = matches;

		const access_token = create_token(user_doc);

		//set login info cookie on client
		res.cookie("LOGIN_INFO", access_token, {
			expires: new Date(new Date().getTime() + EXPIRE_TIME),
			httpOnly: true,
		});
		res.send({ message: "success" });
	}
});

//register endpoint
auth.post("/register", async (req, res, next) => {
	const email = req.body.email;
	var password = req.body.password;

	//revalidate email and password
	if (!is_valid_email_password(email, password)) {
		res.json({ error_msg: TEXT_MAP["ERR_INVALID_EMAIL_PASSWORD"] });
		return;
	} else {
		//create user object
		let user_doc = { email: email };

		const matches = await user.findOne(user_doc);
		if (matches) {
			res.json({
				error_msg: TEXT_MAP["ERR_EMAIL_USED"],
			});
			return;
		}

		user_doc = {
			username: String(email).split("@")[0],
			email: email,
			password: hash(password),
			role:
				String(email).indexOf("@student.") != -1
					? 1
					: String(email).indexOf("@lib.") != -1
					? 3
					: 2,
		};

		const access_token = create_token(user_doc);

		//adds the user to the database and sends an email
		user.insertMany([user_doc]);
		send_mail(email);

		//set login info cookie on client
		res.cookie("LOGIN_INFO", access_token, {
			expires: new Date(new Date().getTime() + EXPIRE_TIME),
			httpOnly: true,
		});
		res.json({});
	}
});

module.exports = { auth, authenticate_token };
