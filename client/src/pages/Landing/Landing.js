import { useEffect, useState } from "react";
import EzRedirect from "../../components/EzRedirect/EzRedirect";
import { getUserData } from "../../lib/user";

function Landing() {
	const [redirect, setRedirect] = useState(false);
	const [redirTo, setRedirTo] = useState("/");

	useEffect(() => {
		// if not logged in then redirect to login
		getUserData().then((res) => {
			if (res.error) {
				setRedirTo("/login");
				setRedirect(true);
			}
		});
	});

	return redirect ? (
		<EzRedirect to={redirTo} delay={0} />
	) : (
		<div>Landing</div>
	);
}

export default Landing;
