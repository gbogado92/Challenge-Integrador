const express = require('express')
const uploadFile = require('../mw/multer.js')
const {requireAdmin} = require('../mw/express-session.js')
const adminController = require('./../controllers/adminController.js')
const router = express.Router()



router.get('/admin', adminController.admin)
router.get('/admin/create', adminController.create)
router.post('/admin/create', upload.File.fields([{ name: 'image_front', maxCount: 1 }, { name: 'image_back', maxCount: 1 }]), adminController.postCreate)
router.get('/admin/edit', adminController.edit)
router.post('/admin/edit:id', uploadFile.fields([{ name: 'image_front', maxCount: 1 }, { name: 'image_back', maxCount: 1 }]), adminController.postId)
router.delete('/admin/delete/:id', adminController.deleteId)

module.exports =router