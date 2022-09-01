// IMPORTS:
const mongoose = require("mongoose"); // for database connection
const byrypt = require("bcrypt"); // for hashing passwords

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

// static signup model:
// (the function needs to be a regular function to use the 'this' keyword)
userSchema.statics.signup = async function (email, password) {
    // Check if email already esists in database:
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("An account with this email already exists in the database.");
    }

    // Generate hashed password:
    const salt = await byrypt.genSalt(10);
    const hash = await byrypt.hash(password, salt);

    // Create user:
    const user = await this.create({ email, password: hash });

    return user;
};

module.exports = mongoose.model("User", userSchema);
