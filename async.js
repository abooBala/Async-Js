
let stocks = {
    fruits: [ "Strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"], 
    holder: ["cone", "cup", "stick"], 
    toppings: ["chocolate", "peanuts"]
}


// Claner code with Async / Await 

let is_shop_open = true

// Control operations with the time function 

function time(ms) {
    return new Promise((resolve, reject)=> {
        if(is_shop_open){
            setTimeout(resolve, ms);
        }
        else{
            reject(console.log("Shop is closed"));
        }
    });
}

async function kitchen(){
    
    try{
        await time(2000)
        console.log(`${stocks.fruits[0]} was selected`)

        await time(1000)
        console.log("Production started")

        await time(2000)
        console.log("Cut the fruit")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)

        await time(1000)
        console.log("Machine started ....")

        await time(2000)
        console.log(`${stocks.holder[0]} was selected`)

        await time(3000)
        console.log(`Topping selected: ${stocks.toppings[0]}`)

        await time(2000)
        console.log("Serve the ice cream :)")

    }

    catch(error){
        console.log("Customer left", error)
    }

    finally{
        await time(1500)
        console.log("Day ended, shop is closed.")
    }

}

kitchen();



