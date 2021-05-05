import { useState } from 'react';
import iconSuccess from '../../img/icon-success.svg';
import iconError from '../../img/icon-error.svg';
import iconInfo from '../../img/icon-info.svg';

const types = {
	success: {
		icon: iconSuccess,
		title: 'Success!',
		backgroundColor: '#43D787',
	},
	error: {
		icon: iconError,
		title: 'Error!',
		backgroundColor: '#F9461C',
	},
	info: {
		icon: iconInfo,
		title: 'Info',
		backgroundColor: '#0086D6',
	},
};

function ToastItem(props) {
	const [
		visible,
		setVisible,
	] = useState(true);

	return (
		<div
			className='unselectable'
			style={{
				width: '20vw',
				height: '5.11vw',
				marginTop: '0.5vh',
				marginBottom: '1.5vh',
				padding: '0.2vw',
				paddingTop: '0.2vw',
				display: 'block',
				float: 'right',
				color: 'white',
				backgroundColor: types[props.type].backgroundColor,
				//textAlign: 'center',
				//borderLeft: (props.type === 'error' ? '#E9594C' : '#3D84E5') + ' 8px solid',
				borderTopLeftRadius: '5px',
				borderBottomLeftRadius: '5px',
				borderTopRightRadius: '5px',
				borderBottomRightRadius: '5px',
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
				visibility: visible ? '' : 'hidden',
				pointerEvents: 'auto',
				cursor: 'pointer',
				zIndex: '2001',
			}}
			onClick={() => {
				props.pushDelToast(props.key);
			}}
		>
			<div
				style={{
					width: '20vw',
					height: '4vh',
					position: 'absolute',
					marginTop: '0.9vw',
					marginLeft: '1vw',
				}}
			>
				<img src={types[props.type].icon} style={{ width: '2.5vw', display: 'block', float: 'left' }} />
				<div style={{ marginLeft: '1vw' }}>
					<div style={{ fontFamily: 'Roboto', fontSize: '1.04vw', marginLeft: '2vw' }}>
						{types[props.type].title}
					</div>
					<div style={{ fontFamily: 'Roboto', fontSize: '0.9vw', marginLeft: '2vw' }}>{props.text}</div>
				</div>
			</div>
		</div>
	);
}

export default ToastItem;
