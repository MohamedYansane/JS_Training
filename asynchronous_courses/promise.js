let stocks = {
    Fruit: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}
let is_shop_open = true;

let order = (time, work) => {
        return new Promise((resolve, reject) => {
            if (is_shop_open) {
                setTimeout(() => {
                    resolve(work());
                }, time);
            } else {
                reject(console.log("the shop is closed"));
            }
        })
    }
    /** For better understand read my book
     * Promise has 3 stages Pending resolve and reject
     * .then .then is a promise chainning we've to do then
     * and then 
     * Nb: the resolve always take a function in our case we did
     * a callback function with work() method .
     * Notice when we were calling our order function in work part (argument)
     * we created an anonymous function there and then we made a promise chaining
     * in our reject we pass the message.
     * Error Handling: the catch statement the catch always 
     * take a function in our case we pass an anonymous function
     * NB: the catch will only works if the promise is rejected
     * that's why we set is_shop_open = false.
     * The finally it will alwas run either is rejected or not (resolved)
     * to see that just change the value of is_shop_open.
     * Thanks
     * */
order(2000, () => { console.log(`${stocks.Fruit[0]} was selected`) })
    .then(() => {
        return order(0000, () => { console.log('production has started') });
    })
    .then(() => {
        return order(2000, () => { console.log('The fruit has been choped') });
    })
    .then(() => {
        return order(1000, () => { console.log(`${stocks.liquid[0]}  and ${stocks.liquid[1]} has been added`) });
    }).then(() => {
        return order(1000, () => { console.log("The machine has started") });
    })
    .then(() => {
        return order(2000, () => { console.log(`The ice-cream was placed in the ${stocks.holder[0]}`) });
    })
    .then(() => {
        return order(2000, () => { console.log(`the ${stocks.toppings[0]} was selected`) });
    })
    .then(() => {
        return order(1000, () => { console.log("the ice-cream was served") })
    })
    .catch(() => {
        console.log("The customer has left");
    })
    .finally(() => {
        console.log("day ended, shop is closed");

    })