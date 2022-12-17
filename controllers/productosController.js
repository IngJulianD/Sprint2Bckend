const Productos = require('../models/Productos');

exports.verproductos = async (req,res) => {
    try {
        const productos = await Productos.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send("error al consultar los productos");
    }
}

exports.agregarproductos = async (req,res) => {
    try {
        let productos;
        productos = new Productos(req.body)

        await productos.save();
        res.send(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send("error agregar productos");
    }

}

exports.consultarunproducto = async (req,res) => {
    try {
        let producto = await Productos.findById(req.params.id);
        if (!producto){
            res.status(404).json({msg:"no podemos encontrar el producto"});

        }
        res.send(producto);

        
    } catch (error) {
        console.log(error);
        res.status(500).send("error agregar producto");
    }

}

exports.eliminarproducto = async (req,res) => {
    try {
        let producto = await Productos.findById(req.params.id);
        if (!producto){
            res.status(404).json({msg:"no podemos encontrar la cita"});
            return 
        }
        await Productos.findOneAndRemove({_id:req.params.id});
        res.json({msg:"el producto fue eliminado"})

        
    } catch (error) {
        console.log(error);
        res.status(500).send("error agregar producto");
    }

}

exports.actualizarproducto = async (req,res) => {
    try {
        const {idPedido,NombreCliente,NombreProducto,cantidad,valorProducto,valorTotalPedido,fechaPedido}=req.body;
        let producto = await Productos.findById(req.params.id);
        if (!producto){
            res.status(404).json({msg:"no existe el producto"});
            return 
        }
        producto.idPedido = idPedido;
        producto.NombreCliente = NombreCliente;
        producto.NombreProducto = NombreProducto;
        producto.cantidad = cantidad;
        producto.valorProducto = valorProducto;
        producto.valorTotalPedido = valorTotalPedido;
        producto.fechaPedido = fechaPedido;


        producto = await Productos.findOneAndUpdate({_id: req.params.id}, producto, {new: true});
        res.json(producto);

        
    } catch (error) {
        console.log(error);
        res.status(500).send("error de conexion");
    }

}
