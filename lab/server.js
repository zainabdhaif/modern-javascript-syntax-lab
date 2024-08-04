//exericse 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// Create a new array where each value is multiplied by 2 and log the new array.
const nums2 = nums.map((currentElement) => {
    return currentElement *2;
  });
  console.log(`Exercise 1 solution: ${nums2}`);



//exericse 2
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaToppings;
console.log(`Exercise 2 solution: first topping - ${firstTopping} || second topping - ${secondTopping}`);


//exericse 3
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
const { make, model } = car;
console.log(`Exercise 3 solution: make - ${make} || model - ${model}`);

//exericse 4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']; -- this is commented because we cannot declare it twice and we already declared it above

const controversialPizzaToppings = [...pizzaToppings, ...pizzaToppings];
console.log(`Exercise 4 solution: ${controversialPizzaToppings}`);

//exericse 5
// Duplicate the following object and spread its values into a new variable `myCar`.
// const car = { make: 'Audi', model: 'q5'}; -- this is commented because we cannot declare it twice and we already declared it above
// Change the `model` property of `myCar` to 'q7'. Log both objects.
const myCar = {...car};
myCar.model = 'q7';
console.log(`Exercise 5 solution: \ncar details: make -  ${car.make} || model - ${car.model} \nmyCar details: make -  ${myCar.make} || model - ${myCar.model} `);
  

//exericse 6
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

const propertyName = 'username';
const userProfile = {
  [propertyName]: 'zainab',
}
console.log(userProfile);

//exericse 7 -- this was done in a seperate folder called "exercise7"


//exericse 8
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
// 1. `cat`
// 2. `white`
// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.
function joinWords(noun = 'cat', adjective ='white'){
  return `The ${noun} is ${adjective}`;
}
console.log('Exercise 7 solution: ' + joinWords('zainab', 'tired'));

//exericse 9
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

let flavor = pizza === 'tasty' ? 'yum' : 'yuck';
console.log(flavor);

//exericse 10
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

// Log the result
console.log('Language setting:', LANG);
