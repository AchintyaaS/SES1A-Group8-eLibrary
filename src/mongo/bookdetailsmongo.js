require("dotenv").config();
const booksModel = require("./schemas/bookschema");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});



const db = mongoose.connection;

//closing the mongodb connection
const close = () => {
	db.close();
	console.log("Database connection Closed");
};

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

module.exports = { booksModel, close };