
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

let is_shop_open = true;

let order = (time, work) => {
    return new Promise ((resolve, reject) => {

        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())                
            }, time);
        }

        else {
            reject(console.log("Our shop is closed"));
        }

    })
}

order(2000, ()=> console.log(`${stocks.fruits[0]} was selected`))