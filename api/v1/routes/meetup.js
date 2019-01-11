import express from "express";
import meetups from "../models/meetup";

const router = express.Router();

//Getting all meetup records
router.get("/api", (req, res) => {
    res.status(200).send({
        success: "true",
        message: "Meetups gotten successfully",
        data: meetups
    });
});

//Getting a single meetup record
router.get("/api/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    meetups.map((meet) => {
        if (meet.id === id) {
            return res.status(200).send({
                success: "true",
                message: "Meetup record successfully retrieved",
                meet
            });
        }
    });

    return res.status(404).send({
        success: "false",
        message: "meetup record does not exist"
    });
});

//Create a meetup record
router.post("/api", (req, res) => {
	if(!req.body.location){
		return res.status(400).send({
			success: "false",
			message: "location is required"
		});
	}else if(!req.body.images){
		return res.status(400).send({
			success: "false",
			message: "image is required"
		});
	}else if(!req.body.topic){
		return res.status(400).send({
			success: "false",
			message: "topic is required"
		});
	}else if(!req.body.happeningOn){
		return res.status(400).send({
			success: "false",
			message: "Meetup date is required"
		});
	}else if(!req.body.tags){
		return res.status(400).send({
			success: "false",
			message: "tags is required"
		});
	}
	const {
		location, images, topic, happeningOn, tags
	} = req.body;
	const meetup = {
		id: meetups.length + 1,
		createdOn: new Date(),
		location,
		images,
		topic,
		happeningOn,
		tags,
	}

	meetups.push(meetup);
	return res.status(201).send({
		success: "true",
		message: "You have successfully created a meetup group",
		meetup: meetup
	});
    
});

//Delete a meetup record
router.delete("/api/:id", (req, res) => {
	const id = parseInt(req.params.id, 10);
	meetups.map((meet, index) => {
		if(meet.id === id){
			meetups.splice(index, 1);
			return res.status(200).send({
				success: "true",
				message: "Meetup Record deleted successfully"
			});
		}
	});

	return res.status(400).send({
		success: "false",
		message: "Record not found"
	});
});

export default router;