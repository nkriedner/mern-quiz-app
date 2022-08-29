// IMPORTS:
const mongoose = require("mongoose");

// Initialize a mongoose Schema:
const Schema = mongoose.Schema;

// Create a (new) specific mongoose Schema:
const quizdataSchema = new Schema(
    {
        category: {
            type: String,
            required: true,
        },
        question: {
            type: String,
            required: true,
        },
        answer1: {
            type: String,
            required: true,
        },
        answer2: {
            type: String,
            required: true,
        },
        answer3: {
            type: String,
            required: true,
        },
        answer4: {
            type: String,
            required: true,
        },
        solution: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Create a 'Quizdata' collection with the quizdataSchema and export it:
module.exports = mongoose.model("Quizdata", quizdataSchema);
