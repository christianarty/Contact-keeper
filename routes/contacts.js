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
router.post('/', [auth,[
	check('name', 'Name is required').not().isEmpty(),	
]], async (request, response) => {
	const errors = validationResult(request);
	if (!errors.isEmpty){
		return response.send({errors: errors.array()})
	}
	const {name, email, phone, contactType} = request.body;
	try {
		const newContact =  new Contact({
			name,
			email,
			phone,
			contactType,
			user: request.user.id
		});
		const contact = await newContact.save();

		response.send(contact)
	} catch (err) {
		console.error(err.message)
		response.status(500).send('Server error')
	}
});

// @route    PUT api/contacts
// @desc     Update contact
// @access   Private
router.put('/:id',auth, async (request, response) => {
	response.send('Update existing contact');
});

// @route    DEL api/contacts
// @desc     Delete contact from user
// @access   Private
router.delete('/:id', (request, response) => {
	response.send('Delete contact');
});

module.exports = router;
