var express = require('express');
var router = express.Router();
const skillCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillCtrl.index);
router.get('/:id', skillCtrl.show);
router.get('/new', skillCtrl.new);
router.post('/', skillCtrl.create);
router.get('/:id/edit', skillCtrl.edit);
router.put('/:id', skillCtrl.update);

module.exports = router;
