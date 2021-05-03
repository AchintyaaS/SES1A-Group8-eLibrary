import { useEffect, useState } from "react";
import EzRedirect from "../../components/EzRedirect/EzRedirect";
import { getUserData, logout } from "../../lib/user";

function Landing() {
	const [user, setUser] = useState({});
	const [redirect, setRedirect] = useState(false);
	const [redirTo, setRedirTo] = useState("/");

	useEffect(() => {
		// if not logged in then redirect to login
		getUserData().then((res) => {
			if (res.error) {
				setRedirTo("/login");
				setRedirect(true);
			} else {
				setUser(res);
			}
		});
	});

	return (
		<div>
			Landing
			<EzRedirect to={redirTo} delay={0} doRedir={redirect} />
			{user ? Object.entries(user).map(([k, v]) => <div>{v}</div>) : ""}
			<div onClick={logout} style={{ color: "blue", cursor: "pointer" }}>
				Logout
			</div>
		</div>
	);
}

export default Landing;
