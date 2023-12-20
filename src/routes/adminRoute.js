const express = require('express')
const multer = require('multer')
const {query} = require('express-validator')
const adminController = require('./../controllers/adminController.js')
const router = express.Router()

const config = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/img')),
    filename: (req, file, cb) => cb(null, Date.now() + '_' + file.originalname)
})

const receptor = multer({config})

router.get('/admin', adminController.admin)
router.get('/admin/create', adminController.create)
router.post('/admin/create', adminController.postCreate)
router.get('/admin/edit', adminController.edit)
router.post('/admin/edit:id', adminController.postEdit)
router.delete('/admin/delete/:id', adminController.deleteId)

module.exports =router
