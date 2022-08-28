// Import and use dotenv module for using envirionment variables from .env file:
require("dotenv").config();

// Import NPM modules:
const express = require("express");

// Create the express app:
const app = express();

// Middleware:
app.use((req, res, next) => {
    console.log(`${req.method} request on ${req.path}`);
});

// Create route(s):
app.get("/", (req, res) => {
    res.json({ mssg: "You are on the / route" });
});

// Start the express app:
const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}.`));
