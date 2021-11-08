const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(db => console.log('db esta conectada'))
    .catch(err => console.error(err))

module.exports = mongoose;
