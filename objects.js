// var treeBranches = 3;
// var treeRoots = 'taproot';
// var treeLeaves = '🍃';

// var tree2Branches = 10;
// var tree2Roots = 'ginger';
// var tree2Leaves = '🍁';

var tree1 = {
  branches: 3,
  roots: 'taproot',
  leaves: '🍃',
  '🤗': 1
};

// var key = 'leaves';

// tree1.key;
// tree1.leaves;
// tree1[key];


var tree2 = {
  branches: 10,
  roots: 'ginger',
  leaves: '🍁',
  '💩': 1,
};


// These two are exactly the same:
console.log(tree1.branches); // If you can, do it this way
console.log(tree1['branches']); 

// function logTreeProperty(key) {
//   console.log(tree1[key]);
// }
// logTreeProperty('branches');
// logTreeProperty('roots');

//
console.log(tree1['🤗']);

// valid identifiers:
// var ಠ_ಠ = 'ಠ_ಠ';
// var $ 

// [1, '1', {number: 1}]


var car = {
  tires: 4,
  driver: {
    name: 'samphil',
    dog: {
      name: 'steve',
      paws: 4
    }
  },
  engineParts: ['shiny part'],
  drive: function() {
    console.log("Forwards Backwards");
  },
}

console.log('tires', car.tires);
// var driver = car.driver;
// var driverName = driver.name;
// console.log('driver\'s name', car.driver.name);
// console.log('driver\'s name', car['driver']['name']);
console.log('driver\'s name', car['driver'].name);

console.log('driver\'s dog\'s name', car.driver.dog.name);