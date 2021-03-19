var user = {};

/** Checks wether a JSON Object is empty
 *  @params {object} JSON Object
 *  @returns {boolean} true or false
 */
function objectIsEmpty(object) {
	return !(object && Object.keys(object).length > 0);
}

/** Retrieves authenticated user data
 *  @returns {Promise<object>} user object
 */
async function getUserData() {
	try {
		user = await (await fetch("/getUserData")).json();
		if (objectIsEmpty(user)) window.location.replace("/register");
		return user;
	} catch (e) {
		console.log(e);
		return {};
	}
}
