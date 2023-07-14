const students = [
    {id: 125223, First: 'Andres', Last: 'Jacobs', enrolled: true},
    {id: 127904, First: 'Layla', Last: 'Henry', enrolled: false},
    {id: 139608, First: 'Fernando', Last: 'Ruiz', enrolled: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return students;
  }

  function getOne(id) {
    id = parseInt(id);
    return students.find((student)=> student.id === id);}