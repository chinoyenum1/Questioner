import express from "express";
import meetups from "./v1/models/meetup";
import bodyParser from "body-parser";
import router from "./v1/routes/meetup.js";

//set up the express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

//get all the meetups


//Getting a single meetup record


//Creating a meetup record


//Delete a meetup record




const PORT = 5000;

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});

export default app;