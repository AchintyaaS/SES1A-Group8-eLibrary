<<<<<<< HEAD
import logo from "../../img/utslogo.png";
=======
import logo from '../../img/elib-logo.svg';
>>>>>>> b963dfd1d69c4fc98a50db08dfd0371bbbe97e4e

function LoginLeftCard() {
	return (
		<div
<<<<<<< HEAD
			className="login-left-card"
			style={{
				width: "40vw",
				height: "66vh",
				backgroundColor: "rgba(33, 55, 69, 1)",
				display: "block",
				margin: "auto",
				float: "left",
				marginLeft: "20vw",
				marginTop: "16vh",
				borderRadius: "45px",
				boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
			}}
		>
			<img
				className="unselectable"
				style={{
					width: "80%",
					transform: "translateX(-3%)",
					marginTop: "1vh",
				}}
				src={logo}
			></img>
			<div
				className="login-title"
				style={{
					width: "fit-content",
					height: "fit-content",
					color: "rgba(255, 255, 255, 1)",
					fontFamily: "Roboto Mono",
					fontSize: "3vw",
					margin: "auto",
					transform: "translate(-5vw, -5vh)",
=======
			className='login-left-card'
			style={{
				width: '40vw',
				height: '66vh',
				backgroundColor: 'rgba(33, 55, 69, 1)',
				display: 'block',
				margin: 'auto',
				float: 'left',
				marginLeft: '20vw',
				marginTop: '16vh',
				borderRadius: '45px',
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			}}
		>
			<img
				className='unselectable'
				style={{
					width: '30%',
					transform: 'translateX(-3%)',
					marginTop: '15vh',
					marginLeft: '9vw',
				}}
				src={logo}
			/>
			<div
				className='login-title'
				style={{
					width: 'fit-content',
					height: 'fit-content',
					color: 'rgba(255, 255, 255, 1)',
					fontFamily: 'Roboto Mono',
					fontSize: '3vw',
					margin: 'auto',
					marginTop: '7vh',
					transform: 'translate(-5vw, -5vh)',
>>>>>>> b963dfd1d69c4fc98a50db08dfd0371bbbe97e4e
				}}
			>
				Library System
			</div>
		</div>
	);
}

export default LoginLeftCard;
