var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function (req, res, next) {
    res.sendFile('/home/site/wwwroot/views/login.html');
});

module.exports = router;