const mongoose = require("mongoose");

const bookdetailsSchema = new mongoose.Schema({
	ISBN: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	publisher: {
		type:String,
		required: true,
	},
    issue: {
        type: Number,
        required: true,

    },
    category: {
        type: String,
        required: true,
    },
    fine: {
        type: Number,
        required: true, 
    },
    borrowlimit: {
        type: Number,
        required: true,
    },

});
module.exports = mongoose.model("Book", bookdetailsSchema);