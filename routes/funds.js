// Importing all packages
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const express = require('express');
const Funds = require('../models/funds');

const router = express.Router();

router.get('/', async (req, res) => res.json(await Funds.find({})));

router.get('/:id', async (req, res) =>
	res.json(await Funds.find({ _id: req.params.id }))
);

// Updating an ads
router.put('/:id', async (req, res) => {
	const data = await Funds.findByIdAndUpdate(req.params.id, {
		$set: { ...req.body }
	});
	res.json({
		message: data ? 'Successfully updated!' : "Wasn't able to update!"
	});
});

router.get('/category/:category', async (req, res) => {
	const fund = await Funds.find({ category: req.params.category });

	if (!fund.length) res.send('Alas! Complain with the given id was not found!');
	else res.json(fund);
});

// Getting by category
router.get('/isApproved/:isApproved', async (req, res) => {
	const fund = await Funds.find({ isApproved: req.params.isApproved });

	if (!fund.length) res.send('Alas! Complain with the given id was not found!');
	else res.json(fund);
});

router.post('/', auth, async (req, res) => {
	const fund = await Funds.create({ ...req.body, isApproved: 'Pending' });
	res.send(fund);
});

router.put('/:id', [auth, admin], async (req, res) => {
	await Funds.findByIdAndUpdate(req.params.id, {
		$set: { ...req.body }
	});

	const updatedFund = await Funds.findById(req.params.id);
	res.json(updatedFund);
});

// Exporting router
module.exports = router;
