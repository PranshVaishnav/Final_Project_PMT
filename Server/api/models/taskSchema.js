const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
    {
        taskId: { type: String, required: true, unique: true },
        taskName: {
            type: String,
            required: true,
        },
        projectId: { type: String, required: true },
        assignedTo: [{ type: String }],
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        status: { type: String, required: true },
        priority: { type: String, required: true },
        description: { type: String, required: true },

    },
    { timestamps: true }
);

module.exports = mongoose.model("tasks", taskSchema);
