import { useLocation } from "react-router-dom";
import NotFound from "./NotFound/NotFound";

const routes = {
	"/": require("./Landing/Landing").default,
	"/account": require("./Account/Account").default,
	"/admin/books": require("./AdminBooks/AdminBooks").default,
	"/admin/history": require("./AdminHistory/AdminHistory").default,
	"/admin/lib": require("./AdminLib/AdminLib").default,
	"/admin/users": require("./AdminUsers/AdminUsers").default,
	"/catalogue": require("./Catalogue/Catalogue").default,
	"/login": require("./Login/Login").default,
	"/register": require("./Register/Register").default,
	"/staff/requests": require("./StaffRequests/StaffRequests").default,
	"/userhistory": require("./UserHistory/UserHistory").default,
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
