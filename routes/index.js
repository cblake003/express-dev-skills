var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
// redirects always make a GET request
  res.redirect('/skills', {title: 'Home Page'});
});

module.exports = router;
