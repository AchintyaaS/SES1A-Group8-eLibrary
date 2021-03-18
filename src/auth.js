require("dotenv").config();

const auth = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let users = [];

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
const authenticate_token = (token) => {};

//login with bcrypt.compareSync(string, hashedpass)

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
		PASSWORD_REGEX.test(String(password)) ||
		String(password).length > 20
	)
		res.sendStatus(400);
	else {
		password = hash(password);
		let user = { email: email, password: password };

		const access_token = create_token({ email: email });

		users.push(user);

		res.cookie("LOGIN_INFO", access_token, {
			httpOnly: true,
			//secure: true,
		});
		res.redirect("/register");
	}

	console.log(users);
});

module.exports = auth;
