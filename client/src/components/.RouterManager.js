import { useLocation } from "react-router-dom";
import NotFound from "./NotFound/NotFound";

const routes = {
	"/": require("./Landing/Landing").default,
	"/login": require("./Login/Login").default,
	"/register": require("./Register/Register").default,
	/*"/": require("../Landing/Landing").default,
	"/": require("../Landing/Landing").default,*/
};

function RouterManager() {
	//get current route
	var path = useLocation().pathname;
	var Component = routes["/"];

	//if route does not exist then redirect to landing page
	if (routes[path]) Component = routes[path];
	else return <NotFound></NotFound>;

	return <Component />;
}

export default RouterManager;
