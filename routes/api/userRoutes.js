const express = require("express");
const router = express.Router();

const user = require("../../models/user");

// router.get('/', (req, res) => {
// 	user.find()
// 	.then(jarDatabase => res.json(user))
// })

router.post('/', (req, res) => {
	const newUser = new Jar({
		name: req.body.name,
		password: req.body.paperclipsIn,
		jars: req.body.paperclipsOut
	});
	newUser.save().then(user => res.json(user));
})

// router.route().put(ctrl.adduser)

module.exports = router;