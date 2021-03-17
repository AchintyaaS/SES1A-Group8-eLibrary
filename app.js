const express = require("express");
const fs = require("fs");

const app = express();
const router = express.Router();

//listen for requests on the root path
router.get("/", (req, res) => {
	console.log("ROOT");
	res.sendFile(__dirname + "/public/index.html");
});

//listen for api calls
router.get("/api/:endpoint", (req, res, next) => {
	res.json({
		endpoint: req.params.endpoint,
	}).status(200);
});

//redirect files other than index
router.get("/:slug?", (req, res, next) => {
	console.log(req.params.slug);
	if (
		req.params.slug.indexOf(".css") != -1 ||
		req.params.slug.indexOf(".js") != -1
	) {
		next();
	} else if (
		fs.existsSync(
			__dirname +
				"/public/html/" +
				req.params.slug +
				(req.params.slug.indexOf(".html") == -1 ? ".html" : "")
		)
	) {
		res.sendFile(
			__dirname +
				"/public/html/" +
				req.params.slug +
				(req.params.slug.indexOf(".html") == -1 ? ".html" : "")
		);
	} else {
		res.sendFile(__dirname + "/public/404.html");
	}
});

app.use("/", router);
app.use(express.static("public"));

//start the server on default port 80
app.listen(process.env.PORT || 80);
