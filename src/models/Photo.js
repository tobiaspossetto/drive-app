const {Schema, model} = require('mongoose');

const Photo = new Schema({
    title: {type: 'string'},
    imageURL: {type: 'string'},
    public_id: {type: 'string'},
    type : {type: 'string'}

});
//, required: true

//exporto el modulo
module.exports = model('Photo', Photo);