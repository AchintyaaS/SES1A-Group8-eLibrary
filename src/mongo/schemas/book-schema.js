const mongoose = require("mongoose");

const book = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("user", userSchema);
