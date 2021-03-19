require("dotenv").config();

const userModel = require("./schemas/user-schema");

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

/** Closes the mongodb connection */
const close = () => {
	db.close();
	console.log("Closed Database Connection");
};

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

module.exports = { userModel, close };
