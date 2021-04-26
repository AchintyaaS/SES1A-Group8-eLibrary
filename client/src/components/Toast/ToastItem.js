import React from "react";

function ToastItem(props) {
	return (
		<div
			style={{
				width: "100%",
				height: "fit-content",
				marginTop: "0.5vh",
				marginBottom: "1.5vh",
				padding: "0.2vw",
				paddingTop: "0.2vw",
				display: "block",
				backgroundColor: props.type === "error" ? "#FFCFCB" : "#CDE2FF",
				textAlign: "center",
				borderLeft:
					(props.type === "error" ? "#E9594C" : "#3D84E5") +
					" 8px solid",
				borderTopLeftRadius: "5px",
				borderBottomLeftRadius: "5px",
				borderTopRightRadius: "5px",
				borderBottomRightRadius: "5px",
				boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
			}}
		>
			{props.text}
		</div>
	);
}

export default ToastItem;
