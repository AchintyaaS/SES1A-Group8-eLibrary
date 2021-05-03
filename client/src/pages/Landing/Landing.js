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
		logout();
		setUser(null);
		props.updateUser(null);
		doRedir('/login');
	};

	const doRedir = (to) => {
		setRedirTo(to);
		setRedirect(true);
	};

	useEffect(() => {
		getUserData().then((res) => {
			if (res.error) {
				doLogout();
			} else {
				setUser(res);
				props.updateUser(res);
			}
		});
	}, []);

	return (
		<div>
			{user ? <NavBar doRedir={doRedir} logout={doLogout} user={user} /> : ''}
			Landing
			<EzRedirect to={redirTo} delay={0} doRedir={redirect} />
			{user ? (
				Object.entries(user).map(([ k, v
				]) => <div>{v}</div>)
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
					margin: '1vw',
					marginTop: '1vh',
				}}
			/>
		</div>
	);
}

export default Landing;
