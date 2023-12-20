const express = require('express')
const shopController = require('./../controllers/shopController.js')
const router = express.Router()



router.get('/shop', shopController.shop)
router.get('/shop/item:id', shopController.id)
router.post('/shop/item/:id/add', shopController.postAdd)
router.get('/shop/cart', shopController.cart)
router.post('/shop/cart', shopController.postCart) //cart checkout

module.exports = router