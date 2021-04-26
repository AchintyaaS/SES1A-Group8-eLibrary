import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

function EzRedirect(props) {
	const [redirect, setRedirect] = useState(false);

	let t;

	function run(delay) {
		t = setTimeout(() => {
			setRedirect(true);
		}, delay);
	}

	useEffect(() => {
		run(props.delay);
		return () => clearTimeout(t);
	});

	return redirect || props.doRedir ? <Redirect to={props.to} /> : <></>;
}

export default EzRedirect;
