const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

/*// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");*/

//Db Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
	.connect(db)
	.then(() => console.log("MongoDB connected!"))
	.catch(err => console.log(err));


// Start the API server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
