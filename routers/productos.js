const express = require ('express');
const router = express.Router();
const  productosController= require('../controllers/productosController');


router.get('/',productosController.verproductos);
router.post('/',productosController.agregarproductos);
router.get('/:id',productosController.consultarunproducto);
router.delete('/:id',productosController.eliminarproducto);
router.put('/:id',productosController.actualizarproducto);
module.exports = router;
