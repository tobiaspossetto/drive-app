
const express = require('express');
const router = express.Router();

const {UploadFile, GetFiles, DeleteFile} = require('../controllers/controllers')

router.get('/get', GetFiles)

//TODO: CAMBIAR A METODO DELETE
router.get('/delete/:id', DeleteFile)

router.post('/add', UploadFile)

module.exports = router;
