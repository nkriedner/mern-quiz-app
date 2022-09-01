// IMPORTS:
const User = require("../models/userModel");

// LOGIN USER FUNCTION:
const loginUser = async (req, res) => {
    res.json({ mssg: "Login user.." });
};

// SIGNUP USER FUNCTION:
const signupUser = async (req, res) => {
    const { email, password } = req.body; // destructuring email and password from the request body

    try {
        const user = await User.signup(email, password); // calls the static signup model of the User model

        res.status(200).json({ email, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginUser, signupUser };
