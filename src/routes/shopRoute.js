const express = require('express')
const multer = require('multer')
const shopController = require('./../controllers/shopController.js')
const router = express.Router()

const config = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/img')),
    filename: (req, file, cb) => cb(null, Date.now() + '_' + file.originalname)
})

const receptor = multer({config})

router.get('/shop', shopController.shop)
router.get('/shop/item', shopController.id)
router.post('/shop/item/:id/add', shopController.postAdd)
router.get('/shop/cart', shopController.cart)
router.post('/shop/cart', shopController.postCart) //cart checkout

module.exports = router