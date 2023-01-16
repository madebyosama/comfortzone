// Importing all packages
const mongoose = require("mongoose");
const Joi = require("Joi");

// Users schema
const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	cnic: {
		type: String,
		require: true
	},
	dob: {
		type: Date,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	houseID: {
		type: String,
		require: true
	},
	membershipID: {
		type: String,
		require: true
	},
	sector: {
		type: String,
		require: true
	},
	type: {
		type: String,
		require: true
	}
});

function validateUser(user) {
	// Designing schema for the user
	const schema = {
		name: Joi.string()
			.min(3)
			.required(),
		// cnic: Joi.string()
		// 	.min(11)
		// 	.required(),
		// dob: Joi.date().required(),
		email: Joi.string().required(),
		password: Joi.string()
			.min(8)
			.required()
		// houseID: Joi.string().required(),
		// membershipID: Joi.string().required(),
		// sector: Joi.string()
		// 	.max(1)
		// 	.required(),
		// type: Joi.string().required()
	};
	// Validating Schema using Joi
	return Joi.validate(user, schema);
}

// Exporting users
const Users = (module.exports = mongoose.model("Users", userSchema));

// Exporting validation function
module.exports.validateUser = validateUser;
