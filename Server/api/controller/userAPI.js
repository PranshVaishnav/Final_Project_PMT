const router = require("express").Router();
const passport = require("passport");
const userSchema = require("../models/user");
const projectSchema = require("../models/projectSchema");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const fullName = req.body.fullName;
  const username = req.body.username;
  const companyName = req.body.companyName;
  const mobile = req.body.mobile;
  const password = await bcrypt.hash(req.body.password, 10);
  const github = req.body.github;
  const dateOfBirth = req.body.dateOfBirth;
  userSchema.findOne({ username: username }, async (err, doc) => {
    if (err) throw err;

    if (!doc) {
      const user = new userSchema({
        fullName: fullName,
        username: username,
        companyName: companyName,
        mobile: mobile,
        password: password,
        github: github,
        dateOfBirth: dateOfBirth,
      });
      await user.save();
      return res.status(200).json({ msg: "User Added SuccessFully" });
    } else if (doc) {
      return res.status(400).json({ msg: " User Already Exist" });
    }
  });
};

exports.loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) res.send({ status: "500", message: "Try Again Later" });
    else if (!user) return res.send({ status: "202", message: "wrong cred" });
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send({ status: "200", message: "Autheticated " });
        console.log(req.user.fullName);
      });
    }
  })(req, res, next);
};

exports.getMyProjects = async (req, res, next) => {
  try {
    if (req.user == null) {
      return res.status(500).json({ message: "user not loggedin" });
    }

    myProject = await projectSchema.find({ leaderId: req.user.user._id });

    return res.status(200).json({ myProject });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getContributingProjects = async (req, res) => {
  try {
    contributingProjects = await projectSchema.find({ memberId: req.body.userId }).select("_id")

    return res.status(200).json({ contributingProjects })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

exports.userDetails = (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
};

// module.exports = router;
