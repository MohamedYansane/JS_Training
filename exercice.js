const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor')
        return userInput;
    else
        return 'Your input is incorrect, please try again and choose between rock, paper or scissor';
}
const getComputerChoice = () => {
    computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
        default:
            console.error('Invalid choice');
            break;

    }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice)
        return 'The game was tie';
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return `Your choice ${userChoice} is ${computerChoice} and the computer choice
            was ${computerChoice} so the computer won`;
        } else {
            return `Your choice ${userChoice} is ${computerChoice} and the computer choice
            was ${computerChoice} congratulation! You won`;
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissor') {
            return `Your choice ${userChoice} is ${computerChoice} and the computer choice was: ${computerChoice} so the computer won`;
        } else {
            return `Your choice ${userChoice} is ${computerChoice} and the computer choice was: ${computerChoice} congratulation! You won`;
        }
    }
    if (userChoice === 'scissor') {
        if (computerChoice === 'rock') {
            return `Your choice ${userChoice} is ${computerChoice} and the computer choice was: ${computerChoice} so the computer won`;
        } else {
            return `Your choice ${userChoice} is ${computerChoice} and the computer choice was: ${computerChoice} congratulation! You won`;
        }
    }
}


const menu = {
        _courses: {
            appetizers: [],
            mains: [],
            desserts: []
        },
        get appetizer() {
            return this.appetizers;
        },
        get main_s() {
            return this.mains;
        },
        get dessert() {
            return this.desserts;
        },
        set appetizer(ap) {
            this.appetizers = ap;
        },
        set dessert(dessert) {
            this.desserts = dessert;
        },
        set main_s(main) {
            this.mains = main;
        },
        get courses() {
            return {
                "appetizers": this.appetizers,
                "mains": this.main_s,
                "desserts": this.desserts
            }
        },
        addDishToCourse(courseName, dishName, price) {
            const dish = { dishName: dishName, price: price };
            this._courses[courseName].push(dish);
        },
        getRandomDishFromCourse(courseName) {
            let dishes = this._courses[courseName.toLowerCase()];
            let randIndex = Math.floor(Math.random() * dishes.length);
            return dishes[randIndex];
        },
        getRandomMeal() {
            let appetizer = this.getRandomDishFromCourse('appetizers');
            let dessert = this.getRandomDishFromCourse('desserts');
            let main = this.getRandomDishFromCourse('mains');
            let totalPrice = appetizer.price + main.price + dessert.price;
            return `Your courses: ${appetizer.dishName} price: ${appetizer.price}\n
        ${dessert.dishName} price: ${dessert.price}\n
        ${main.dishName} price: ${main.price}\n
        the total price of your courses: ${totalPrice}`;
        }
    }
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
let meal = menu.getRandomMeal();
console.log(meal);