var age = 23;
age = age + 1;

var pizza = {
  crust: 'deep dish',
};


console.log(pizza.crust);
pizza.crust = 'stuffed';
console.log(pizza.crust);

console.log(pizza.toppings);
pizza.toppings = ['sushi', 'pineapple', 'gluten free vegan cheezzz', 'kale'];
console.log(pizza.toppings);


function deliver(pizza) {
  pizza.delivered = true;
}

console.log(pizza.delivered);
deliver(pizza);
console.log(pizza.delivered);

// var obj = {};
// obj.something = 'thing';