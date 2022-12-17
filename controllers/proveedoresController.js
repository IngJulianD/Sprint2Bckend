const Proveedore = require('../models/Proveedore');

exports.consultarProveedores = async (req,res) => {
    try {
        const proveedores = await Proveedore.find();
        res.json(proveedores);
    } catch (error) {
        console.log(error);
        res.status(500).send("error al consultar los proveedores");
    }
}



exports.agregarProveedores = async (req,res) => {
    try {
        let proveedor;
        proveedor = new Proveedore(req.body)

        await proveedor.save();
        res.send(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).send("error agregar proveedores");
    }

}
exports.consultarunProveedor = async (req,res) => {
    try {
        let proveedors = await Proveedore.findById(req.params.id);
        if (!proveedors){
            res.status(404).json({msg:"no podemos encontrar el rpoveedor"});

        }
        res.send(proveedors);

        
    } catch (error) {
        console.log(error);
        res.status(500).send("error agregar proveedores");
    }

}
exports.eliminarProveedor = async (req,res) => {
    try {
        let proveedo = await Proveedore.findById(req.params.id);
        if (!proveedo){
            res.status(404).json({msg:"no podemos encontrar el rpoveedor"});
            return 
        }
        await Proveedore.findOneAndRemove({_id:req.params.id});
        res.json({msg:"el proveedor fue eliminado"})

        
    } catch (error) {
        console.log(error);
        res.status(500).send("error agregar proveedores");
    }

}

exports.actualizarProveedor = async (req,res) => {
    try {
        const {nombres,apellidos,documento,correo,telefono,direccion,empresa}=req.body;
        let proveed = await Proveedore.findById(req.params.id);
        if (!proveed){
            res.status(404).json({msg:"no existe el rpoveedor"});
            return 
        }
        proveed.nombres = nombres;
        proveed.apellidos = apellidos;
        proveed.documento = documento;
        proveed.correo = correo;
        proveed.telefono = telefono;
        proveed.direccion = direccion;
        proveed.empresa = empresa;

        proveed = await Proveedore.findOneAndUpdate({_id: req.params.id}, proveed, {new: true});
        res.json(proveed);

        
    } catch (error) {
        console.log(error);
        res.status(500).send("error de conexion");
    }

}

