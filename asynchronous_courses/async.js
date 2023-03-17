/** Welcome to the async await for more details
 * go to the the all about_async file
 *
 * 
 */

let stocks = {
    Fruit: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}
let is_shop_open = true;
/**
 * 
 * @param {*} millisec 
 * @returns 
 * Notice: 
 */
const time = async(millisec) => {
        return new Promise((resolve, reject) => {
            is_shop_open ? setTimeout(resolve, millisec) : reject(console.log("the shop is closed"));
        })
    }
    /**
     * Notice : quand je fais le await time() dans 
     * le kitchen en tant que ça renvoie reject c-a-d
     * is_shop_open = false  le  console.log(`${stocks.Fruit[0]}`);
     * ne s'affichera pas mais des que c'est resolve
     * le  console.log(`${stocks.Fruit[0]}`); s'affiche
     */
const kitchen = async() => {
    try {

        await time(2000);
        console.log(`${stocks.Fruit[0]}`);

        console.log("start the production");

        await time(2000);
        console.log("cut the fruit");

        await time(1000);
        console.log(`${stocks.liquid[0]}  and ${stocks.liquid[1]} has been added`);
    } catch (error) {
        console.log("customer left ", error);
    } finally {
        console.log("finally part");
    }
}
kitchen();
console.log("bonjour mohamed");