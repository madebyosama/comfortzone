// Importing all packages
const mongoose = require('mongoose');

// Setting mongoose schema
const billSchema = {
	dateOfIssue: {
		type: Date,
		require: true
	},
	dueDate: {
		type: Date,
		require: true
	},
	arrearAmount: {
		type: Number,
		require: true
	},
	waterCharges: {
		type: Number,
		require: true
	},
	conservancyCharges: {
		type: Number,
		require: true
	},
	streetLightCharges: {
		type: Number,
		require: true
	},
	roadMaintenanceCharges: {
		type: Number,
		require: true
	},
	graveyardCharges: {
		type: Number,
		require: true
	},
	electricityCharges: {
		type: Number,
		require: true
	},
	totalAmount: {
		type: Number,
		require: true
	},
	dueAmount: {
		type: Number,
		require: true
	},
	isPaid: {
		type: Boolean,
		required: true
	}
};

// Exporting bills
const Bills = (module.exports = mongoose.model('Bills', billSchema));
