const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema 
const jarSchema = new Schema({
	name: {
//name of the goal
		type: String,
		required: true
	},
	paperclipsIn: {
//paperclips that are in the jar
		type: Number,
		required: true
	},
	paperclipsOut: {
//paperclips that are still outside the jar
		type: Number,
		required: true
	}
})

module.exports = jarDatabase = mongoose.model("Jar", jarSchema);