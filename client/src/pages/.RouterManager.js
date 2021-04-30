import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import ToastItem from "../components/Toast/ToastItem";
import ToastList from "../components/Toast/ToastList";

const routes = {
	"/account": require("./Account/Account").default,
	"/admin/books": require("./AdminBooks/AdminBooks").default,
	"/admin/history": require("./AdminHistory/AdminHistory").default,
	"/admin/lib": require("./AdminLib/AdminLib").default,
	"/admin/users": require("./AdminUsers/AdminUsers").default,
	"/catalogue": require("./Catalogue/Catalogue").default,
	"/": require("./Landing/Landing").default,
	"/login": require("./Login/Login").default,
	"/register": require("./Register/Register").default,
	"/staff/requests": require("./StaffRequests/StaffRequests").default,
	"/updatedetails": require("./UpdateDetails/UpdateDetails").default,
	"/userhistory": require("./UserHistory/UserHistory").default,
};

function randomKey() {
	let length = 5;
	let chars =
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = "";
	for (var i = length; i > 0; --i)
		result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

function RouterManager() {
	const [toasts, setToasts] = useState([]);
	const [delToasts, setDelToasts] = useState([]);
	const [updater, setUpdater] = useState(false);

	useEffect(() => {
		if (delToasts.length > 0) {
			let newtoast = toasts;
			newtoast.shift();
			setToasts(toasts);

			let newdel = delToasts;
			newdel.shift();
			setDelToasts(newdel);
		}
	});

	useEffect(
		() =>
			setInterval(() => {
				if (delToasts.length > 0) {
					let newdel = delToasts;
					newdel.shift();
					setDelToasts(newdel);
				}
				//setUpdater(!updater);
			}, 100),
		[]
	);

	function pushToast(toast) {
		toast.key = randomKey();
		setToasts([
			<ToastItem key={toast.key} text={toast.text} type={toast.type} />,
			...toasts,
		]);
		setTimeout(pushDelToast, 5000, toast.key);
	}

	function pushDelToast(key) {
		setDelToasts([...delToasts, key]);
		let temp = delToasts;
		temp.push(key);
	}

	//get current route
	var path = useLocation().pathname;
	var Component = routes["/"];

	//if route does not exist then redirect to landing page
	if (routes[path]) Component = routes[path];
	else return <NotFound></NotFound>;

	return (
		<div>
			<ToastList toasts={toasts} />
			<Component pushToast={pushToast} />
		</div>
	);
}

export default RouterManager;
