const express = require('express')

const router = express.Router();
const controller = require('./award.controller')
const validation = require('./award.validation')

router
    .get("/", controller.getAll)
    .post("/", validation, controller.create)

module.exports = router