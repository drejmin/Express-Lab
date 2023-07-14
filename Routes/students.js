var express = require('express');
var router = express.Router();
var studentsCtrl = require('../Controllers/students');
/* GET users listing. */
router.get('/', function(req,res, next) {
    res.send('respond with a resource');
});

//All actual paths start with "/students"

router.get('/', studentsCtrl.index);
// GET /students/:id
router.get('/:id',studentsCtrl.show);
module.exports = router;
n