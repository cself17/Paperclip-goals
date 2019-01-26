const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema 
const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	jars: [
		{
			type: Schema.Types.ObjectId,
			ref: "Jar"
		}
	]
})


module.exports = user = mongoose.model("user", userSchema);