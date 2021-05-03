import { useState, useEffect } from 'react';

import SearchBar from '../SearchBar/SearchBar';

function NavBar(props) {
	return (
		<div
			style={{
				width: '100vw',
				height: '8vh',
				backgroundColor: '#F6F8FB',
				display: 'flex',
			}}
		>
			<div
				className='unselectable'
				style={{
					width: '7vw',
					fontFamily: 'Lato',
					fontWeight: '600',
					marginTop: '2vh',
					marginLeft: '1vw',
					fontSize: '1.4vw',
				}}
			>
				E-Library
			</div>
			<SearchBar />
			{props.user ? (
				<div>
					<div
						className='navbar-username unselectable'
						style={{
							color: 'black',
							fontFamily: 'Lato',
							fontSize: '2.5vh',
							position: 'absolute',
							display: 'block',
							right: '2vw',
							marginTop: '2.2vh',
							cursor: 'pointer',
							backgroundColor: '#F6F8FB',
							zIndex: '100',
						}}
						onClick={props.logout}
					>
						{props.user.username}
					</div>
					<div
						className='unselectable'
						style={{
							color: 'red',
							fontFamily: 'Lato',
							fontSize: '2.5vh',
							position: 'absolute',
							display: 'block',
							right: '2vw',
							marginTop: '2.2vh',
							cursor: 'pointer',
							zIndex: '1',
						}}
					>
						Logout
					</div>
				</div>
			) : null}
		</div>
	);
}

export default NavBar;
