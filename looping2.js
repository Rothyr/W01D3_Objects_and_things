
var students = {
  samphil: {
    name: "Samphil",
    id: 0,
    organs: 'hopefully',
    age: 99
  },
  philsam: {
    name: "Philsam",
    id: 1,
    organs: 'hopefully',
    age: 38
  },
  steve: {
    name: "Steve",
    id: 2,
    organs: 'unfortunatly not',
    age: 52
  }
};


function studentsAge(students) {
  var age = 0;

  for (var key in students) {
    console.log(key);
    console.log(typeof key);

    var student = students[key];
    age += student.age;

    // age += students[key].age;
  }

  // age += students.samphil.age;
  // age += students.philsam.age;
  // age += students.steve.age;

  return age;
}

console.log(studentsAge(students));


var stuff = 'things';

console.log(stuff);

console.log(global);