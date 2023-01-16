// Importing all packages
const auth = require('../middleware/auth');
const express = require('express');

// Importing the complains JSON
const Complains = require('../models/complains');
const { validateComplain } = require('../models/complains');

// Setting the router
const router = express.Router();

// Getting
router.get('/', async (req, res) => {
	// Getting all complains
	const complains = await Complains.find({});
	// Checking if complains exits
	if (!complains.length) res.send('No complain was found');
	// Sending the complains to the client
	else res.json(complains);
});

// Finding a complain with id
router.get('/id/:id', async (req, res) => {
	// Getting a complain with the provided id
	const complain = await Complains.find({ _id: req.params.id });
	// Checking if complain with provided id exists
	if (!complain.length)
		res.send('Alas! Complain with the given id was not found!');
	// Sending the complain to the client
	else res.json(complain);
});

// Posting a single user
router.post('/', auth, async (req, res) => {
	// Validating the complain
	const result = validateComplain(req.body);

	//Checking for any validation errors
	if (result.error) {
		return res.status(400).send(result.error.details[0].message);
	}
	// If no error was found
	else {
		const complain = await Complains.create({ ...req.body });
		res.send(complain);
	}
});

// Updating a single user
router.put('/:id', auth, async (req, res) => {
	// Finding the user under the Id and updating the provided variables
	await Complains.findByIdAndUpdate(req.params.id, {
		$set: { ...req.body }
	});

	const updatedComplain = await Complains.findById(req.params.id);
	res.json(updatedComplain);
});

// Deleting a user by ID
router.delete('/:id', auth, async (req, res) => {
	const data = await Complains.findByIdAndDelete(req.params.id);
	res.json({
		message: data ? 'Successfully deleted!' : "Wasn't able to delete!"
	});
});

// Exporting router
module.exports = router;
