import { useState } from "react";
import LButton from "../LButton/LButton";
import LTextBox from "../LTextBox/LTextBox";
import EzRedirect from "../EzRedirect/EzRedirect";

const axios = require("axios").default;

const login_url = "http://localhost:90/login";
const register_url = "http://localhost:90/register";

/** React Functional Component */
function LoginRightCard(props) {
	const [estate, setEState] = useState(false);
	const [pstate, setPState] = useState(false);
	const [e, setE] = useState("");
	const [p, setP] = useState("");
	const [r, setR] = useState(false);

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
			return !(domain.length < 3 || domain.length === 3
				? domain[0] === "student" || domain[0] === "lib"
				: false ||
				  domain[domain.length - 2] +
						"." +
						domain[domain.length - 1] !==
						"edu.au" ||
				  domain.length === 4
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

	function auth(url) {
		if (!(pstate && estate)) return;
		axios
			.request({
				url: url,
				method: "post",
				data: {
					email: e,
					password: p,
				},
				withCredentials: true,
			})
			.then((res) => {
				console.log(res);
				if (res.data.message) {
					console.log("k");
					setR(true);
				}
			});
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
			<EzRedirect to="/" delay={0} doRedir={r} />
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
				value={e}
				onChange={setE}
			/>
			<LTextBox
				tag="Password"
				type="password"
				docondition={true}
				condition={validatePassword}
				value={p}
				onChange={setP}
			/>
			<LButton
				text={props.title}
				clickable={estate && pstate}
				onClick={() => {
					auth(props.mode === "login" ? login_url : register_url);
				}}
			/>
		</div>
	);
}

export default LoginRightCard;
