function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza(){
    var crustType = ["deep dish", "hand tossed"];
    var sauceType = ["marinara", "pesto", "olive oil", "alfredo"];
    var cheeseType = ["mozzarella", "peccorino", "no cheese"];
    var toppings = ["pepperoni", "sausage", "spinach", "mushroom", "olives", "chicken", "jalapenos"];

    var randomCrust = crustType[Math.round(Math.random())];
    var randomSauce = sauceType[Math.round(Math.random()*sauceType.length-0.51)];
    var randomCheese = (cheeseType[Math.round(Math.random()*cheeseType.length-0.51)]);
    var randomToppings = [];
    for(var i=0; i<(Math.random()*toppings.length-0.51)+1; i++){
        randomToppings.push(toppings[Math.round(Math.random()*toppings.length-0.51)]);
    }
    return pizzaOven(randomCrust, randomSauce, randomCheese, randomToppings);
}

var pizzaOne = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizzaTwo = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizzaThree = pizzaOven("hand tossed", "marinara", ["mozzarella"], ["pepperoni", "mushrooms"]);
var pizzaFour = pizzaOven("hand tossed", "pesto", ["mozzarella", "peccorino"], ["spinach", "proscuitto", "roasted garlic"]);

console.log(pizzaOne);
console.log(pizzaTwo);
console.log(pizzaThree);
console.log(pizzaFour);
console.log(randomPizza());