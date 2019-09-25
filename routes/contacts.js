const express = require('express')
const router = express.Router()

// @route    GET api/contacts
// @desc     Retrieve all contacts from user
// @access   Private
router.get('/', (request, response) => {
	response.send('Get logged in user')
})

// @route    POST api/contacts
// @desc     Create contact for user
// @access   Private
router.post('/', (request, response) => {
	response.send('Create new contact')
})

// @route    PUT api/contacts
// @desc     Update contact
// @access   Private
router.put('/:id', (request, response) => {
	response.send('Update existing contact')
})

// @route    DEL api/contacts
// @desc     Delete contact from user
// @access   Private
router.delete('/:id', (request, response) => {
	response.send('Delete contact')
})

module.exports = router
