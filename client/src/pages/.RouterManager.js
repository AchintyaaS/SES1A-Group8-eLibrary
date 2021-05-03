import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import ToastItem from '../components/Toast/ToastItem';
import ToastList from '../components/Toast/ToastList';

const routes = {
	'/': require('./Landing/Landing').default,
	'/account': require('./Account/Account').default,
	'/admin/books': require('./AdminBooks/AdminBooks').default,
	'/admin/history': require('./AdminHistory/AdminHistory').default,
	'/admin/lib': require('./AdminLib/AdminLib').default,
	'/admin/users': require('./AdminUsers/AdminUsers').default,
	'/catalogue': require('./Catalogue/Catalogue').default,
	'/login': require('./Login/Login').default,
	'/register': require('./Register/Register').default,
	'/staff/requests': require('./StaffRequests/StaffRequests').default,
	'/userhistory': require('./UserHistory/UserHistory').default,
};

var path;

function randomKey() {
	let length = 5;
	let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

function RouterManager() {
	const [
		toasts,
		setToasts,
	] = useState([]);
	const [
		delToasts,
		setDelToasts,
	] = useState([]);
	const [
		user,
		setUser,
	] = useState(null);

	path = useLocation().pathname;
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

	useEffect(() => {
		setInterval(() => {
			if (delToasts.length > 0) {
				let newdel = delToasts;
				newdel.shift();
				setDelToasts(newdel);
			}
		}, 100);
	}, []);

	function pushToast(toast) {
		toast.key = randomKey();
		setToasts([
			<ToastItem key={toast.key} text={toast.text} type={toast.type} />,
			...toasts,
		]);
		setTimeout(pushDelToast, 3000, toast.key);
	}

	function pushDelToast(key) {
		setDelToasts([
			...delToasts,
			key,
		]);
		let temp = delToasts;
		temp.push(key);
	}

	//get current route

	var Component = routes['/'];

	//if route does not exist then redirect to landing page
	if (routes[path]) Component = routes[path];
	else return <NotFound />;

	return (
		<div>
			<ToastList toasts={toasts} />
			<Component updateUser={setUser} pushToast={pushToast} />
		</div>
	);
}

export default RouterManager;
