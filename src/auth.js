require("dotenv").config();

const auth = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("./mongo/mongo");

const EXPIRE_TIME = 10_000;

let users = [];

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
 *  @param {object} payload payload
 * @returns {string} JWT Token
 */
const create_token = (payload) => {
	return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
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

//login with bcrypt.compareSync(string, hashedpass)

//get info endpoint
auth.get("/getUserData", (req, res, next) => {
	const access_token = req.cookies.LOGIN_INFO;
	if (access_token) {
		res.json(authenticate_token(access_token));
		return;
	}
	res.json({});
});

//register endpoint
auth.post("/register", (req, res, next) => {
	const email = req.body.email;
	var password = req.body.password;

	//revalidate email and password
	const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const PASSWORD_REGEX = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*|[^\s]*\s.*)$/;

	if (
		!email ||
		!password ||
		!EMAIL_REGEX.test(String(email).toLowerCase()) ||
		(!(String(email).indexOf("@student.uni.edu.au") != -1) &&
			!(String(email).indexOf("@uni.edu.au") != -1)) ||
		PASSWORD_REGEX.test(String(password)) ||
		String(password).length > 20
	)
		res.sendStatus(400);
	else {
		let user = {
			username: email,
			email: email,
			password: hash(password),
			role: String(email).indexOf("@student.") != -1 ? 1 : 2,
		};

		const access_token = create_token({
			email: user.email,
			expires: new Date(new Date().getTime() + EXPIRE_TIME),
		});

		users.push(user);

		res.cookie("LOGIN_INFO", access_token, {
			expires: new Date(new Date().getTime() + EXPIRE_TIME),
			httpOnly: true,
		});
		res.redirect("/register");
	}

	console.log(users);
});

module.exports = { auth, authenticate_token };
