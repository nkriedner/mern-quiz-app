// IMPORTS (npm modules):
require("dotenv").config(); // for using envirionment variables from .env file
const express = require("express");
const mongoose = require("mongoose");

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
const userRoutes = require("./routes/user");
app.use("/api/quizdata", quizdataRoutes);
app.use("/api/user", userRoutes);

// Connect to DB:
const port = process.env.PORT;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB.");
        // Start the express app:
        app.listen(port, () => console.log(`Server started on port ${port}.`));
    })
    .catch((error) => {
        console.log("Error when connecting to DB:", error);
    });
