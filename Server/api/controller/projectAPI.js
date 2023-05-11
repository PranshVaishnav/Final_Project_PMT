const router = require("express").Router();
const projectSchema = require("../models/projectSchema");

//Create Or Modify Project
exports.createProject = async (req, res, next) => {
  if (req.user == null) {
    return res.status(500).json({ message: "user not logged in" });
  }

  const projectId = req.body.projectId;
  const projectName = req.body.projectName;
  const leaderId = req.user.user._id;
  const memberId = req.body.memberId;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const status = req.body.status;
  const company = req.body.company;
  const description = req.body.description;

  const projectDetail = {
    projectName: projectName,
    leaderId: leaderId,
    memberId: memberId,
    startDate: startDate,
    endDate: endDate,
    status: status,
    description: description,
  };

  if (leaderId == null) {
    return res.status(500).json({ message: "user not logged in" });
  }

  //   console.log(req.user.user);

  if (projectId) {
    const updatedroject = await projectSchema.findByIdAndUpdate(
      projectId,
      {
        $set: projectDetail,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Project updated Successfully", updatedroject });
  } else {
    const project = new projectSchema(projectDetail);
    await project.save();
    return res
      .status(200)
      .json({ project: project, msg: "Project Added SuccessFully" });
  }
};

exports.addMember = async (req, res) => {
  try {
    if (req.user == null) {
      return res.status(500).json({ message: "user not logged in" });
    }

    projectId = req.body.projectId;
    userId = req.body.userId;

    const addMember = await projectSchema.findByIdAndUpdate(
      projectId,
      {
        $push: { memberId: userId },
      },
      { new: true }
    );
    res.status(200).json({
      message: "member added",
      updatedProject: addMember,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
