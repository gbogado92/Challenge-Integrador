const express = require('express')
const multer = require('multer')
const mainController = require('./../controllers/mainController.js')
const router = express.Router()

const config = multer.diskStorage({
    destination: './../../assets/img',
    filename: (req, file, cb) => cb(null,'${Date.now()}_${file.originalname}')
})

const receptor = multer({config})

router.get('/', mainController.inicio)

router.get('/home', mainController.home)

router.get('/contact', mainController.contact )

router.get('/about', mainController.about)

router.get('/faqs', mainController.faqs)


module.exports = router
