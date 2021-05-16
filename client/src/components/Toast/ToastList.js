function ToastList({ toasts }) {
	return (
		<div
			style={{
<<<<<<< HEAD
				width: "25vw",
				height: "100vh",
				//backgroundColor: "rgba(0,0,0,0.5)",
				position: "fixed",
				right: "0",
				marginRight: "0.5vw",
				zIndex: "1000",
				pointerEvents: "none",
			}}
		>
			{toasts.length > 0 ? toasts : ""}
=======
				width: '25vw',
				height: '100vh',
				//backgroundColor: 'rgba(0,0,0,0.5)',
				position: 'fixed',
				right: '0',
				marginRight: '0.5vw',
				zIndex: '1000',
				pointerEvents: 'none',
				//visibility: 'hidden',
			}}
		>
			{toasts.length > 0 ? toasts : ''}
>>>>>>> b963dfd1d69c4fc98a50db08dfd0371bbbe97e4e
		</div>
	);
}

export default ToastList;
