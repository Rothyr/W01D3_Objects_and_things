function getsEaten() {
  console.log("Yum");
}

var iceCream = {
  flavor: 'vanilla',
  price: 100,
  cone: true,
  melted: false,
  melt: function() {
    this.melted = true;
    return "Melted";
  },
  getsEaten: getsEaten
};


console.log(iceCream.flavor);
console.log(iceCream.melted);
console.log(iceCream.melt());
console.log(iceCream.melted);