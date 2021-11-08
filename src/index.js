const express = require('express');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer')
const Cloudinary = require('cloudinary');

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const app = express();
require('./database')

 
//settings 
app.set('port',process.env.PORT || 4000);
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req,file,cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})


Cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



//middlewares
app.use(morgan('dev'));

app.use(multer({storage}).single('image'))

app.use(express.json());

app.use(express.urlencoded({extended:false}));

// Routes
app.use('/',require('./routes/routes'))

//start
app.listen(app.get('port'), () =>{
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`)
});