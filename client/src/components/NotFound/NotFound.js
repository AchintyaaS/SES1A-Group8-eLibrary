import EzRedirect from "../EzRedirect/EzRedirect";

function NotFound() {
	return (
		<div>
			<EzRedirect delay={3000} to="/"></EzRedirect> Page Not Found -
			Redirecting You...{" "}
		</div>
	);
}

export default NotFound;
