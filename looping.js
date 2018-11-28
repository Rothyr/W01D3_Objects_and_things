var samphil = {
  name: "Samphil",
  id: 0,
  organs: 'hopefully',
  age: 99
};

var philsam = {
  name: "Philsam",
  id: 1,
  organs: 'hopefully',
  age: 38
};

var steve = {
  name: "Steve",
  id: 2,
  organs: 'unfortunatly not',
  age: 52
};

var students = [samphil, philsam, steve];


function studentsAge(students) {
  var age = 0;

  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    age += student.age;

    // age += students[i].age;
  }

  return age;
}

console.log(studentsAge(students));l