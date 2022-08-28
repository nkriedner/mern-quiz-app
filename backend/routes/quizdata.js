// IMPORTS 1 (npm modules):
const express = require("express");

const router = express.Router();

// GET all quizdata
router.get("/", (req, res) => {
    res.json({ mssg: "GET all quizdata" });
});

// GET a single quizdata
router.get("/:id", (req, res) => {
    res.json({ mssg: "GET a single quizdata" });
});

// POST a new quizdata
router.post("/:id", (req, res) => {
    res.json({ mssg: "POST a new quizdata" });
});

// DELETE a quizdata
router.delete("/:id", (req, res) => {
    res.json({ mssg: "DELETE a quizdata" });
});

// UPDATE a quizdata
router.patch("/:id", (req, res) => {
    res.json({ mssg: "UPDATE a quizdata" });
});

module.exports = router;
