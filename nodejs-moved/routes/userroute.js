const userController = require("../controllers/user.controller.js");
const { BASEURL } = require("../utils/constant.js");

module.exports = (app) => {
  app.post(`${BASEURL}/signup`, userController.createUser);
  app.get(`${BASEURL}/signin/:email/:password`, userController.loginUser);
  app.get(`${BASEURL}/allusers`, userController.getAllUsers);
};

// const express = require("express");
// const userController = require("../controllers/user.controller.js");
// const { BASEURL } = require("../utils/constant.js");
// const router = express.Router();

// router.post(`${BASEURL}/signup`, userController.createUser);
// router.get(`${BASEURL}/signin/:email/:password`, userController.loginUser);
// router.get(`${BASEURL}/allusers`, userController.getAllUsers);

// module.exports = router;
