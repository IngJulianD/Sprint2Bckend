const mongoose = require ('mongoose');

//se coloca el esuqema que esta en la base de datos

const citasSchema=mongoose.Schema({
    fecha: {
        type : String,
        required:true
    },
    hora: {
        type : String,
        required:true
    },
    nombres: {
        type : String,
        required:true
    },
    sitio: {
        type : String,
        required:true
    },
},{ versionkey:false});

module.exports = mongoose.model('citas',citasSchema)