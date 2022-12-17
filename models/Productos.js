const mongoose = require ('mongoose');

const productosSchema=mongoose.Schema({
    idPedido: {
        type : String,
        required:true
    },
    NombreCliente: {
        type : String,
        required:true
    },
    NombreProducto: {
        type : String,
        required:true
    },
    cantidad: {
        type : Number,
        required:true
    },
    valorProducto: {
        type : Number,
        required:true
    },
    valorTotalPedido: {
        type : Number,
        required:true
    },
    fechaPedido: {
        type : String,
        required:true
    },
},{ versionkey:false});

module.exports = mongoose.model('productos',productosSchema)