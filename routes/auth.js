const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');

// @route    GET api/auth
// @desc     Get logged in user
// @access   Private
router.get('/', (request, response) => {
	response.send('Get logged in user');
});

// @route    POST api/auth
// @desc     Auth user & get token
// @access   Public
router.post(
	'/',
	[
		check('email', 'Please enter a valid email address').isEmail(),
		check('password', 'Password is required').exists()
	],
	async (request, response) => {
		const errors = validationResult(request);
		if (!errors.isEmpty()) {
			return response.status(400).send({ errors: errors.array() });
		}
		const { email, password } = request.body;
		try {
			let user = await User.findOne({ email });
			if (!user) {
				return response.status(400).send({ msg: 'Invalid credentials' });
			}
			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return response.status(400).send({ msg: 'Invalid credentials' });
			}

			const payload = {
				user: {
					id: user.id
				}
			};
			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					expiresIn: 360000
				},
				(err, token) => {
					if (err) throw err;
					response.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			response.status(500).send('Server error');
		}
	}
);

module.exports = router;
