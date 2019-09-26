const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (request, response, next) => {
	//Get the token from the header
	const token = request.header('x-auth-token');

	//Check if token exists
	if (!token) {
		return response
			.status(401)
			.send({ msg: 'No token was found, authorization denied' });
	}
	try {
		//Take out the token and verify the token. Payload is stored in decoded
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		//Take out the user from the payload and assign it to the request.user
		request.user = decoded.user;
		next();
	} catch (err) {
		response.status(401).send({ msg: 'Token is not valid' });
	}
};
