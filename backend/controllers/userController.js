// IMPORTS:
const User = require("../models/userModel");

// LOGIN USER FUNCTION:
const loginUser = async (req, res) => {
    res.json({ mssg: "Login user.." });
};

// SIGNUP USER FUNCTION:
const signupUser = async (req, res) => {
    res.json({ mssg: "Signup user.." });
};

module.exports = { loginUser, signupUser };
