const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}

// An array that is grouping the objects together.
//initialize food status to raw 

const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// // An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// // // // This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// // // // The grill() function. Copy this into your JavaScript as well.

function grill(foodObject) {
    // Modify the food so that it is cooked
    foodObject.cooked = true;
    //     // Put the cooked food into the appropriate array
    cookedFood.push(foodObject);
};

// // // // Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

foods.forEach(food => {

    grill(food)

});
console.log("these are cooked foods: ", cookedFood)










