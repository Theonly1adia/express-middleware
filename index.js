const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");

app.use(express.json());



const vacationDate = new Date("2024-12-26");

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max:3,
    message: "Too many requests. Please try again after a minute.",
});

const logTravelDetails = (req, res, next) => {
    console.log("=== Travel Request Info ===");
    if (req.query.destination) {
        console.log(`Destination ${req.query.destination}`);
    } else {
        console.log("No destination specified.");
    }

    if (req.query.travelDate) {
        console.log (`Travel Date: ${req.query.travelDate}`);
    } else {
        console.log("No travel date specified");
    }

    console.log("=======================");
    next();
}

app.use(limiter);

app.use(logTravelDetails);

app.get("/", (req,res) =>{
    res.send("Welcome to the Travel Planner!")
});

app.get("/countdown", (req, res) => {
    const now = new Date();
    const timeDifference = vacationDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 / 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        res.send(`Countdown to vacation: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`);

    }else {
        res.send("Your vacation has stated or passed!");
    }


    
});


app.listen (3000, () => {
    console.log("Server started on http://localhost:3000");
})