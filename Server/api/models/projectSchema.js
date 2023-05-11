const mongoose = require("mongoose");
// import userSchema from ("./user")
const projectSchema = mongoose.Schema(
    {
        projectName: {
            type: String,
            required: true,
        },
        leaderId: { type: String, required: true },
        memberId: [{ type: String }],
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        status: { type: String, required: true },
        description: { type: String, required: true },

    },
    { timestamps: true }
);

module.exports = mongoose.model("projects", projectSchema);
