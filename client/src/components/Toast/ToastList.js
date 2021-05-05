function ToastList({ toasts }) {
	return (
		<div
			style={{
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
		</div>
	);
}

export default ToastList;
