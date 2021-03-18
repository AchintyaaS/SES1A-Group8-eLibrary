/** Validates form input*/
const validate = () => {
	clear_err();

	//get email and password values
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const PASSWORD_REGEX = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*|[^\s]*\s.*)$/;

	//validate email
	if (!EMAIL_REGEX.test(String(email).toLowerCase())) {
		send_err("error-email", "Invalid email format!");
		return;
	}

	//validate password
	if (PASSWORD_REGEX.test(String(password)) || String(password).length > 20) {
		send_err(
			"error-password",
			"Passwords must be at 8-20 characters long, contain an uppercase and lowercase letter, a number and a special character! "
		);
		return;
	}

	//sends a register request
	document.getElementById("form").submit();
};

/** Displays the error message onto the page
 * @param {string} target id of the target error label
 * @param {string} error_msg error message to be sent
 */
const send_err = (target, error_msg) => {
	const target_label = document.getElementById(target);
	target_label.innerHTML = error_msg;
};

/** Clears the error fields */
const clear_err = () => {
	send_err("error-email", "");
	send_err("error-password", "");
};
