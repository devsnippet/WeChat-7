var express = require('express')
var router = express.Router()
var multer  = require('multer')
var upload = multer({ dest: './public/upload/' })
var History = require('../controllers/history')

router.get('/article', History.artInfo)
router.post('/article', upload.single('img'), History.artInsert)
router.get('/banner', History.barInfo)
router.post('/banner', upload.single('img'), History.barInsert)
router.delete('/', History.historyDelete)

module.exports = router