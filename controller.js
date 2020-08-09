const express = require('express')
const router = express.Router()

const multer = require('multer')
const multerConfig = require('./config/multer_config')

const upload = multer(multerConfig.config).single(multerConfig.keyUpload)

router.get('/product', (req, res) => {
    res.send(`GET Product`)
})


router.post('/product', (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            console.log(`error : ${JSON.stringify(err)}`);
        } else if (err) {
            console.log(`error : ${JSON.stringify(err)}`);
        }
    })
    const fileName = req.file ? req.file.fieldname : undefined
    res.send(`POST Product: ${req.params.id}, ${fileName}`)
})

module.exports = router