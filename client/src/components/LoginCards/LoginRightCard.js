import { useState } from "react";
import LButton from "../LButton/LButton";
import LTextBox from "../LTextBox/LTextBox";

/** React Functional Component */
function LoginRightCard(props) {
	const [estate, setEState] = useState(false);
	const [pstate, setPState] = useState(false);

	function validateEmail(email) {
		const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		/** Checks wether the email is valid
		 *  @param {string} email email
		 *  @returns {boolean} is valid.
		 */
		const is_valid_email = (email) => {
			if (!email || !EMAIL_REGEX.test(String(email).toLowerCase()))
				return false;
			const domain = String(email)
				.substring(String(email).indexOf("@") + 1)
				.split(".");
			return !(domain.length < 3 || domain.length == 3
				? domain[0] === "student" || domain[0] === "lib"
				: false ||
				  domain[domain.length - 2] +
						"." +
						domain[domain.length - 1] !==
						"edu.au" ||
				  domain.length == 4
				? domain[0] !== "student" && domain[0] !== "lib"
				: false);
		};

		let res = is_valid_email(email);

		setEState(res);
		return res;
	}

	function validatePassword(password) {
		const PASSWORD_REGEX = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*|[^\s]*\s.*)$/;
		let res = !(
			!password ||
			PASSWORD_REGEX.test(String(password)) ||
			String(password).length > 20
		);
		setPState(res);
		return res;
	}

	return (
		<div
			className="login-right-card"
			style={{
				width: "30vw",
				height: "66vh",
				backgroundColor: "rgba(235, 235, 225, 1)",
				display: "block",
				margin: "auto",
				float: "left",
				marginTop: "16vh",
				transform: "translateX(-10vw)",
				borderRadius: "45px",
				boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
			}}
		>
			<div
				className="login-right-title"
				style={{
					width: "fit-content",
					display: "block",
					fontFamily: "Roboto Mono",
					fontWeight: "Bold",
					fontSize: "2vw",
					margin: "auto",
					marginTop: "5vh",
					marginBottom: "2vh",
				}}
			>
				{props.title}
			</div>
			<LTextBox
				tag="Email ID"
				type="email"
				docondition={true}
				condition={validateEmail}
			/>
			<LTextBox
				tag="Password"
				type="password"
				docondition={true}
				condition={validatePassword}
			/>
			<LButton text={props.title} clickable={estate && pstate} />
		</div>
	);
}

export default LoginRightCard;
