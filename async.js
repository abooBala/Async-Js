
let stocks = {
    fruits: [ "Strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"], 
    holder: ["cone", "cup", "stick"], 
    toppings: ["chocolate", "peanuts"]
}


// Remove the comment from line 12 to 52 to see use the callback hell

// let order = (Fruit_name, call_production) => {
//     setTimeout(()=>{
//         console.log(`${stocks.fruits[Fruit_name]} was selected` )
//         call_production();

//     }, 2000);

    
// }

// let production = () => {
//     setTimeout(()=> {
//         console.log(`Production has started`);

//         setTimeout(() => {
//             console.log("The fruits has been chopped");

//             setTimeout(()=> {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`);

//                 setTimeout(()=> {
//                     console.log("Machine started ...");

//                     setTimeout(()=> {
//                         console.log(`Ice cream was placed on the ${stocks.holder[0]}`)

//                         setTimeout(() => {
//                             console.log(`Toppings selected: ${stocks.toppings[1]}`);

//                             setTimeout(() => {
//                                 console.log("Serve ice cream :)")
//                             }, 2000);
//                         }, 3000);
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 0000)
// }

// order(0, production)


// let order = (time, work) => {
//     return new Promise ((resolve, reject) => {

//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work())                
//             }, time);
//         }

//         else {
//             reject(console.log("Our shop is closed"));
//         }

//     })
// }

// order(2000, () => console.log( `${stocks.fruits[0]} was selected`)) // Do not use ';' in order to take advantage of the promise chaining 

// // promise chaining begins. Look how neat this is 
// .then(()=> {
//     return(order(0000, () => console.log("Production has started")))
// })

// .then(()=> {
//     return(order(2000, ()=> console.log("The fruit has been chopped")))
// })

// .then(()=> {
//     return(order(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)))
// })

// .then(()=> {
//     return(order(1000, ()=> console.log("Machine started ...")))
// })

// .then(()=> {
//     return(order(1000, ()=> console.log(`Ice cream was placed on the ${stocks.holder[0]}` )))
// })

// .then(()=> {
//     return(order(3000, ()=> console.log(`Topping selected ${stocks.toppings[1]}`)))
// })

// .then(()=> {
//     return(order(2000, ()=> console.log("Serve ice cream :)")))
// })

// // Error handling in the final stages to handle is_shop_open false condition 

// .catch(()=> {
//     console.log("The customer left.")
// })

// // Finally the final handler runs even if the shop is closed or open 

// .finally(()=> {
//     console.log("Day ended. Shop closed. Bye!")
// })

// Async/Await basic building block

let is_shop_open = false;

async function order() {
    try{
        await not_a_unction;
    } 
    
    catch(error) {
        console.log("not_a_function doesn't exist", error)
    }

    finally {
        console.log("Runs anyways")
    }
}

order()

.then(()=> {
    console.log("Run more .then, .catch, and .finally chaining here...")
})

