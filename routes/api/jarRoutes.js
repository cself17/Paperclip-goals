const express = require("express");
const router = express.Router();
const jarController = require("../../controllers/jarController")

const jar = require("../../models/jarDatabase")

//Get api/jar
//get all information for a jar
router.get('/', (req, res) => {
	jar.find()
		.then(jarDatabase => res.json(jarDatabase))
		.catch(err => res.status(err.response.status || 500).send(err))
})

// Example:
// /api/jar/5ei6zi2lkajsdfl2lfl2
router.get("/:id", (req, res) => {
	// req.params.id = '5ei6zi2lkajsdfl2lfl2'
	jar.findById(req.params.id)
		.then(jarDatabase => res.json(jarDatabase))
		.catch(err => res.status(err.response.status || 500).send(err))
})

router.put('/:id/addpaperclip', (req, res) => {
	console.log("req.params.id", req.params.id)
	jar.findByIdAndUpdate(
		req.params.id,
		{
			$inc: {paperclipsIn: 1, paperclipsOut: -1} 
		}
		// db.users.update({ userId:89 }, { $inc : { "subjectResults.attempts" : 1, "subjectResults.total_time" : 10, "subjectResults.total_score" : 100 } })

	)
		.then(jarDatabase => res.json(jarDatabase))
		.catch(err => res.status(500).send(err))
})


router.post('/', (req, res) => {
	const newJar = new jar({
		name: req.body.name,
		paperclipsIn: req.body.paperclipsIn,
		paperclipsOut: req.body.paperclipsOut
	});
	newJar.save().then(myjar => {
		// the following syntax is not right, but a guide for what to do
		// user.findOneAndUpdate({id: theUserId}, {jars: {$PUSH: newJar._id}}).then(dbResponse => res.json(myjar))
		res.json(myjar)
	});
})


module.exports = router;