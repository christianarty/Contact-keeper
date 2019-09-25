const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

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
	(request, response) => {
		const errors = validationResult(request);
		if (!errors.isEmpty()){return response.status(400).json({errors: errors.array()})}
		response.send('Passed');
	}
);

module.exports = router;
