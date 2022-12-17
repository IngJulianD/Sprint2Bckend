const Citas = require('../models/Citas');

exports.vercitas = async (req,res) => {
    try {
        const citas = await Citas.find();
        res.json(citas);
    } catch (error) {
        console.log(error);
        res.status(500).send("error al consultar las citas");
    }
}

exports.agregarcitas = async (req,res) => {
    try {
        let citas;
        citas = new Citas(req.body)

        await citas.save();
        res.send(citas);
    } catch (error) {
        console.log(error);
        res.status(500).send("error agregar citas");
    }

}

exports.consultarunacita = async (req,res) => {
    try {
        let citas = await Citas.findById(req.params.id);
        if (!citas){
            res.status(404).json({msg:"no podemos encontrar la cita"});

        }
        res.send(citas);

        
    } catch (error) {
        console.log(error);
        res.status(500).send("error agregar cita");
    }

}

exports.eliminarcita = async (req,res) => {
    try {
        let citas = await Citas.findById(req.params.id);
        if (!citas){
            res.status(404).json({msg:"no podemos encontrar la cita"});
            return 
        }
        await Citas.findOneAndRemove({_id:req.params.id});
        res.json({msg:"la cita fue eliminada"})

        
    } catch (error) {
        console.log(error);
        res.status(500).send("error agregar proveedores");
    }

}

exports.actualizarcita = async (req,res) => {
    try {
        const {fecha,hora,nombres,sitio}=req.body;
        let citas = await Citas.findById(req.params.id);
        if (!citas){
            res.status(404).json({msg:"no existe la cita"});
            return 
        }
        citas.fecha = fecha;
        citas.hora = hora;
        citas.nombres = nombres;
        citas.sitio = sitio;

        citas = await Citas.findOneAndUpdate({_id: req.params.id}, citas, {new: true});
        res.json(citas);

        
    } catch (error) {
        console.log(error);
        res.status(500).send("error de conexion");
    }

}
