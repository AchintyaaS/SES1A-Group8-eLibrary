import { useState } from 'react';

import eyeopen from '../../img/password-eye-open.png';
import eyeclosed from '../../img/password-eye-closed.png';

function LTextBox(props) {
	const [
		show,
		setShow,
	] = useState(false);

	return (
		<div className='ltextbox-container' style={{ margin: 'auto', marginBottom: '2vh' }}>
			<div
				className='ltextbox-tag'
				style={{
					width: 'fit-content',
					display: 'block',
					marginLeft: '3.5vw',
					fontFamily: 'Roboto Mono',
					fontWeight: 'Bold',
					color: 'rgba(1, 44, 61, 1)',
				}}
			>
				{props.tag}
			</div>
			<input
				type={show ? 'text' : props.type}
				value={props.value}
				onChange={(e) => {
					props.onChange(e.target.value);
				}}
				placeholder={props.tag === 'Email ID' ? 'name@student.uni.edu.au' : '***************'}
				style={{
					width: '80%',
					height: '8vh',
					border:
						'2px solid ' +
						(props.docondition
							? props.condition(props.value) ? 'green' : props.value.length > 0 ? 'red' : 'black'
							: 'black'),
					borderRadius: '10px',
					boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
					fontFamily: 'Roboto Mono',
					fontSize: '1.5vw',
					display: 'block',
					paddingLeft: '0.75vw',
					paddingRight: props.type === 'password' ? '3.1vw' : '1vw',
					margin: 'auto',
				}}
			/>
			{props.type === 'password' ? (
				<div
					className='login-right-eye'
					onClick={() => {
						setShow(!show);
					}}
					style={{
						width: '5vh',
						height: '4vh',
						display: 'block',
						float: 'right',
						transform: 'translate(-3.7vw, -5vh)',
					}}
				>
					<img
						className='unselectable'
						src={show ? eyeopen : eyeclosed}
						style={{ width: '100%' }}
						alt='eye'
					/>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default LTextBox;
