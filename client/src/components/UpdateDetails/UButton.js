function UButton(props) {
	return (
		<div
			className={"unselectable" + (props.clickable ? " btn" : "")}
			onClick={props.onClick}
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
			}}
		>
			{props.text}
		</div>
	);
}

export default UButton;