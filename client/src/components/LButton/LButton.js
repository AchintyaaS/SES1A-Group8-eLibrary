function LButton(props) {
<<<<<<< HEAD
	return (
		<div
			className={"unselectable" + (props.clickable ? " btn" : "")}
			onClick={props.clickable ? props.onClick : () => {}}
			style={{
				width: "80%",
				height: "8vh",
				color: "white",
				fontFamily: "Roboto Mono",
				fontSize: "1.5vw",
				padding: "1.5vh",
				textAlign: "center",
				display: "block",
				margin: "auto",
				marginTop: "5vh",
				borderTopLeftRadius: "45px",
				borderBottomLeftRadius: "45px",
				borderTopRightRadius: "45px",
				borderBottomRightRadius: "45px",
				boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
				backgroundColor: props.clickable ? "blue" : "gray",
				cursor: props.clickable ? "pointer" : "default",
=======
	const ostyle = props.style || {};
	return (
		<div
			className={'unselectable' + (props.clickable ? ' btn' : '')}
			onClick={props.clickable ? props.onClick : () => {}}
			style={{
				width: ostyle.width || '80%',
				height: ostyle.height || '8vh',
				color: ostyle.color || 'white',
				fontFamily: ostyle.fontFamily || 'Roboto Mono',
				fontSize: ostyle.fontSize || '1.5vw',
				paddingTop: ostyle.paddingTop || '1.5vh',
				textAlign: ostyle.textAlign || 'center',
				display: ostyle.display || 'block',
				margin: ostyle.margin || 'auto',
				marginTop: ostyle.marginTop || '5vh',
				marginBottom: ostyle.marginBottom || 'auto',
				borderRadius: props.borderRadius || '45px',
				boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
				backgroundColor: props.clickable ? 'blue' : 'gray',
				cursor: props.clickable ? 'pointer' : 'default',
>>>>>>> b963dfd1d69c4fc98a50db08dfd0371bbbe97e4e
			}}
		>
			{props.text}
		</div>
	);
}

export default LButton;
