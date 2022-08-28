// IMPORTS (npm modules):
require("dotenv").config(); // for using envirionment variables from .env file
const express = require("express");

// Create the express app:
const app = express();

// General MIDDLEWARE:
app.use(express.json()); // to use and parse json data
app.use((req, res, next) => {
    console.log(`${req.method} request on ${req.path}`); // logs the method and path for every server request
    next();
});

// Route MIDDLEWARE
const quizdataRoutes = require("./routes/quizdata");
app.use("/api/quizdata", quizdataRoutes);

// Start the express app:
const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}.`));
