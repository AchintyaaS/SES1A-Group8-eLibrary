import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import RouterManager from "./pages/.RouterManager";

function App() {
	return (
		<Router>
			<RouterManager></RouterManager>
		</Router>
	);
}

export default App;
