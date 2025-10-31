const express = require('express');
const router = express.Router();
const classesCtrl = require('../controllers/classesController');


router.get('/', classesCtrl.list);
router.get('/:id', classesCtrl.getById);
router.post('/', classesCtrl.create);
router.put('/:id', classesCtrl.update);
router.delete('/:id', classesCtrl.remove);


module.exports = router;