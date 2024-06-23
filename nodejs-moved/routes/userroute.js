const express = require("express");
const userController = require("../controllers/user.controller.js");
const { BASEURL } = require("../utils/constant.js");
const router = express.Router();

router.post(`${BASEURL}/signup`, userController.createUser);
router.get(`${BASEURL}/signin/:email/:password`, userController.loginUser);
router.get(`${BASEURL}/allusers`, userController.getAllUsers);

module.exports = router;
