const express = require("express");
const cookieParser = require("cookie-parser");
const fs = require("fs");

const authRouter = require("./src/auth");
const apiRouter = require("./src/api");

const app = express();

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
	console.log("SLUG " + req.params.slug);
	const dir =
		__dirname +
		"/public/html/" +
		req.params.slug +
		(req.params.slug.indexOf(".html") == -1 ? ".html" : "");

	if (req.params.slug.indexOf(".") != -1) {
		next();
	} else if (fs.existsSync(dir)) {
		console.log(req.cookies);
		res.sendFile(dir);
	} else {
		res.sendFile(__dirname + "/public/404.html");
	}
});

//start the server on default port 80
app.listen(process.env.PORT || 80, () => {
	console.log("Listening on port 80...");
});
