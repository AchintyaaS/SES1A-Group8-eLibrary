import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

function Redr() {
	return <Redirect to="/"></Redirect>;
}

function NotFound() {
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		let isMounted = true;
		if (isMounted) wait();
		return () => {
			isMounted = false;
		};
	});

	function wait() {
		setTimeout(() => {
			setRedirect(true);
		}, 3000);
	}

	return redirect ? (
		<Redr />
	) : (
		<div>
			<div>Page Not Found - Redirecting You...</div>
		</div>
	);
}

export default NotFound;
