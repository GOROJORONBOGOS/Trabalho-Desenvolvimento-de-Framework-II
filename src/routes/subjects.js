const express = require('express');
const router = express.Router();
const subjectsCtrl = require('../controllers/subjectsController');


router.get('/', subjectsCtrl.list);
router.get('/:id', subjectsCtrl.getById);
router.post('/', subjectsCtrl.create);
router.put('/:id', subjectsCtrl.update);
router.delete('/:id', subjectsCtrl.remove);


module.exports = router;