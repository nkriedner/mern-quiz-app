// IMPORTS:
const User = require("../models/userModel");
const jwt = require("jsonwebtoken"); // module for create web token (cookies)

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// LOGIN USER FUNCTION:
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password); // calls the static login model of the User model

        // Create Token:
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// SIGNUP USER FUNCTION:
const signupUser = async (req, res) => {
    const { email, password } = req.body; // destructuring email and password from the request body

    try {
        const user = await User.signup(email, password); // calls the static signup model of the User model

        // Create Token:
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginUser, signupUser };
