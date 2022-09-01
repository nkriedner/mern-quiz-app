// IMPORTS:
const mongoose = require("mongoose");

// Initialize a mongoose Schema:
const Schema = mongoose.Schema;

// Create a (new) specific mongoose Schema:
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);
