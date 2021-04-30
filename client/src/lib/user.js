const axios = require("axios").default;

const protocol = "http://";
const host = "localhost:90";

const USER_TEXT_MAP = {
	role: {
		1: "Student",
		2: "Staff",
		3: "Librarian",
		4: "Admin",
	},
};

var user = {};

/** Checks wether a JSON Object is empty
 *  @params {object} JSON Object
 *  @returns {boolean} true or false
 */
/*function objectIsEmpty(object) {
	return !(object && Object.keys(object).length > 0);
}*/

async function logout() {
	try {
		user = await axios.request({
			url: `${protocol}${host}/logout`,
			method: "get",
			withCredentials: true,
		});
	} catch {}
}

/** Retrieves authenticated user data
 *  @returns {Promise<object>} user object
 */
async function getUserData() {
	try {
		user = await axios
			.request({
				url: `${protocol}${host}/getUserData`,
				method: "get",
				withCredentials: true,
			})
			.then((res) => (user = res.data));
		if (user.error) return user;
		user.role_text = USER_TEXT_MAP.role[user.role];
		delete user.iat;
		return user;
	} catch (e) {
		console.log(e);
		return {};
	}
}

export { getUserData, logout };
