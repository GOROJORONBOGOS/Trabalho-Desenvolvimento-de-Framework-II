const express = require('express');
const router = express.Router();
const studentsCtrl = require('../controllers/studentsController');


router.get('/', studentsCtrl.list);
router.get('/:id', studentsCtrl.getById);
router.post('/', studentsCtrl.create);
router.put('/:id', studentsCtrl.update);
router.delete('/:id', studentsCtrl.remove);


module.exports = router;