const express = require("express");
const cookieParser = require("cookie-parser");
const fs = require("fs");

const { authenticate_token, auth: authRouter } = require("./src/auth");
const apiRouter = require("./src/api");

const app = express();

/** Checks wether or not a JSON Object is empty
 *  @param {object} object JSON Object
 *  @returns {boolean} true or false
 */
const is_empty = (object) => {
	return !(object && Object.keys(object).length > 0);
};

//static file serving
app.use(express.static("public"));

//middleware for parsing data
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route authentication calls
app.post("/register", authRouter);

//listen for api calls
app.get("/api/:endpoint", apiRouter);

//redirect files other than index
app.get("/:slug?", (req, res, next) => {
	//get data from request
	const slug = req.params.slug,
		LOGIN_INFO = req.cookies.LOGIN_INFO;
	//dir is the target document's path
	const dir =
		__dirname +
		"/public/html/" +
		slug +
		(slug.indexOf(".html") == -1 ? ".html" : "");

	if (slug.indexOf(".") != -1) {
		next();
	} else if (fs.existsSync(dir)) {
		if (LOGIN_INFO && !is_empty(authenticate_token(LOGIN_INFO))) {
			if (slug === "register" || slug === "login") {
				res.redirect("/");
				return;
			}
		} else {
			if (!(slug === "register") && !(slug === "login")) {
				res.redirect("/register"); //change to login later
				return;
			}
		}

		res.sendFile(dir);
	} else {
		res.sendFile(__dirname + "/public/404.html");
	}
});

//start the server on default port 80
app.listen(process.env.PORT || 80, () => {
	console.log("Listening on port 80...");
});
