var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('<input placeholder="API is working properly" />');
});

// router.get('/', function(req, res, next) {
//   });
module.exports = router;