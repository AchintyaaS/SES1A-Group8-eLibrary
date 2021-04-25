import LoginLeftCard from "../../components/LoginCards/LoginLeftCard";
import LoginRightCard from "../../components/LoginCards/LoginRightCard";

function Login() {
	return (
		<div
			className="main-container"
			style={{
				height: "100vh",
				backgroundColor: "rgba(240, 240, 225, 1)",
			}}
		>
			<LoginLeftCard />
			<LoginRightCard title="Login" mode="login" btnText="Log In" />
		</div>
	);
}

export default Login;
