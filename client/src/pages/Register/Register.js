import { useState, useEffect } from 'react';

import LoginLeftCard from '../../components/LoginCards/LoginLeftCard';
import LoginRightCard from '../../components/LoginCards/LoginRightCard';
import EzRedirect from '../../components/EzRedirect/EzRedirect';

import { getUserData } from '../../lib/user';

import binder from '../../img/book-binder.png';

function Register(props) {
	const [
		redir,
		setRedir,
	] = useState(false);

	useEffect(() => {
		getUserData().then((res) => {
			if (!res.error) setRedir(true);
		});
	});

	return (
		<div
			className='main-container'
			style={{
				height: '100vh',
				backgroundColor: 'rgba(240, 240, 225, 1)',
			}}
		>
			<EzRedirect to='/' delay={0} doRedir={redir} />
			<LoginLeftCard />
			<LoginRightCard title='Register' mode='register' btnText='Register' pushToast={props.pushToast} />
			<div
				style={{
					width: '100vw',
					position: 'absolute',
					marginTop: '28vh',
					pointerEvents: 'none',
				}}
			>
				<img
					className='unselectable'
					src={binder}
					style={{
						width: '4vw',
						display: 'block',
						margin: 'auto',
						marginBottom: '5vh',
					}}
				/>
				<img
					className='unselectable'
					src={binder}
					style={{
						width: '4vw',
						display: 'block',
						margin: 'auto',
						marginBottom: '5vh',
					}}
				/>
				<img
					className='unselectable'
					src={binder}
					style={{
						width: '4vw',
						display: 'block',
						margin: 'auto',
						marginBottom: '5vh',
					}}
				/>
				<img
					className='unselectable'
					src={binder}
					style={{
						width: '4vw',
						display: 'block',
						margin: 'auto',
						marginBottom: '5vh',
					}}
				/>
				<img
					className='unselectable'
					src={binder}
					style={{
						width: '4vw',
						display: 'block',
						margin: 'auto',
						marginBottom: '5vh',
					}}
				/>
			</div>
		</div>
	);
}

export default Register;
