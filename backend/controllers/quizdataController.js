const Quizdata = require("../models/quizdataModel");
const mongoose = require("mongoose");

// GET all quizdata:
const getAllQuizdata = async (req, res) => {
    const user_id = req.user._id;

    const allQuizdata = await Quizdata.find({ user_id }).sort({ createdAt: -1 });

    res.status(200).json(allQuizdata);
};

// GET a single quizdata:
const getQuizdata = async (req, res) => {
    const { id } = req.params;

    // Check if id is a valid mongoose id:
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "This is not a valid mongoose id" });
    }

    const quizdata = await Quizdata.findById(id);

    // Check if quizdata id exists in database
    if (!quizdata) {
        return res.status(404).json({ error: "There is no quizdata for this id" });
    }

    res.status(200).json(quizdata);
};

// CREATE a new quizdata:
const createQuizdata = async (req, res) => {
    const { category, question, answer1, answer2, answer3, answer4, solution } = req.body;

    // Check empty form fields:
    let emptyFields = [];

    if (!category) {
        emptyFields.push("category");
    }
    if (!question) {
        emptyFields.push("question");
    }
    if (!answer1) {
        emptyFields.push("answer 1");
    }
    if (!answer2) {
        emptyFields.push("answer 2");
    }
    if (!answer3) {
        emptyFields.push("answer 3");
    }
    if (!answer4) {
        emptyFields.push("answer 4");
    }
    if (!solution) {
        emptyFields.push("solution");
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all the fields!", emptyFields });
    }

    // Add document to database:
    try {
        const user_id = req.user._id;
        const quizdata = await Quizdata.create({
            category,
            question,
            answer1,
            answer2,
            answer3,
            answer4,
            solution,
            user_id,
        });
        res.status(200).json(quizdata);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE a quizdata:
const deleteQuizdata = async (req, res) => {
    const { id } = req.params;

    // Check if id is a valid mongoose id:
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "This is not a valid mongoose id" });
    }

    const quizdata = await Quizdata.findOneAndDelete({ _id: id });

    // Check if quizdata id exists in database
    if (!quizdata) {
        return res.status(404).json({ error: "There is no quizdata for this id" });
    }

    res.status(200).json(quizdata);
};

// UPDATE a quizdata:
const updateQuizdata = async (req, res) => {
    const { id } = req.params;

    // Check if id is a valid mongoose id:
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "This is not a valid mongoose id" });
    }

    const quizdata = await Quizdata.findOneAndUpdate(
        { _id: id },
        {
            ...req.body, // spreads the properties in the body in the quizdata
        }
    );

    // Check if quizdata id exists in database
    if (!quizdata) {
        return res.status(404).json({ error: "There is no quizdata for this id" });
    }

    res.status(200).json(quizdata);
};

module.exports = { getAllQuizdata, getQuizdata, createQuizdata, deleteQuizdata, updateQuizdata };
