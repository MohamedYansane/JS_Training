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
    set mains(m) {
        this.mains = m;
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
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        let randIndex = Math.floor(Math.random() * dish.length);
        return dishes[randIndex];
    },
    generateRandomMeal() {
        let appetizer = getRandomDishFromCourse('appetizers');
        let dessert = getRandomDishFromCourse('desserts');
        let main = getRandomDishFromCourse('mains');
        let totalPrice = appetizer.price + dessert.price + main.price;
        return `Your meal is ${appetizer.name}, ${dessert.name}, ${main.name} and  the total price is: ${totalPrice}`;


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