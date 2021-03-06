require("dotenv").config();

const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.GMAIL_EMAIL,
		pass: process.env.GMAIL_PASSWORD,
	},
});

var options = {
	from: process.env.GMAIL_EMAIL,
	to: "name@example.com",
	subject: "ELibrary Registration Success",
	text:
		"You have successfully registered at the eLibrary website of a university in Western Sydney. This is part of a project assignment for subject 41093 by group 8, if you are not the intended recepient, please ignore this email.",
};

/** Sends an email via gmail from 41093group8@gmail.com
 *  @param {string} recepient recepient of the email
 */
const send_mail = (recepient) => {
	if (!recepient) return;
	options.to = recepient;
	mailer.sendMail(options, (err, res) => {
		if (err) console.log(err);
	});
};

module.exports = send_mail;
