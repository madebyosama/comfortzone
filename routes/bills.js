// Importing all packages
const express = require('express');
const Bills = require('../models/bills');

// Setting the router
const router = express.Router();

// Getting all bills
router.get('/', async (req, res) => await res.json(await Bills.find({})));

router.get('/:id', async (req, res) =>
	res.json(await Bills.find({ userId: req.params.id }))
);

// Updating an ads
router.put('/:id', async (req, res) => {
	const data = await Bills.findByIdAndUpdate(req.params.id, {
		$set: { ...req.body }
	});
	res.json({
		message: data ? 'Successfully updated!' : "Wasn't able to update!"
	});
});

// Exporting router
module.exports = router;
