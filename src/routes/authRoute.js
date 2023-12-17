const express = require('express')
const multer = require('multer')
const {query, validation} = require('express-validator')
const authController = require('./../controllers/authController.js')
const router = express.Router()

const config = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/img')),
    filename: (req, file, cb) => cb(null, Date.now() + '_' + file.originalname)
})

const receptor = multer({config})

router.get('/auth/login', query('email').notEmpty,authController.login)
router.post('/auth/login', authController.postLogin)
router.get('/auth/register', authController.edit)
router.post('/auth/register', authController.postEdit)
router.get('/auth/logout', authController.logout)

module.exports = router