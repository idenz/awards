const express = require('express')
const passport = require("passport");

const router = express.Router();
const controller = require('./user.controller')

router
    .get("/", controller.getAll)
    .post("/", controller.create)

router
    .get("/profile", [passport.authenticate("jwt", {session: false})], controller.getProfile)

module.exports = router