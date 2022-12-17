const express = require ('express');
const conectarBD = require ('../config/bd');
const cors = require ('cors');

//creamos el servidor 
const app = express();
const port = 5000;

//enlazar la coneccion
conectarBD();
app.use(cors());
app.use(express.json());

app.use('/api/proveedores',require('../routers/proveedores'));
app.use('/api/citas',require('../routers/citas'));
app.use('/api/productos',require('../routers/productos'));

//mostrar un mensaje en el navegador 
app.get('/', (req,res)=>{
    res.send("bienvenido el servidor ya esta configurado");
});


app.listen(port,() => console.log (" servidor conectado al puerto", port))
