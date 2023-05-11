const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        fullName: { type: String, required: true },
        username: {
            type: String,
            required: true,
            unique: true,
            match:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        },
        companyName: { type: String, required: true },
        mobile: { type: String, required: true },
        // bookmarkedProject: {},

        password: { type: String, required: true },
        github: { type: String, required: true },
        dateOfBirth: { type: String, required: true },
        profilePic: { type: String },

    },
    { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
