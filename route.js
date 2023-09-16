const express = require("express");
const router = express.Router();
const {register,login,forgot} = require("./Controller/function")

router.route("/register").post(register);
router.route("/login").post(login)
router.route("/forgot").post(forgot)

module.exports = router;