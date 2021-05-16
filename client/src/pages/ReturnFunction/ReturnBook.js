import { useState, useEffect } from "react";
import EzRedirect from "../../components/EzRedirect/EzRedirect";
import UpdateCard from "../../components/UpdateDetails/UpdateCard";
import { getUserData } from "../../lib/user";

function Login(props) {
	const [redir, setRedir] = useState(false);
	const [redirTo, setRedirTo] = useState("/");
	useEffect(() => {
		getUserData().then((res) => {
			console.log(!res.error);
			if (res.error) {
				setRedir(true);
			}
		});
	});


	return (
		<div
			className="main-container"
			style={{
				height: "100vh",
				backgroundColor: "rgba(240, 240, 225, 1)",
				width: "100vw",
				display: "block",
				margin: "auto",
				position: "absolute",	
			}}
		>
			<ReturnCard title="Return Book" mode="return" btnText="Return Book" pushToast={props.pushToast} />
			<EzRedirect to={redirTo} delay={0} doRedir={redir} />
			
		</div>
	);
}

export default Login;