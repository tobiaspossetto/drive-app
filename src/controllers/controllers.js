const Photo = require('../models/Photo');
//fs para borrar las imagenes en el servidor
const fs = require('fs-extra');
const Cloudinary = require('cloudinary');
const Controllers  =  {

    
    async UploadFile (req, res) {
        //console.log(req.body)
        //console.log(req.file)
       // console.log('----------')
        const result = await Cloudinary.v2.uploader.upload(req.file.path)
        //console.log(result)
        
        const newPhoto =  new Photo({title : req.body.title, imageURL: result.url , public_id: result.public_id, type: result.format})
        await newPhoto.save()
        await fs.unlink(req.file.path)
      
        res.send('hello')
    },

    //get
    async GetFiles (req, res) {
        const photos = await Photo.find()
        console.log(photos)
        res.send('hello')
    },

    //delete 

     async DeleteFile (req, res) {
        const {id} = req.params
        const response = await Photo.findByIdAndDelete(id)
        console.log(response)
        const result = await Cloudinary.v2.uploader.destroy(response.public_id)
        console.log('--------------------------')
        console.log(result)
        res.send('Eliminado')
    }
}

module.exports = Controllers
