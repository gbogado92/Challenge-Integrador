const express = require('express')
const bodyParser = require('body-parser')
const validator = require('../mw/validator.js')
const authController = require('./../controllers/authController.js')
const router = express.Router()

router.use(bodyParser.json())

router.get('/auth/login', authController.login)
router.post('/auth/login', authController.postLogin)
router.get('/auth/register', authController.register)
router.post('/auth/register', validator.newRegister,authController.postRegister)
router.get('/auth/logout', authController.logout)

module.exports = router