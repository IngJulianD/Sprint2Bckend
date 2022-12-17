const express = require ('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');


router.get('/',proveedoresController.consultarProveedores);
router.post('/',proveedoresController.agregarProveedores);
router.get('/:id',proveedoresController.consultarunProveedor);
router.delete('/:id',proveedoresController.eliminarProveedor);
router.put('/:id',proveedoresController.actualizarProveedor);
module.exports = router;
