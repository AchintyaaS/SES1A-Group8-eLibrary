const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*|[^\s]*\s.*)$/;

/** Validates form input*/

/** Checks wether the email is valid
 *  @param {string} email email
 *  @returns {boolean} is valid.
 */
const is_valid_email = (email) => {
	if (!email || !EMAIL_REGEX.test(String(email).toLowerCase())) return false;
	const domain = String(email)
		.substring(String(email).indexOf("@") + 1)
		.split(".");
	return !(domain.length < 3 || domain.length == 3
		? domain[0] === "student" || domain[0] === "lib"
		: false ||
		  domain[domain.length - 2] + "." + domain[domain.length - 1] !==
				"edu.au" ||
		  domain.length == 4
		? domain[0] !== "student" && domain[0] !== "lib"
		: false);
};

const validate = () => {
	clear_err();

	//get email and password values
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	//validate email
	if (!is_valid_email(email)) {
		send_err(
			"error-email",
			"Invalid email format! name@student.uni.edu.au, name@lib.uni.edu.au or  name@uni.edu.au"
		);
		return;
	}

	//validate password
	if (
		!password ||
		PASSWORD_REGEX.test(String(password)) ||
		String(password).length > 20
	) {
		send_err(
			"error-password",
			"Passwords must be at 8-20 characters long, contain an uppercase and lowercase letter, atleast one number and special character! "
		);
		return;
	}

	//sends a login request
	//document.getElementById("form").submit();
	fetch("/login", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.error_msg) {
				send_err("error-password", data.error_msg);
			} else {
				window.location.replace(window.location.origin);
			}
		});
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
