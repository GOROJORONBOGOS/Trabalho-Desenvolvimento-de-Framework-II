const express = require('express');
const router = express.Router();
const teachersCtrl = require('../controllers/teachersController');


router.get('/', teachersCtrl.list);
router.get('/:id', teachersCtrl.getById);
router.post('/', teachersCtrl.create);
router.put('/:id', teachersCtrl.update);
router.delete('/:id', teachersCtrl.remove);


module.exports = router;