/** Welcome to the async await 
 * a better way to write a promise we gonna see the difference
 * between promise and async await
 * 
 */

let stocks = {
    Fruit: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}
let is_shop_open = true;

// writing promises with async and inside the function 
// we need 3 things try catch and finally we 've seen
// below how to use await with arrow function and simple function


/*const order = async() => {
    try {

    } catch (error) {} finally {
        console.log("ended up anyways")
    }

}
async function getOrder() {
    try {

    } catch (error) {} finally {
        console.log("ended up anyways")
    }

}

order();
getOrder();*/

/** Let's get in our code now */

/*const order = async() => {
    try {
        // here our abc is a fake function it's not pointing anywhere
        await abc
    } catch (error) {
        console.log("abc is not created", error);
    } finally {
        console.log("run anyways");
    }
}

order()
    .then(() => {
        console.log("using then in async also");
    });
    */

//let understand the await keyword

let topping_choice = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log("which topping would u love"));
            }, 3000)
        })
    }
    /**
     * in t
     *
     */
const kitchen = async(call_topping_choice) => {
        console.log(" A ");
        console.log(" B ");
        console.log(" C ");
        await call_topping_choice()
        console.log(" D ");
        console.log(" E ");
    }
    // to provoke the await topping_choice() we've to call the kitchen function

kitchen(topping_choice)
console.log("doing dishes");
console.log("cleaning the table");
console.log("taking the order");