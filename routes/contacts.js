const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// @route    GET api/contacts
// @desc     Retrieve all contacts from user
// @access   Private
router.get('/', auth, async (request, response) => {
	try {
		const contacts = await Contact.find({ user: request.user.id }).sort({
			date: -1
		});
		response.send( contacts );
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
	const {name, email, phone, contactType} = request.body;

	//Build contact obj
	const contactFields = {};
	if(name) contactFields.name = name;
	if(email) contactFields.email = email;
	if(phone) contactFields.phone = phone;
	if(contactType) contactFields.contactType = contactType;

	try {
		let contact = await Contact.findById(request.params.id);

		if (!contact) return response.status(404).send({msg:'Contact not found'})

		// Make sure user owns contact
		if(contact.user.toString() !== request.user.id){
			return response.status(401).send({msg: 'Not authorized to this contact'})
		}
		contact = await Contact.findByIdAndUpdate(request.params.id, {$set:contactFields},{new:true});

		response.send(contact)
	} catch (err) {
		console.error(err.message)
		response.status(500).send('Server error')
	}
});

// @route    DEL api/contacts
// @desc     Delete contact from user
// @access   Private
router.delete('/:id', auth, async (request, response) => {
	try {
		let contact = await Contact.findById(request.params.id);

		if (!contact) return response.status(404).send({msg:'Contact not found'})

		// Make sure user owns contact
		if(contact.user.toString() !== request.user.id){
			return response.status(401).send({msg: 'Not authorized to this contact'})
		}
		await Contact.findByIdAndRemove(request.params.id)

		response.send({msg:'Contact removed'})
	} catch (err) {
		console.error(err.message)
		response.status(500).send('Server error')
	}
});

module.exports = router;
