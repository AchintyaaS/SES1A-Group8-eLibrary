<Router>
	<Switch>
		{/* Landing page */}
		<Route path="/" exact>
			Landing
		</Route>
		{/* Login page */}
		<Route path="/login" exact>
			Login
		</Route>
		{/* Registration page */}
		<Route path="/register" exact></Route>
		{/* Account details page */}
		<Route path="/account" exact></Route>
		{/* Book Catalogue page */}
		<Route path="/catalogue" exact></Route>
		{/* Personal Book History page */}
		<Route path="/history" exact></Route>
		{/* Redirect to landing page */}
		<Route
			path="/admin"
			render={() => {
				return <Redirect to="/"></Redirect>;
			}}
			exact
		></Route>
		{/* (ADMIN) Book History page */}
		<Route path="/admin/history" exact></Route>
		{/* (ADMIN) Library page */}
		<Route path="/admin/lib" exact></Route>
		{/* (ADMIN) Books page */}
		<Route path="/admin/books" exact></Route>
		{/* (ADMIN) Users page */}
		<Route path="/admin/users" exact></Route>
		{/* Redirect to landing page */}
		<Route
			path="/staff"
			render={() => {
				return <Redirect to="/"></Redirect>;
			}}
			exact
		></Route>
		{/* (STAFF) Requests page */}
		<Route path="/staff/requests" exact></Route>
		<Route> Not Found </Route>
	</Switch>
</Router>;
