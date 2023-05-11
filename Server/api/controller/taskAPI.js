const router = require('express').Router();
const taskSchema = require("../models/taskSchema");

//Create Or Modify Project
router.post(("/create"), async (req, res, next) => {
    const taskId = req.body.taskId;
    const taskName = req.body.taskName;
    const projectId = req.body.projectId;
    const assignedTo = req.body.assignedTo;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const status = req.body.status;
    // const company = req.body.company;
    const priority = req.body.priority;
    const description = req.body.description;
    taskSchema.findOne({ taskId: taskId }, async (err, doc) => {
        if (err) throw err;
        if (doc) {
            taskSchema.findOneAndUpdate({ taskId: taskId }, {
                $set: {
                    taskId: taskId,
                    taskName: taskName,
                    assignedTo: assignedTo,
                    projectId: projectId,
                    startDate: startDate,
                    endDate: endDate,
                    status: status,
                    priority: priority,
                    description: description,
                }
            }, function (err, docs) {
                if (err) throw err;
                else {
                    res.send("Task Updated Succesfully")
                }
            })
        }
        if (!doc) {
            const task = new taskSchema({
                taskId: taskId,
                taskName: taskName,
                projectId: projectId,
                assignedTo: assignedTo,
                startDate: startDate,
                endDate: endDate,
                status: status,
                priority: priority,
                description: description,
            })
            await task.save();
            return res.status(200).json({ msg: "Task Added SuccessFully" })
        }
    })

})


module.exports = router;