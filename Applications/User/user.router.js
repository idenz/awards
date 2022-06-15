const express = require('express')

const router = express.Router();
const controller = require('./user.controller')

router
    .get("/", controller.getAll)
    .post("/", controller.create)

module.exports = router