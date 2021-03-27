//gets user details to display
getUserData().then((user) => {
    console.log(user);
	document.getElementById("username").innerText = user.username;
    document.getElementById("email").innerText = user.email;
    document.getElementById("role").innerText = user.role_text;
    
});
