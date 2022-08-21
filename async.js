
let stocks = {
    fruits: [ "Strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"], 
    holder: ["cone", "cup", "stick"], 
    toppings: ["chocolate", "peanuts"]
}


// Understanding Await in the Kitchen 

let is_shop_open = true

// Handles the customer toppings choice in the middle of making the ice cream if they were not asked initially
let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("What topping will you love?"))
        }, 3000);
    })
}

async function iceCreamOperation() {
    console.log("Operation A")
    console.log("Opearation B")
    console.log("Operation C")

    // Go back and ask the customer what topping he wants on the ice cream and continue after you have an answer. 
    await toppings_choice()

    console.log("Operation D")
    console.log("Operation E")
    console.log("Operation F")
}

iceCreamOperation();

// Other activities will have to continue in the kitchen 
console.log("Cleaning the tables")
console.log("Doing the dishes")
console.log("Frying sauces")
console.log("Even more activities.......")

