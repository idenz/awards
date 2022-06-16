const express = require('express')
const passport = require("passport");

const router = express.Router();
const controller = require('./award.controller')
const validation = require('./award.validation')

router
    .get("/", [passport.authenticate("jwt", {session: false})], controller.getAll)
    .post("/", [passport.authenticate("jwt", {session: false})], validation.create, controller.create)

router
    .get("/:id", [passport.authenticate("jwt", {session: false})], controller.getById)
    .patch("/:id", [passport.authenticate("jwt", {session: false})], validation.update, controller.update)
    .delete("/:id", [passport.authenticate("jwt", {session: false})], controller.delete)

module.exports = router