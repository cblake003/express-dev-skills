var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controller/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
router.get('/new', skillsCtrl.new);
router.post('/', skillsCtrl.create);

module.exports = router;
