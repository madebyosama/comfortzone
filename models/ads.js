// Importing all packages
const mongoose = require('mongoose');
const Joi = require('Joi');

// Ads schema
const adSchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	category: {
		type: String,
		require: false
	},
	imageUrl1: {
		type: String,
		require: false
	},
	imageUrl2: {
		type: String,
		require: false
	},
	imageUrl3: {
		type: String,
		require: false
	},
	imageUrl4: {
		type: String,
		require: false
	},
	requiredAmount: {
		type: Number,
		require: false
	},
	condition: {
		type: String,
		require: false
	},
	date: {
		type: Date,
		required: false
	},
	userId: {
		type: String,
		required: false
	},
	userImage: {
		type: String,
		required: false
	},
	userName: {
		type: String,
		required: false
	}
});

// Validation function
function validateAd(ad) {
	const schema = {
		title: Joi.string()
			.min(10)
			.required(),
		description: Joi.string()
			.min(50)
			.required(),
		requiredAmount: Joi.number()
			.min(1)
			.required(),
		condition: Joi.required()
	};
	return Joi.validate(ad, schema);
}

// Exporting ads
const Ads = (module.exports = mongoose.model('Ads', adSchema));

// Exporting validation function
module.exports.validateAd = validateAd;
