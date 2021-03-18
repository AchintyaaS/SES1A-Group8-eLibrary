const auth = require("express").Router();
const bcrypt = require("bcrypt");

let users = [];

/**  Hashes the input string
 *   @param {string} string string to be hashed
 *   @returns {string} hashed string
 */
function hash(string) {
	return bcrypt.hashSync(string, 10);
}

//login with bcrypt.compareSync(string, hashedpass)

//register
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

		users.push({ email: email, password: password });
		res.redirect("/register");
	}

	console.log(users);
});

module.exports = auth;
