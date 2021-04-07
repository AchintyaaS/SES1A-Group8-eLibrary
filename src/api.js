const api = require("express").Router();

//random stuff dont mind it
api.get("/api/books", (req, res, next) => {
	res.json({
		book: "book",
	}).status(200);
});

api.get("/api/:endpoint", (req, res, next) => {
	res.json({
		endpoint: req.params.endpoint,
	}).status(200);
});

api.get("/api/book/somebook", (req, res, next) => {
	const {bookname} = req 
	moogg
	res.json({

		book: "book",
	}).status(200);
});


module.exports = api;
