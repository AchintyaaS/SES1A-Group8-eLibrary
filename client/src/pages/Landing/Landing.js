<<<<<<< HEAD
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

	return (
		<div>
			Landing
			<EzRedirect to={redirTo} delay={0} doRedir={redirect} />
=======
import { useEffect, useState } from 'react';
import EzRedirect from '../../components/EzRedirect/EzRedirect';
import NavBar from '../../components/NavBar/NavBar';
import LButton from '../../components/LButton/LButton';
import { getUserData, logout } from '../../lib/user';

function Landing(props) {
	const [
		user,
		setUser,
	] = useState({});
	const [
		redirect,
		setRedirect,
	] = useState(false);
	const [
		redirTo,
		setRedirTo,
	] = useState('/');

	const doLogout = () => {
		props.pushToast({ type: 'info', text: 'You have been logged out.' });
		logout();
		setUser(null);
		props.updateUser(null);
		doRedir('/login');
	};

	const firstCapitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const doRedir = (to) => {
		setRedirTo(to);
		setRedirect(true);
	};

	useEffect(() => {
		getUserData().then((res) => {
			if (res.error) {
				doRedir('/login');
			} else {
				setUser(res);
				props.updateUser(res);
			}
		});
	}, []);

	return (
		<div>
			{user ? <NavBar doRedir={doRedir} logout={doLogout} user={user} /> : ''}
			<EzRedirect to={redirTo} delay={0} doRedir={redirect} />
			<div
				style={{
					width: 'fit-content',
					padding: '10px',
					paddingBottom: 'none',
					border: '2px solid',
					borderColor: '#1034A6',
					borderRadius: '15px',
					backgroundColor: '#8cd3ff',
					marginTop: '2vh',
					marginLeft: '1vw',
				}}
			>
				<div style={{ margin: 'auto', textAlign: 'center' }}>User Details</div>
				{user ? (
					Object.entries(user).map(
						(
							[
								k,
								v,
							],
						) =>
							k === 'username' || k === 'email' || k === 'role_text' ? (
								<div>{(k === 'role_text' ? 'Role' : firstCapitalize(k)) + ': ' + v}</div>
							) : (
								''
							),
					)
				) : (
					''
				)}
				<LButton
					text='Edit'
					clickable={true}
					onClick={() => {
						doRedir('/');
					}}
					style={{
						width: '5vw',
						height: '3vh',
						fontSize: '2vh',
						paddingTop: '0vh',
						margin: 'auto',
						marginTop: '2vh',
						marginBottom: '0px',
					}}
				/>
			</div>
>>>>>>> b963dfd1d69c4fc98a50db08dfd0371bbbe97e4e
		</div>
	);
}

export default Landing;
