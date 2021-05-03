import { useState } from 'react';
import SearchSVG from '../../img/search.svg';

function SearchBar() {
	const [
		text,
		setText,
	] = useState('');

	const updateText = (e) => {
		setText(e.target.value);
	};

	return (
		<div
			style={{
				width: '30%',
				height: '5vh',
				backgroundColor: 'white',
				marginTop: '1.5vh',
				position: 'absolute',
				marginLeft: '35%',
				borderRadius: '100px',
			}}
		>
			<img
				className='unselectable'
				src={SearchSVG}
				alt='Search Logo'
				style={{ width: '3vh', position: 'relative', margin: '1vh' }}
			/>
			<input
				type='text'
				style={{
					width: '90%',
					height: '5vh',
					marginTop: '0px',
					paddingBottom: '0vh',
					transform: 'translateY(-0vh)',
					fontSize: '2.2vh',
					fontFamily: 'Lato',
					position: 'absolute',
					border: 'none',
					backgroundColor: 'transparent',
				}}
				placeholder='Search'
				onChange={updateText}
			/>
		</div>
	);
}

export default SearchBar;
