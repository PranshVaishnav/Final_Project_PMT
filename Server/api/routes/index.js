const router = require("express").Router();

const userController = require("../controller/userAPI");
const projectController = require("../controller/projectAPI");

// console.log("OK");

// User Apis
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/logedinuser", userController.userDetails);
router.post("/myProjects", userController.getMyProjects);
router.post("/contributingProjects", userController.getContributingProjects);

// project apis
router.post("/project/create", projectController.createProject);
router.post("/project/addmember", projectController.addMember);

// router.post('/user', require('../controller/userAPI/registerUser'));
// router.use('/project', require('../controller/projectAPI'));
router.use("/task", require("../controller/taskAPI"));

module.exports = router;
