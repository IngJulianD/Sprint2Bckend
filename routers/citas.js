const express = require ('express');
const router = express.Router();
const  CitasController= require('../controllers/CitasController');


router.get('/',CitasController.vercitas);
router.post('/',CitasController.agregarcitas);
router.get('/:id',CitasController.consultarunacita);
router.delete('/:id',CitasController.eliminarcita);
router.put('/:id',CitasController.actualizarcita);
module.exports = router;
