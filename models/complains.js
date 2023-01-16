// Importing all packages
const mongoose = require("mongoose");
const Joi = require("Joi");

// Setting the schema
const complainSchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	imageUrl: {
		type: String,
		require: true
	},
	status: {
		type: String,
		require: true
	}
});

// Validating schema
function validateComplain(complain) {
	const schema = {
		title: Joi.string()
			.min(15)
			.required(),
		description: Joi.string()
			.min(50)
			.required(),
		status: Joi.string()
	};
	return Joi.validate(complain, schema);
}

const Complain = (module.exports = mongoose.model("Complains", complainSchema));

// Exporting validations
module.exports.validateComplain = validateComplain;
