const students = require('../models/student');

module.exports = {
    index,
    show
  };
  
function index(req, res) {
    res.render('students/index', {
      students: Student.getAll()
    });
  }

  function show(req,res){
    res.render('students/show', {
      student: Student.getOne(req.params.id),
    });
  }
