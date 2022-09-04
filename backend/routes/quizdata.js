// IMPORTS 1 (npm modules):
const express = require("express");
const Quizdata = require("../models/quizdataModel"); // imports the quizdata model
const {
    getAllQuizdata,
    getQuizdata,
    createQuizdata,
    deleteQuizdata,
    updateQuizdata,
} = require("../controllers/quizdataController"); // imports the functions to interact with the database
const requireAuth = require("../middleware/requireAuth");

const router = express.Router(); // creates an express router

// AUTHENTICATION MIDDLEWARE:
router.use(requireAuth);

// GET all quizdata
router.get("/", getAllQuizdata);

// GET a single quizdata
router.get("/:id", getQuizdata);

// POST a new quizdata
router.post("/", createQuizdata);

// DELETE a quizdata
router.delete("/:id", deleteQuizdata);

// UPDATE a quizdata
router.patch("/:id", updateQuizdata);

module.exports = router;
