/** synchronous les taches dependent de la premiere
 * c'est à dire exemple si on a 3 taches le 2 eme ne pourra
 * s'excecuter tant que la premiere n'a pas fini ainsi de suite
 * Now let's pratice
 * Notice he runs it from the top to bottom 1st I till spoon
 * 
 * console.log("I");
 * console.log("eat ");
 * console.log("ice cream");
 * console.log("with a ");
 * console.log("spoon");
 */

//    Notice javascript start running from top to bottom
//    unless you change the behavior like we did with setTimeout


/** asynchronous les taches ne dependent que d'eux meme
 * exemple si  on a 3 images l'image 2 ou 3 n'atten-
 * drons pas que la premiere finissent de se charger avant qu'elles ne se
 * chargent. elles se chargent automatiquement meme si 
 * l'image 1 à une erreur 
 * 4000ms => 4s and setTimeout is a asynchronous function
 * in our exemple with setTimeout he waited 4s before logging
 * or release it 
 * console.log("I");
 * setTimeout(() => {
 *  console.log("ice cream");
 * }, 4000)
 * console.log("eat ");
 * console.log("with a ");
 * console.log("spoon");
 */

/** Callback function 
 * what's is callback function it's when we call a 
 * function inside another function or when u nest
 * a function inside another function as an  argument
 * that's called callback let's try
 * 
 * const one = (call_two) => {
 *   console.log("step 1 completed please call step 2.");
 *   call_two()
 * }
 * const two = () => {
 *   console.log("step 2");
 * }
 * const parent_name = (name) => {
 *   return name;
 * }
 * const greeting = (name) => {
 *    console.log(`Hi ${name("Ousmane")}`);
 * }
 * setTimeout(() => {
 *  one(two);
 * }, 1000);
 * setTimeout(() => {
 *     greeting(parent_name);
 * }, 4000);
 */


/** @type {*}
 * what we gonna do is:
 * 1- Place order  2s
 * 2- Cut the fruit 1s
 * 3- Add water and ice 1s
 * 4- Start the machine 1s
 * 5- Select container  2s
 * 6- Select toppings 3s
 * 7- Serve Ice cream 2s
 */
let stocks = {
        Fruit: ["strawberry", "grapes", "banana", "apple"],
        liquid: ["water", "ice"],
        holder: ["cone", "cup", "stick"],
        toppings: ["chocolate", "peanuts"]
    }
    // accessing to the object elements
    //console.log(stocks.Fruit[0]);
let order = (fruit_index, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruit[fruit_index]} was selected`);
        call_production();
    }, 2000)

}

let production = () => {
    setTimeout(() => {

        console.log(`production has started`);

        setTimeout(() => {

            console.log("the fruit has been chopped");

            setTimeout(() => {
                //console.log(`and the ${stocks.liquid[Math.floor(Math.random() * 2)]} has been added`)
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {

                    console.log("The machine was started");

                    setTimeout(() => {

                        console.log(`ice creen was placed ${stocks.holder[0]}`)

                        setTimeout(() => {

                            console.log(`${stocks.toppings[0]}`)

                            setTimeout(() => {
                                console.log("ice cream has been served");
                            }, 3000)

                        }, 2000);

                    }, 2000);

                }, 1000);

            }, 1000);


        }, 2000);

    }, 0000);

}

order(0, production);

/** Notice: If we want the fruit was selected to print
 * first we've to call the call_production() inside
 * the setTimeout of order. We gonna the exemple inside
 * the production function
 */


//FINAL: the callback we created with
// setTimeout is called a callback killer
// see the illustration of callback on internet