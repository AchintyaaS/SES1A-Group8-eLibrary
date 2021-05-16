function LButton(props) {
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
			}}
		>
			{props.text}
		</div>
	);
}

export default LButton;
