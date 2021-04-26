import { useState, useEffect } from "react";

import LoginLeftCard from "../../components/LoginCards/LoginLeftCard";
import LoginRightCard from "../../components/LoginCards/LoginRightCard";
import EzRedirect from "../../components/EzRedirect/EzRedirect";

import { getUserData } from "../../lib/user";

function Register() {
	const [redir, setRedir] = useState(false);

	useEffect(() => {
		getUserData().then((res) => {
			if (!res.error) setRedir(true);
		});
	});

	return (
		<div
			className="main-container"
			style={{
				height: "100vh",
				backgroundColor: "rgba(240, 240, 225, 1)",
			}}
		>
			<EzRedirect to="/" delay={0} doRedir={redir} />
			<LoginLeftCard />
			<LoginRightCard
				title="Register"
				mode="register"
				btnText="Register"
			/>
		</div>
	);
}

export default Register;
