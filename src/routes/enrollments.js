const express = require('express');
const router = express.Router();
const enrollmentsCtrl = require('../controllers/enrollmentsController');


router.get('/', enrollmentsCtrl.list);
router.get('/:id', enrollmentsCtrl.getById);
router.post('/', enrollmentsCtrl.create);
router.put('/:id', enrollmentsCtrl.update);
router.delete('/:id', enrollmentsCtrl.remove);


module.exports = router;