const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route    GET api/contacts
// @desc     Retrieve all contacts from user
// @access   Private
router.get('/', auth, async (request, response) => {
	try {
		const contacts = await Contact.find({ user: request.user.id }).sort({
			date: -1
		});
		response.send({ contacts });
	} catch (err) {
		console.error(err.message);
		response.status(500).send('Server Error');
	}
});

// @route    POST api/contacts
// @desc     Create contact for user
// @access   Private
router.post('/', (request, response) => {
	response.send('Create new contact');
});

// @route    PUT api/contacts
// @desc     Update contact
// @access   Private
router.put('/:id', (request, response) => {
	response.send('Update existing contact');
});

// @route    DEL api/contacts
// @desc     Delete contact from user
// @access   Private
router.delete('/:id', (request, response) => {
	response.send('Delete contact');
});

module.exports = router;
