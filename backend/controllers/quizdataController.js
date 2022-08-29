const Quizdata = require("../models/quizdataModel");
const mongoose = require("mongoose");

// GET all quizdata:
const getAllQuizdata = async (req, res) => {
    const allQuizdata = await Quizdata.find({}).sort({ createdAt: -1 });

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

    // Add document to database:
    try {
        const quizdata = await Quizdata.create({ category, question, answer1, answer2, answer3, answer4, solution });
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
