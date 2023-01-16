// Importing all packages
const auth = require('../middleware/auth');
const express = require('express');
const Ads = require('../models/ads');
const { validateAd } = require('../models/ads');

// Setting the router
const router = express.Router();

// Finding all ads
router.get('/', async (req, res) => {
	// Getting all ads
	const ads = await Ads.find({});
	// Checking if no user exists
	if (!ads.length) res.status(400).send('No user was found in the database!');
	// If ads exit, sending that ads
	else res.json(ads);
});

// Finding ad by id
router.get('/:id', async (req, res) => {
	res.json(await Ads.find({ _id: req.params.id }));
});

// Finding ad by category
router.get('/category/:category', async (req, res) => {
	// Declaring a category variable
	const category = req.params.category;
	// Getting all ads under the required category
	const ads = await Ads.find({ category });
	// If no ads exits under the required category
	if (!ads.length)
		res.status(400).send('Alas! There are no ads exits under this category!');
	// If ads exits under the required category
	else res.json(ads);
});

// Finding ad by condition
router.get('/condition/:condition', async (req, res) => {
	// Declaring a condition variable
	const condition = req.params.condition;
	// Getting all ads under the required condition
	const ads = await Ads.find({ condition });
	// If no ads exits under the required condition
	if (!ads.length)
		res.status(400).send('Alas! There are no ads exits under this condition!');
	// If ads exits under the required condition
	else res.json(ads);
});

// Posting a single ad
router.post('/', auth, async (req, res) => {
	// Validating the ad
	// const result = validateAd(req.body);

	// //Checking for any validation errors
	// if (result.error) {
	// 	return res.status(400).send(result.error.details[0].message);
	// }
	// // If no error was found
	// else {
	const ad = await Ads.create({ ...req.body });
	res.send(ad);
	// }
});

// Updating an ads
router.put('/:id', auth, async (req, res) => {
	const data = await ads.findByIdAndUpdate(req.params.id, {
		$set: { ...req.body }
	});
	res.json({
		message: data ? 'Successfully updated!' : "Wasn't able to update!"
	});
});

// Deleting a ad by ID
router.delete('/:id', auth, async (req, res) => {
	const data = await Ads.findByIdAndDelete(req.params.id);
	res.json({
		message: data ? 'Successfully deleted!' : "Wasn't able to delete!"
	});
});

// Exporting router
module.exports = router;
