
const express = require('express');
const router = express.Router();

const {UploadFile, GetFiles, DeleteFile} = require('../controllers/controllers')

router.get('/', GetFiles)


router.delete('/delete/:id', DeleteFile)

router.post('/add', UploadFile)

module.exports = router;
