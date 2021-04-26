import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Toast from "./components/Toast/Toast";
import RouterManager from "./pages/.RouterManager";

function App() {
	return (
		<Router>
			<RouterManager></RouterManager>
			<Toast />
		</Router>
	);
}

export default App;
