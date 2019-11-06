require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// @route    POST api/users
// @desc     Register a user
// @access   Public
router.post(
	'/',
	[
		check('name', 'Please add name')
			.not()
			.isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with six or more characters'
		).isLength({ min: 6 })
	],
	async (request, response) => {
		const errors = validationResult(request);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}
		const { name, email, password } = request.body;

		try {
			let user = await User.findOne({ email });
			if (user) {
				return response.status(400).json({ msg: 'User already exists' });
			}
			user = new User({
				name,
				email,
				password
			});
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id
				}
			};
			jwt.sign(
				payload,
				process.env.JWT_SECRET,
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
			response.status(500).send({ msg: 'Sever Error saving User to DB' });
		}
	}
);

module.exports = router;
