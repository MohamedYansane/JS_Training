/** Meal Maker
 * As a frequent diner u love trying out a new restaurants
 * and experimenting with different foods. However, having to 
 * figure out what you want to order can be a time consuming
 * ordeal if the menu is big and u want an easier way to be
 * able to figure out what youre going to eat.
 * In this project, you'll use Javascript to randomnly
 * create three course meal based on what is available
 * on a menu. We'll keep running until we're satisfied
 * with the generated meal
 *
 * 1 - Start by creating an empty menu object
 * 2 - Add _courses property to your menu object
 * and set its value to an empty object. this property 
 * will ultimately contain mapping between each course
 * and the dishes available to order in that course
 * 3 -  create three properties inside the _courses object
 * called appetizers,mains and desserts. Each one of these
 * should initialize to an empty array
 * 4 - create getter and setter methodsfor appetizers, mains and desserts
 * properties.
 * 5 - Inside your menu object create an empty getter method for
 * the courses property.
 * 6 - Inside the _courses getter method, return an object that contains
 * key/value pairs for appetizers, mains and desserts.
 * 7 - Inside the menu object we're going to create a method 
 * called .addDishToCourse() which will be used to add new 
 * dish to the specified course on the menu .
 * The method should take three parameters the courseName, the dishName, the dishPrice
 * 8 - the .addDishCourse() method should create an object 
 * called dish which has a name and price which it get from
 * parameters. The method should then push dish object 
 * into the appropriate array in your menu's courses object based on what courseName was passed in.
 * 9 - Now, we're going to need another function which will allow us
 * to get a random dish from a course on the menu, which will be necessary for generating
 * a random meal. Create a method inside the menu object
 * called .getRandomDishFromCourse() it will take in on 
 * parameter which is the courseName
 * 10 - There are few steps in getting the .getRandomDishFromCourse() to work
 *  1 - Retrieve the array of the given courses dishes from the menu _courses object and
 * store in a variable called dishes.
 *  2 - Generate a random index by multiplying Math.random() by the length of the dishes array
 * (this will guarantee that the random number will be between 0 and the length of the array)
 * 3 - Round that generated number to a whole number by using Math.floor() on the result.
 * 4 - Return the dish located at that index in dishes
 * 11 - Now we have a way to get a random dish from a course,
 * we can create a .generateRandomMeal() function which will automatically generate a three course meal for us.
 * The function that doesnt need to take any parameters.
 *  1 - The function should create an appetizer variable which should be the result of 
 * calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
 *  2 - Create a main variable and dessert variable the same way you created the appetizer variable, but make sure to pass in
 * the right course type .
 * 3 - Calculate the total price and returns a string that contains the name of each
 * of the dishes and the total price of the meal, formatted as you like .
 * 12 - Now we have finished our menu object, let's use it to
 * create a menu by adding some appetizers, mains and desserts with the 
 * .addDishToCourse() function. Add at least 3 dishes to each course or more if u like.
 * 13 - Once your menu has items inside it, generate a meal by 
 * Using the .generateRandomMeal() function on ur menu, and save it to a variable called meal.
 * Lastly, print out ur meal variable to see what meal was generated for u
 */
const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this.appetizers;
    },
    set appetizers(ap) {
        this.appetizers = ap;
    },
    get mains() {
        return this.mains;
    },
    set mains(mains) {
        this.mains = mains;
    },
    get desserts() {
        return this.desserts;
    },
    set desserts(d) {
        this.desserts = d;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName.toLowerCase()].push(dish);

    },
    getRandomDishFromCourse(courseName) {
        let dish = this._courses[courseName.toLowerCase()];
        let randIndex = Math.floor(Math.random() * dish.length);
        return dish[randIndex];
    },
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${dessert.name}, ${main.name} and the total price is ${totalPrice}`;
    }

};

//appetizers courses
menu.addDishToCourse('appetizers', 'Sticky Baked Chicken Wings', 4000)
menu.addDishToCourse('appetizers', 'Crab Cakes with Horseradish Cream', 6000);
menu.addDishToCourse('appetizers', 'Hags in a Blanket', 9000);
// mains courses
menu.addDishToCourse('mains', 'Mustard-stuffed chicken', 12.25);
menu.addDishToCourse('mains', 'Spicy root & Lentil casserole', 14.95);
menu.addDishToCourse('mains', "Chicken biryani", 4.55);
//desserts courses
menu.addDishToCourse('desserts', 'Apple Pie ', 5.25);
menu.addDishToCourse('desserts', 'Almond Malai Kulfi', 6.5);
menu.addDishToCourse('desserts', 'Lemon Tart', 3.75);

let meal = menu.generateRandomMeal();
console.log(meal);