var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //la vista se renderiza (calcula ) en el servidor
  res.render('index', { title: 'Express' });
});

module.exports = router;
