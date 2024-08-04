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


