
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
    }

    catch(error){
        console.log("Customer left", error)
    }

    finally{
        console.log("Day ended, shop is closed.")
    }

}

kitchen();



