const router = require("express").Router();
const jarRoutes = require("./jarRoutes");
const userRoutes = require("./userRoutes")

router.use("/jar", jarRoutes);
router.use(".userRoutes", userRoutes)

module.exports = router;