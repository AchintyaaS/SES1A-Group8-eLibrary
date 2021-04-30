//gets public user data
getUserData().then((user) => {
	document.getElementById("username").innerText = user.username;
	document.getElementById("role").innerText = user.role_text;
});
