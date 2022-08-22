let stocks = {
    fruits: [ "Strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"], 
    holder: ["cone", "cup", "stick"], 
    toppings: ["chocolate", "peanuts"]
}

is_shop_open = true;

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    }, 2000);
}

let Production = () =>{

    setTimeout(() => {
        console.log("Production started");

        setTimeout(() => {
            console.log("Fruit was chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("Machine started ...");

                    setTimeout(() => {
                        console.log(`${stocks.holder[2]} was selected`);

                        setTimeout(() => {
                            console.log(`Toppings selected: ${stocks.toppings[1]}`);

                            setTimeout(() => {
                                console.log("Serve the ice cream :)");

                            }, 2000);

                        }, 3000);

                    }, 2000);

                }, 1000);

            }, 1000);

        }, 2000);

    }, 0000);
}

order(1, Production);