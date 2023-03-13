/**Truthy or falsy value
 * Si l'utilisateur existe c'est à dire truthy on retourne son nom
 * Sinon on l'octroie etranger 
 * Remarque falsy = '' or 0;
 */
const userTruthyOrFalsy = name => {
    // je verifie si cest un truthy ou pas
    return name ? console.log(`it's a truthy ${name}`) : console.log(`it's a falsy ${name = 'stranger'}`);
}

const arrayDiagonal = array => {
        let leftToRightD = 0;
        let rightToLeftD = 0;
        for (let i = 0; i < array.length; i++) {
            leftToRightD += array[i][i];
            rightToLeftD += array[i][array.length - i - 1];
        }
        return Math.abs(leftToRightD - rightToLeftD);
    }
    /**Calculate the ratio of numbers 
     * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  6 places after the decimal.
     * Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 puissance -4 are acceptable.
     * Example: arr = [1, 1, -1, -1, 0]
     * There are 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. Results are printed as:
     * 0.400000
     * 0.400000
     * 0.200000
     */

const plusMinus = array => {
    let negative = 0.0;
    let positive = 0.0;
    let z = 0.0;
    for (let item = 0; item < array.length; ++item) {
        if (array[item] === 0)
            z += 1;
        else if (array[item] < 0)
            negative += 1;
        else
            positive += 1;
    }
    return `positive: ${(positive/array.length).toPrecision(6)}${"\n"}negative: ${(negative/array.length).toPrecision(6)}${"\n"}zero: ${(z/array.length).toPrecision(6)} `;
}
let x = [1, 1, 0, -1, -1];
console.log(plusMinus(x));
/**La méthode padStart() en JavaScript est utilisée pour remplir une chaîne avec une autre chaîne
 * jusqu'à ce qu'elle atteigne la longueur donnée.
 * Le rembourrage est appliqué à partir de l'extrémité gauche de la chaîne. */
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${"#".repeat(i).padStart(n)}`);
    }
}
/* output
     #
    ##
   ###
  ####
 #####
######*/


/**
 * @param {*} candles
 * You are in charge of the cake for a child's birthday.
 * You have decided the cake will have one candle for each year of their total age.
 * They will only be able to blow out the tallest of the candles.
 * Count how many candles are tallest.
 * Example : candles =[4,4,1,1,2]
 * The maximum height candles are 4 units high. There are 2 of them, so return 2.*/
let cake = [3, 6, 6, 5, 5, 4, 9, 9, 9];
const birthdayCakeCandles = candles => {
    let maxHeight = candles[0];
    candles.forEach(candle => {
        if (candle > maxHeight)
            maxHeight = candle;
    });
    return candles.filter(item => item === maxHeight).length;
}
console.log("Number of tallest: " + birthdayCakeCandles(cake));

/**
 * @param {*} s
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 * Example
 * s='12:01:00PM'
 * Return '12:01:00'.
 * s='12:01:00AM'
 * Return '00:01:00'.
 * All input times are valid
 * Sample Input 0
 * 07:05:45PM
 * Sample Output 0
 * 19:05:45 
 * s = '04:59:59AM' must return '04:59:59' am in pm only 12 change in 00*/


let s = '19:59:59AM';
// s = '04:59:59AM' must return '04:59:59' in pm only 12 change in 00

const timeConversion = s => {
    let am_pm = s.substring(8, 10);
    let time = s.substring(0, 8).split(":");
    am_pm === "AM" && time[0] === "12" ? time[0] = "00" : am_pm === "PM" ? time[0] = parseInt(time[0]) % 12 + 12 : 'Erreur de saisie';
    return time.join(":");
}
console.log(timeConversion(s));
//best resolution conversion time
const conversionTime = s => {
    let am_pm = s.substring(8, 10);
    let time_array = s.substring(0, 8).split(":");
    switch (am_pm) {
        case 'AM':
            console.log(am_pm);
            if (time_array[0] === "12")
                time_array[0] = "00";
            else if (time_array[0] > 12)
                time_array[0] = "0".concat(parseInt(time_array[0]) - 12);
            break;
        case 'PM':
            time_array[0] = parseInt(time_array[0]) % 12 + 12;
            break;
    }

    return time_array.join(":");
}
console.log(conversionTime(s));
//cascadia code
/** Avant de soumettre mon code je test dabord dans mon brouillon
 * si j'arrive a recuperer les apples je pourrai alors 
 * recuperer le cpt des oranges
 */
const apples_func = (a, s, end, apples) => {
        let cpt = 0;
        apples.map(item => a + item).forEach(i => {
            if (i >= s && i <= end)
                cpt += 1;
        });
        return cpt;

    }
    /**
     * 
     * @param {*} s 
     * @param {*} t 
     * @param {*} a 
     * @param {*} b 
     * @param {*} apples 
     * @param {*} oranges 
     * calculate the number of apples and oranges that fell to same house.
     * Input format
     * 7 11
     * 5 15
     * 3 2
     * -2 2 1
     * 5 -6
     * Output
     * 1
     * 1
     * Explanation
     * The first apple falls at position 5 - 2 = 3.
     * The second apple falls at position 5 + 2 = 7.
     * The third apple falls at position 5 + 1 = 6.
     * The first orange falls at position 15 + 5 = 20.
     * The second orange falls at position 15 - 6 = 9.
     * Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output.
     * Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output.
     */

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    // Write your code 
    let cptOrange = 0;
    let cptApple = 0;
    apples.map(item => a + item).forEach(i => {
        if (i >= s && i <= t)
            cptApple += 1;
    });
    oranges.map(item => b + item).forEach(i => {
        if (i >= s && i <= t)
            cptOrange += 1;
    });
    console.log(`Number of Apples that fell to sam house is/are: ${cptApple}`);
    console.log(`Number of Oranges that fell to sam house is/are: ${cptOrange}`);
}
let start = 7;
let end = 11;
let a_ = 5;
let b_ = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];
countApplesAndOranges(start, end, a_, b_, apples, oranges);

let object = [{ x: 1, y: 1 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 5 }];
/**
 *
 *
 * @param {*} object
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * objects: an array of objects with integer properties 'x' and 'y'
 * Avant de soumettre mon code je dois tester d'abord sur mon brouillon
 */
const getCountObjects = (object) => {
    let cpt = 0;
    for (let o of object) {
        if (o.x === o.y)
            cpt += 1;
    }
    return cpt;

}
console.log(`the number of object that check the condition o.x == o.y are: ${getCountObjects(object)}`);
/**
 *
 *
 * @param {*} s
 * @return {*}
 * According to the resource https://www.hackerrank.com/challenges/js10-regexp-1/topics/javascript-regex
 * The .* means that there may be characters after that first captured character
 * \1$ checks that the last character matches the first captured charcter 
 */
const regFunc = s => {
    let ans = false;
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    if (s.length < 3) {
        console.log("La chaine doit contenir au moins 3 caracteres");
    } else {
        vowel.forEach(v => {
            if (v === s[0] && v === s[s.length - 1])
                ans = true;
            else
                ans;

        });
    }
    return ans;

}

let reg = 'aba';
//console.log(`regFunc answer: ${regFunc(reg)}`);
/** @type {*} 
 * Declare a RegExp object variable named 're'
 * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})*
 * To test a function console.log(re.test(s));
 * Dans ce cas comme re est un object  test() devient
 * une methode de lobject re
 */
const regexVar = () => {
    const re = {
        test(s) {
            let vowel = 'aeiou'.split('');
            let ans = false;
            if (s.length < 3)
                ans = 'the string must be higher or equal to 3';
            else {
                vowel.forEach(v => {
                    if (v === s[0] && v === s[s.length - 1])
                        ans = true;
                    else
                        ans;
                });
            }
            return ans;
        }
    }
    return re;
}
let regEx = 'abd';
const re = regexVar();
console.log(`the answer of regVar is: ${re.test(regEx)}`);
/**
 *
 *
 * @param {*} s
 * @return {*} 
 */
const getLetter = (s) => {
        let letter;
        let vowel = 'aeiou'.split('');
        let second_group = 'bcdfg'.split('');
        let third_group = 'hjklm'.split('');
        let fourth_group = 'npqrstvwxyz'.split('');
        s.toLowerCase();
        vowel.forEach(v => {
            if (s[0] === v)
                letter = 'A';
        });
        second_group.forEach(second => {
            if (s[0] === second)
                letter = 'B';
        });
        third_group.forEach(third => {
            if (s[0] === third)
                letter = 'C';
        });

        fourth_group.forEach(fourth => {
            if (s[0] === fourth)
                letter = 'D';
        });
        return letter;
    }
    /**
     *
     *
     * @param {*} s
     * @return {*} 
     * second method best
     */
const getLettre = s => {
    let letter;
    // Write your code here
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}
let letter = 'adfgt';
console.log(getLetter(letter));

const rectangleObject = (a, b) => {
    return {
        get length() {
            return b;

        },
        get width() {
            return b;
        },
        get perimeter() {
            return 2 * (this.length + this.width);
        },
        get area() {
            return this.length * this.width;
        }

    }

}
let a = 2;
let b = 3;
const rec = rectangleObject(a, b);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0)
        return "YES";
    else if (a === 0)
        throw new Error('Zero Error');
    else
        throw new Error("Negative Error");
}
/**
 * HackerRank Class courses
 * we gonna see exemple of declaration of "class", method inside the class
 * "static method "
 * "Inheritance"
 * Class Declarations
 * One way to define a class is using a class declaration.
 * To declare a class, we use the class keyword and follow it with the class' name.
 * Ideally, we always write class names in TitleCase.
 * Exemple
 * 
 * class Polygon {
 *      constructor(height, width) {
 *      this.height = height;
 *      this.width = width;
 *    }
 * }
 * let p = new Polygon(1, 2);
 * console.log('Polygon p:', p);
 */

/** 
 * Une différence importante entre les déclarations de fonction et les déclarations de classe est que:
 * les déclarations de fonction sont hissées (c'est-à-dire qu'elles peuvent être référencées avant d'être déclarées),
 * mais pas les déclarations de classe. Cela signifie que nous devons d'abord déclarer notre classe avant de tenter d'y accéder (ou de la référencer);
 * si nous ne le faisons pas, notre code renvoie une ReferenceError 
 * Exemple: below
 * output will be: 
 * 1- ReferenceError: Polygon is not defined
 * 2- Polygon p: Polygon {height: 1, width: 2}
 * try {
    let p = new Polygon(1, 2);
    console.log('Polygon p:', p);
} catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

p = new Polygon(1, 2);
console.log('Polygon p:', p);
 */
/**
 * Methode Statique
 * Les méthodes statiques sont des méthodes pertinentes pour toutes les instances d'une classe
 * - pas seulement une seule instance.
 * Ces méthodes reçoivent des informations de leurs arguments et non d'une instance de classe, ce qui nous permet d'invoquer les méthodes statiques d'une classe sans créer d'instance de la classe.
 * En fait, nous ne pouvons pas appeler une méthode statique sur un objet de classe instancié (tenter de le faire génère une TypeError ).
 * Nous définissons les méthodes statiques d'une classe à l'aide du static mot clé.
 * Nous utilisons généralement ces méthodes pour créer des fonctions utilitaires pour les applications, car elles ne peuvent pas être appelées sur des objets de classe.
 * 
 * class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    getArea(a, b) {
        this.a = a;
        this.b = b;
        return this.a * this.b
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// The correct way to call a static method
console.log(Point.distance(p1, p2));

// Attempt to call a static method on an instance of the class
try {
    console.log(p1.distance(p1, p2));
} catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}
 */
const sum = (ar) => {
    let s = 0;
    ar.forEach(t => {
        s += t;
    });
    return s;
}
let p_ar = [2, 40, 5];
console.log(p_ar.reduce((acc, item) => acc + item));
console.log("sum: " + sum(p_ar));
/** 
 * Héritage
 * Essentiellement, cette construction nous permet de créer un prototype d'objet ou une classe qui est une extension d'un autre prototype d'objet ou d'une classe.
 * Une classe héritant d'une autre classe (appelée superclasse ou classe parent) est appelée sous-classe (ou classe enfant).
 * La sous-classe hérite des méthodes et des comportements de la superclasse, mais elle peut également en déclarer de nouveaux ou même remplacer ceux qui existent déjà.
 * class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();

Output will be:
Spot speaks.
Spot barks.
 * Extension d'un objet
 * La possibilité d'étendre plusieurs classes à partir de la même superclasse (ou de modéliser plusieurs types d'objets d'après le même prototype)
 * est puissante car elle nous fournit certaines garanties implicites sur la fonctionnalité de base des sous-classes ;
 * en tant qu'extensions de la classe parente, les sous-classes sont garanties d'avoir (au minimum) les champs, méthodes et fonctions de la superclasse.
 * class Animal {
    constructor(name) {
        this.name = name;
        this.AnimaType = 'Animal';
    }
    type() {
        console.log(`${this.name} is type: ${this.AnimaType}`);
    }
    speak() {
        console.log(`${this.name}, speak`);
    }
}
class Dog extends Animal {
    constructor(name, collarColor) {
        super(name);
        this.animalType = 'Dog';
        this.collarColor = collarColor;
    }
    speak() {
        console.log(this.name, 'barks.');
    }
    collar() {
        console.log(this.name, 'has a', this.collarColor, 'collar.');
    }
}

let spot = new Dog('Spot', 'red');
spot.type();
spot.speak();
spot.collar();

// Because the Animal constructor only expects one argument,
// only the first value passed to it is used
spot = new Animal('Spot', 'white');
spot.type();
spot.speak();
try {
    spot.collar();
} catch (exception) {
    console.log(exception.name + ': ' + exception.message +
        ' (collar is a method of Dog, not Animal).');
}

Output will be:
Spot is type Dog
Spot barks.
Spot has a red collar.
Spot is type Animal
Spot speaks.
TypeError: spot.collar is not a function (collar is a method of Dog, not Animal).

 */
/**
 *
 *
 * @class Rectangle
 * 
 * In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.
 * Task
 * We provide the implementation for a Rectangle class in the editor. Perform the following tasks:
 * Add an area method to Rectangle's prototype.
 * Create a Square class that satisfies the following:
 * It is a subclass of Rectangle.
 * It contains a constructor and no other methods.
 * It can use the Rectangle class' area method to print the area of a Square object.
 * Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.
 */
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
// prototype for Rectangle
Rectangle.prototype.area = function() {
    return this.height * this.width;
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        //on sait que rectangleObject prend deux parmetres
        // donc dans le super on sait que le carre cest c*c donc super(side,side)
        // si side = this.height; side = this.width;
    }

}
let rect = new Rectangle(2, 3);
let sq = new Square(2);
console.log(`Rectangle area: ${rect.area()} and square area: ${sq.area()}`);
/**
 *
 *
 * @param {*} n
 * @return {*} 
 * Given an integer, n , perform the following conditional actions:
 * If n is odd, print Weird
 * If n is even and in the inclusive range of 2 to 5 , print Not Weird
 * If n is even and in the inclusive range of 6 to 20, print Weird
 * If N is even and greater than 20 , print Not Weird
 * Complete the stub code provided in your editor to print whether or not  is weird.
 */
const even_odd = n => {
    while (n % 2 === 0) {
        if (n >= 2 && n <= 5)
            return 'Not Weird';
        else if (n >= 6 && n <= 20)
            return 'Weird';
        else
            return 'Not weird';
    }
    return 'Weird';

}
let n = 24;
console.log(even_odd(n));
//MM/DD/YYYY
/**
 *
 *
 * @param {*} dateString
 * @return {*} 
 * We can create a date using this constructor let d = new Date(dateString)
 * This constructor has a parameter,dateString , which is a String describing a date.
 * The dateString must be in a format recognized by the Date.parse() function, such as MM/DD/YYYY or Month Day, Year.
 * For example, 01/01/1980 and Jan 1, 1980 are both strings that can be successfully parsed using the parse function.
 * 1. Date.getTime()
 * Get the time in milliseconds elapsed since .
 * 2. Date.getFullYear()
 * Get the four-digit year ().
 * 3. Date.getMonth()
 * Get the Date object's month as a zero-indexed number ().
 * 4. Date.getDate()
 * Get the Date object's day as a number ().
 * 5. Date.getDay()
 * Get the Date object's weekday as a number ().
 * 6. Date.getHours()
 * Get the Date object's hour ().
 * 7. Date.getMinutes()
 * Get the Date object's minutes ()
 * 8. Date.getSeconds()
 * Get the Date object's seconds ().
 * 9. Date.getMilliseconds()
 * Get the Date object's milliseconds (
 */
const getDayName = dateString => {
    let d = new Date(dateString);
    switch (d.toString().substring(0, 3)) {

        case 'Mon':
            return 'Monday';
        case 'Tue':
            return 'Tuesday';
        case 'Wed':
            return 'Wednesday';
        case 'Thu':
            return 'Thursday';
        case 'Fri':
            return 'Friday';
        case 'Sat':
            return 'Saturday';
        case 'Sun':
            return 'Sunday';

    }
}
let d = '12/07/2016';
let date = new Date('12/07/2016');

console.log(date.toString().substring(0, 3));
console.log("Day name: " + getDayName(d));

let a_max = [3, 'a', 'a', 'a', 2, 3, 'a', 'b', 3, 'a', 2, 4, 9, 3, 3, 3, 3];
/**
 *Count number of element in array
 *
 * @param {*} array
 * @param {*} elt
 * @return {*} 
 */
const countFunc = (array, elt) => {
        return array.filter(item => item === elt).length;
    }
    /**
     *Most frequent element repeated in array and number times 
     *
     * @param {*} array
     * @return {*} 
     */
const mostFrequentItem = array => {
        let mf = 1;
        let i;
        array.forEach(item => {
            console.log(`${item} => ${cpt = countFunc(array, item)}`);
            if (cpt > mf) {
                mf = cpt;
                i = item;
            }
        });
        return `the most frequent element is ${i} and repeated ${mf} times`;

    }
    // return `the most frequent item is ${item}: ${mf}`;

console.log(a_max.sort());
console.log(`the number of a is: ${countFunc(a_max,'a')}`);
console.log(mostFrequentItem(a_max));

function regexVariable() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */

    let re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)([a-zA-Z])+$/;
    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVariable();
    const s = readLine();

    console.log(!!s.match(re));
}
const compteurElt = (array, elt) => {
    let cpt = 0;
    array.forEach(i => {
        if (i === elt)
            cpt++;
    });
    return cpt;
}
const mostFreq = array => {
    let mf = 1;
    let mfElt;
    let cpt = 0;
    array.forEach(item => {
        cpt = compteurElt(array, item);
        if (cpt > mf) {
            mf = cpt;
            mfElt = item;

        }
    });
    return `The most frequent element is ${mfElt} and it's repeated ${mf} times.`;
}
let mfElt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 'b', 'b', 'b', 'c'];
let elt = 5;
console.log(`The number of ${elt} is: ${compteurElt(mfElt, elt)} `);
console.log(mostFreq(mfElt));

/**
 *
 * HackerLand University has the following grading policy
 * Every student receives a grade in the inclusive range from 0 to 100.
 * Any grade less than 38 is a failing grade.
 * Sam is a professor at the university and likes to round each student's grade according to these rules:
 * If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
 * If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
 * Examples
 * grade = 84 round to 85 (85 - 84 is less than 3)
 * grade 29 = do not round (result is less than 40)
 * grade 57 = do not round (60 - 57 is 3 or higher)
 * Sample Input 0
 * 4 => number of grades
 * 73
 * 67
 * 38
 * 33
 * Sample Output 0
 * 75
 * 67
 * 40
 * 33
 * 
 * @param {*} grade
 * @return {*} 
 */
const diffNextmultipleOfFive = grade => {
        let nextMultiple = grade + (5 - (grade % 5));
        return grade < 38 ? grade : nextMultiple - grade < 3 ? nextMultiple : grade;
    }
    /**
     *
     *
     * @param {*} grades
     * @return {*} 
     */
function gradingStudents(grades) {
    // Write your code here
    let result = [];
    grades.forEach(grade => {
        result.push(diffNextmultipleOfFive(grade));
    });
    return result;
}
const grades = [73, 67, 38, 33];
let grade = 73;
// next multiple de 5 apres 57 est 60
console.log(`The nextMultiple of 5 after the if it's higher or = 30 is: ${diffNextmultipleOfFive(grade)}`);
console.log("The final grade");
console.log(gradingStudents(grades));
let vy = 0;
for (vy; vy < 5; vy++);
console.log(vy);
//output = 5 cause when we count vy++ il will iterate 5 times

const birthday = (s, d, m) => {
    let cpt = 0;
    let a = 0;
    do {
        if (s.slice(a, m).reduce((acc, item) => acc + item) === d)
            cpt += 1;
        a++;
        m++;
    } while (a < s.length);
    return cpt;
}
let vx = [1, 2, 1, 3, 2];
console.log(vx.slice(1, 3));
console.log(birthday(vx, 3, 2));
/**
 *
 *
 * @param {*} a
 * @param {*} b
 * @return {*} 
 * Exercice:
 * Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
 * The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
 * The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
 * If a[i] > b[i], then Alice is awarded 1 point.
 * If a[i] < b[i], then Bob is awarded 1 point.
 * If a[i] = b[i], then neither person receives a point.
 * Comparison points is the total points a person earned.
 * Given a and b, determine their respective comparison points.
 * Example
 * a = [1, 2, 3]
 * b = [3, 2, 1]
 * For elements *0*, Bob is awarded a point because a[0] .
 * For the equal elements a[1] and b[1], no points are earned.
 * Finally, for elements 2, a[2] > b[2] so Alice receives a point.
 * The return array is [1, 1] with Alice's score first and Bob's second.
 */
const compareTriplet = (a, b) => {
    let alice = 0;
    let bob = 0;
    let i = 0;
    while (i < a.length && i < b.length) {
        if (a[i] > b[i]) {
            alice += 1;
        } else if (a[i] < b[i]) {
            bob += 1;
        }
        i++;
    }
    console.log("alice and bob result");
    return [alice, bob];
}
let alice = [17, 28, 30];
let bob = [99, 16, 8];
console.log(compareTriplet(alice, bob));
/**
 *  Exerciceswap i just did that in order to swap array in
 * Lili homework
 * @param {*} arr
 * @param {*} a
 * @param {*} b
 */
const swap = (arr, a, b) => {
    let temp;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
const bubbleSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                //swap(arr, j, j + 1); ca marche
            }
        }

    }
    return arr;
}
const reverse_sort = arr => {
    for (let i = 1; i < arr.length; ++i) {
        for (let j = arr.length - 1; j >= 0; --j) {
            if (arr[j] < arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

let lili_arr = [2, 5, 3, 1];

const cptsort = arr => {
    let cpt1 = 0;
    let cpyarr = [...arr];
    console.log('arr in cptsort: ', arr);
    let sorted = arr.sort(); // it's work bubbleSort(arr);
    for (let i = 0; i < cpyarr.length; i++) {
        if (cpyarr[i] != sorted[i]) {
            swap(cpyarr, sorted.indexOf(cpyarr[i]), i);
            console.log(`index of ${cpyarr[i]}  in sorted is => ${sorted.indexOf(cpyarr[i])}`);
            cpt1++;
        }

    }
    console.log('after sorted in cpt sort: ', arr);
    return cpt1;
}

const cptreverse = arr => {
    let cpt2 = 0;
    console.log('arr: ' + arr);
    let cpyarr = [...arr];
    let reverse_array = arr.sort().reverse(); // it's work reverse_sort(cpyarr);

    console.log('cpyarr: ' + cpyarr);
    let j = 0;
    while (j < cpyarr.length) {
        if (cpyarr[j] != reverse_array[j]) {
            swap(cpyarr, reverse_array.indexOf(cpyarr[j]), j);
            console.log(`index of ${cpyarr[j]}  in reverse is => ${reverse_array.indexOf(cpyarr[j])}`);
            cpt2++;
        }

        j++;
    }

    console.log('after reverse: ' + cpyarr);
    return cpt2;
}

/**
 * Number of swaps in array  but this won't return the minimum rather the maximum
 *
 * @param {*} arr
 * @return {*} 
 */
function lilysHomework(arr) {
    // Write your code here
    let cpt1 = cptsort(arr);
    let cpt2 = cptreverse(arr);
    return cpt1 < cpt2 ? cpt1 : cpt2;
}

console.log("the minimum swap of lilysHomework func is: " + lilysHomework(lili_arr));
const ascArray = arr => {
    return arr.sort((a, b) => a - b);
}
const descArray = arr => {
    return arr.sort((a, b) => b - a);
}

let l_r = [2, 5, 3, 1];

const minimumOfSwap = arr => {
    let minSwapAsc = 0;
    let indexAsc = 0;
    const x = [...arr]; //copie du arr dans x sinon je risque de me retrouver avec un arr trier
    const ascArr = ascArray(arr);

    //let descending = descArray(arr);
    for (let indexOr = 0; indexOr < x.length; indexOr++) {
        if (x[indexOr] != ascArr[indexAsc]) {
            // si l'element à l'index original est different de l'element à mon asc array
            //je dois faire un swap de l'eleement original
            // je cherche l'index alors de l'original dans l'ascending et je fais un swap dans l'original
            let currentIndexInOriginal = ascArr.indexOf(x[indexOr]);
            swap(x, indexOr, currentIndexInOriginal);
            // let y = swap(x, indexOr, currentIndexInOriginal);
            console.log(x);

            minSwapAsc++;


        }
        indexAsc++;

    }


    return minSwapAsc;

}




/** 
 * console.log("descending array: " + descArray(lili_arr));
 * console.log("ascending array: " + ascArray(lili_arr));
 * lili_arr.map((item, index) => {
 *  console.log(item * index);
 * });
 * console.log("All item multiplied by 2");
 * let l_r = lili_arr.map(item => item * 2);
 * console.log(l_r.indexOf(4)); output 1 */

/** After the minimum swap
 * 1st swap y become [2,4,3,5,1]
 * 2nd swap y become [5,4,3,2,1]
 */
const myTable = array => {
        return array;
    }
    //console.log("my table func", myTable(y));
const minSwapDesc = array => {
    let indexDesc = 0;
    let minSwapDesc = 0;
    let copyDesc = [...array];

    const desc_sorted = descArray(array);
    console.log("desc sorted", desc_sorted);
    for (let i = 0; i < copyDesc.length; i++) {
        if (copyDesc[i] != desc_sorted[indexDesc]) {
            let index_at_desc = desc_sorted.indexOf(copyDesc[i]);
            console.log("copy desc", copyDesc);
            swap(copyDesc, i, index_at_desc);
            minSwapDesc++;
        }
        indexDesc++;

    }
    return minSwapDesc;
}
const minSwapAsc = array => {
    let indexAsc = 0;
    let minSwapAsc = 0;
    let copyAsc = [...array];
    console.log("copy asc", copyAsc);

    const asc_sorted = ascArray(array);
    for (let i = 0; i < copyAsc.length; i++) {
        if (copyAsc[i] != asc_sorted[indexAsc]) {
            let index_at_asc = asc_sorted.indexOf(asc_sorted[indexAsc]);
            swap(copyAsc, i, index_at_asc);
            minSwapAsc++;
        }
        indexAsc++;
    }
    console.log("after swap asc", copyAsc);
    console.log("after swap minSwapAsc", minSwapAsc);

}
const lilyHomeWork = array => {
    let count1 = minimumOfSwap(array);
    let cpt = minSwapDesc(array);
    console.log("count1", count1);
    console.log("cpt", cpt);
    return cpt < count1 ? cpt : count1;
}
const v = [3, 4, 2, 5, 1];
const r = [7, 15, 12, 3];
//console.log("the minimum swap of minimumswap func is: " + minimumOfSwap(v));
const y = [3, 4, 2, 5, 1];
console.log("lilyHomeWork: ", lilyHomeWork(y));
//console.log(minSwapDesc(y));

/** Median of the array 
 * find median has a parameter arr of unsorted array return int the median of the array
 * Input format
 * 7
 * 0 1 2 4 6 5 3 
 * Output
 * 3 
 * Explanation the sorted array is 0 1 2 3 4 5 6 5 
 * it's middle element is arr[3] it's 3
 * Exemple 5 3 1 2 4  sorted 1 2 3 4 5 the middle element and the median is 3
 */
const findMedian = array => {
    let median;
    array = array.sort((a, b) => a - b);
    median = Math.round((array.length / 2) - 1);
    return array[median];
}
let median_array = [5, 3, 2, 4, 1];

console.log("the median is: " + findMedian(median_array));

//mfElt
const cptItem = (array, item) => {
    let cpt = 0;
    array.forEach(elt => {
        if (elt === item) {
            cpt++;
        }
    });
    return cpt;
}

const mfreqElt = array => {
    let mf = 0;
    let frequent = 0;
    array.sort((a, b) => a - b).forEach(i => {
        if (cptItem(array, i) > mf) {
            mf = cptItem(array, i);
            frequent = i;
        }

    });

    return frequent;
}

console.log(`The number of ${elt} is: ${cptItem(mfElt, elt)} `);
console.log("the most frequent element is: ", mfreqElt(mfElt));
/**
 * 
 * You are choreographing a circus show with various animals. 
 * For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
 * The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
 * The second kangaroo starts at x2 location  and moves at a rate of v2 meters per jump.
 * You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.
 * The solution to apply is: 
 * relative velocity concept...if time of seperation of approaching is zero then bothare at same location at a particular time
 * Explanation: Relative distance divided by relative velocity shouldn't have any remainder.
 * The kangaroo who is starting behind will only be able to catchup with the ahead kangaroo if their relative distance equals or is completely divisible by their relative velocity.
 * Only then they both can reach a Point of Convergence.
 * 
 * Or 
 * Try to find there intersection 
 * the intersection  of two point A & B y = x2- x1 / v1 - v2
 * if there intersection % 1 == 0 return "YES" or NO;
 * @param {*} x1
 * @param {*} v1
 * @param {*} x2
 * @param {*} v2
 * @return {*} 
 */
const kangaroo = (x1, v1, x2, v2) => {
    // Write your code here
    let intersection = (x2 - x1) / (v1 - v2);
    return v2 >= v1 ? "NO" : intersection % 1 === 0 ? "YES" : "NO";
}
const kangooroo = (x1, v1, x2, v2) => {
    let d = Math.abs((x2 - x1) / (v2 - v1));
    // le jump s'arretera une fois la distance sera atteinte
    // i must find the intersection  of two point A & B y = x2- x1 / v1 - v2
    // if there intersection % 1 == 0 return "YES" or NO;
    let intersection = (x2 - x1) / (v1 - v2);
    if (v2 >= v1)
        return "NO";
    return intersection % 1 === 0 ? "YES" : "NO";

}

//console.log(distance(0, 2, 5, 3));


/**
 *          BETWEEN TWO SETS
 * There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
 * 1. The elements of the first array are all factors of the integer being considered
 * 2. The integer being considered is a factor of all elements of the second array
 * These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
 * Exemple
 * a = [2,6]
 * b = [24, 6]
 * There are two numbers between the arrays: 6 and 12.
 * 
 * Function Description
 * Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.
 * getTotalX has the following parameter(s):
 * int a[n]: an array of integers
 * int b[m]: an array of integers
 * 
 * Returns
 * int: the number of integers that are between the sets
 * 
 * Input Format
 * The first line contains two space-separated integers, n and m, the number of elements in arrays a and b.
 * 
 * Sample Input
 * 2 3
 * 2 4
 * 16 32 96
 * Sample Output
 * 3
 * Explanation
 * 2 and 4 divide evenly into 4, 8, 12 and 16.
 * 4, 8 and 16 divide evenly into 16, 32, 96.
 * 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
 * 
 * NB: to remove element from array using js use the splice method if u know the index of the element pass the index followed by 1.
 * exemple array.splice(2,1); element of index 2 delete That element that means 1 element to delete
 *              
 *              BEST EXPLANATION OF THIS PROBLEM
 * For all those guys like me who found this question difficult to understand, here's the simple explanation i got after searching for decades.
 * 1. Find LCM (PPCM) of the first array a.
 * 2.Find GCD / HCF (PGCD) of the second array b. 3.Find all the multiples of LCM up to GCD, which divides the GCD evenly.
 * For Example: Here, In the given sample Input, The LCM of array a would be 4 and the GCD of the array b would be 16. Now, Find all Multiples of 4,(like 4,8,12,16,...) upto 16, such that, (16%multiple_of_4_here) should be 0. Here, 16%4=0 -----> count=1 (suppose this variable.) 16%8=0 -----> count=2 16%12!=0 ---> count=2 16%16=0 ---> count=3.
 * Thus, The answer is 3. Hope this helped you.
 *
 * @param {*} a
 * @param {*} b
 * @return {*} 
    
/**
 *  
 * @param {*} a
 * @param {*} b
 * En resume pour la recursivite en utilisant l'algorithm d'euclide
 * le pgcd (gcd english) de deux nombre a et b si a = 0 le pgcd = b sinon si b = 0 le pgcd= a.
 * au cas ou a > b on reduit recursivement la valeur de a si c'est qui est superieur on fait la meme
 * 
 * NB: PGCD ET PPPCM (gcd and lcm) of an array (see twosets.js file)
 */
const gcd = function(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}


const lcm = (a, b) => a * b / gcd(a, b);


const gcd_lcm = (a, b) => {
    let ppcm_a = a[0];
    let pgcd_b = b[0];
    a.forEach(elt => {
        ppcm_a = lcm(ppcm_a, elt);
    });
    b.forEach(elt => {
        pgcd_b = gcd(pgcd_b, elt);
    });
    return [ppcm_a, pgcd_b];

}
console.log(`the gcd is: ${gcd(4, 4)}`);


let pgcd_a = 72;
let pgcd_b = 48;
console.log("The GCD (PGCD) of " + pgcd_a + " and " + pgcd_b + " is " + gcd(pgcd_a, pgcd_b));
const ppcm = (a, b) => {
    return a * b / gcd(a, b);
}
let ppcm_a = 1;
let ppcm_b = 0;
console.log("The LCM (PPCM) of " + ppcm_a + " and " + ppcm_b + " is " + ppcm(ppcm_a, ppcm_b));


const getTotalX = (a, b) => {
    let ppcm_a = a[0];
    let pgcd_b = b[0];
    let cpt = 0;
    for (let i = 1; i < a.length; ++i) {
        ppcm_a = ppcm(ppcm_a, a[i]);
    }
    for (let j = 1; j < b.length; j++) {
        pgcd_b = gcd(pgcd_b, b[j]);

    }
    let multiple = [];
    let ans = ppcm_a;
    let i = 1;
    while (ans <= pgcd_b) {
        ans = ppcm_a * i;
        multiple.push(ans);
        i++;
    }
    multiple.forEach(elt => {
        if (pgcd_b % elt === 0)
            cpt++;
    });
    return cpt;
}

//console.log(pgcd(16, 32));

//console.log(getTotalX([1], [72, 48]));

console.log(getTotalX([2, 3, 6], [42, 84]));

const check_space = (val) => {
        val = val.split("");

        val.forEach((v) => {
            if (v === " ")
                console.log("Not allowed");
            else
                console.log(v);
        });
        //return val != " " && val ? console.log("its a truthy") : console.log("its a falsy");
    }
    //check_space("bonjour yansane");
    /**
     *
     * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
     * Example
     * Scores are in the same order as the games played. She tabulates her results as follows:
     *                                     Count
     * Game  Score  Minimum  Maximum   Min Max
     *  0      12     12       12       0   0
     *  1      24     12       24       0   1
     *  2      10     10       24       1   1
     *  3       24      10        24        1    1
     * Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.
     * Function Description
     * Complete the breakingRecords function in the editor below.
     * breakingRecords has the following parameter(s):
     * int scores[n]: points scored per game
     * Returns
     * int[2]: An array with the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.
     * Input Format
     * The first line contains an integer n, the number of games.
     * The second line contains n space-separated integers describing the respective values of score0, score1,...scoren-1.
     * Constraints
     * Sample Input 0
     * 9
     * 10 5 20 20 4 5 2 25 1
     * Sample Output 0
     * 2 4
     * 

     *
     * @param {*} scores
     * @return {*} 
     */
const breakingRecords = scores => {
    let cptMin = 0;
    let cptMax = 0;
    let highest_score = scores[0];
    let lowest_score = scores[0];
    scores.forEach(score => {
        if (score > highest_score) {
            highest_score = score;
            cptMax += 1;
        }
        if (score < lowest_score) {
            lowest_score = score;
            cptMin += 1;
        }
    });
    return [cptMax, cptMin];

}
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

const divisibleSumPairs = (n, k, ar) => {
    n = ar.length;
    let nb = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                nb += 1;

            }
        }

    }
    return nb;
}


let nbp = [1, 3, 2, 6, 1, 2];
console.log(divisibleSumPairs(nbp.length, 3, nbp));
const cptbird = (array, elt) => {
    let cpt = 0;
    array.forEach(i => {
        if (i === elt)
            cpt += 1;
    });
    return cpt;

}
const migratoryBirds = arr => {
    let mf = 0;
    let mfItem = 0;
    arr.sort((a, b) => a - b).forEach(elt => {
        let compteur = cptbird(arr, elt);
        if (compteur > mfItem) {
            mfItem = compteur;
            mf = elt;
        }
    });
    console.log(`The most frequent occurrence is ${mf}`);
}
let migratory = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
migratoryBirds(migratory);
const cptMigratory = array => {
    let types = Array(5).fill(0);
    array.forEach(val => {
        types[val - 1]++;

    });
    return types;
}
console.log(cptMigratory(migratory));

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let first_row = matrix[0];
let second_row = matrix[1];
let third_row = matrix[2];
// matrix.length will return 3
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {

        if (matrix[i][j] === 5) {
            continue;
        } else {

            console.log(matrix[i][j]);
        }
    }
    console.log(matrix[i]);

}

const swapbig = (arr, a, b) => {

    arr[a] = BigInt(arr[a]);
    arr[b] = BigInt(arr[b]);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
const bigSorting = (unsorted) => {
    // Write your code here
    for (let i = 1; i < unsorted.length; ++i) {
        for (let j = 0; j < unsorted.length - 1; ++j) {
            if (unsorted[j] > unsorted[j + 1]) {
                swapbig(unsorted, j, j + 1);
            }
        }
    }

    return unsorted;
}

const bgsort = arr => {
    //si on convertit la valeur du BigInt on aura une erreur dexception
    //TypeError: Cannot convert a BigInt value to a number at Array.sort (<anonymous>)
    // le compiler de hackerrank le n devant les nbres est exclu donc ma mission retirer les n 
    //return arr.sort((a, b) => Number(BigInt(a) - BigInt(b)));
    arr = arr.sort((a, b) => Number(BigInt(a) - BigInt(b)));
    let p = [];
    arr.forEach(elt => {
        p.push(Number(elt));
    });
    return p;
}

let unsorted = ['1', '200', '150', '3'];
let bg = [6, 31415926535897932384626433832795, 1, 3, 10, 3, 5];
console.log(`the sorted of bg ${bigSorting(bg)}`);
console.log(bgsort(bg));
/**
 * Leap year (année bissextile)
 * Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.
 * From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.
 * In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:
 * Divisible by 400.
 * Divisible by 4 and not divisible by 100.
 * Given a year, , find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .
 * For example, the given  = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is
 * @param {*} year
 * 
 * it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:
 * Divisible by 400.
 * Divisible by 4 and not divisible by 100.
 * Format de sortie
 * Imprimer la date complète de la journée du programmeur au cours de l'annéeau format dd.mm.yyyy,
 * où dd est le jour à deux chiffres, mm est le mois à deux chiffres et yyyy est y.
 * Exemple d'entrée 0
 * 2017
 * Exemple de sortie 0
 * 13.09.2017
 * Explication 0
 * Dans l'année= 2017, janvier a 31 jours, février a 28 jours, mars a 31 jours, 
 * avril a 30 jours, mai a 31 jours, juin a 30 jours, juillet a 31 jours et août a 31 jours.
 * Lorsque nous additionnons le nombre total de jours au cours des huit premiers mois,
 * nous obtenons 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Le jour du programmeur est le 256e jour,
 * alors calculez 256 - 243 = 13 pour déterminer qu'il tombe le jour 13 du 9ème mois (septembre).
 * Nous imprimons ensuite la date complète dans le format spécifié, qui est 13.09.2017.
 * 
 * Exemple d'entrée 1
 * 2016
 * Exemple de sortie 1
 * 12.09.2016
 * Explication 1
 * An= 2016 est une année bissextile, donc février a 29 jours mais tous les autres mois ont le même nombre de jours qu'en 2017.
 * Lorsque nous additionnons le nombre total de jours des huit premiers mois,
 * nous obtenons 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244.
 * Le Jour du Programmeur est le 256e jour, alors calculez 256 - 244 = 12 pour déterminer qu'il tombe le 12e jour du 9e mois (septembre).
 * Nous imprimons ensuite la date complète dans le format spécifié, qui est 12.09.2016.
 * Exemple d'entrée 2
 * 1800
 * Exemple de sortie 2
 * 12.09.1800
Explication 2

Depuis 1800 est une année bissextile selon le calendrier julien. Le jour est le 12 septembre.
 * NB: In 1918, do special case for the switch in calendars from Julian to Gregorian
            //Feb started on day 14, meaning there were 29 - 14 = 15 days in this month for this year
            daysInMonths[1] = 15;
         now in feb 1918   31 + 15 + 31 + 30 + 31 + 30 + 31 + 31 = 230.
         normaly 1918 is not a leap year in feb it must be 28 - 14 but 
         when we compile in hackerRank in 1918 it must return 26.09.1918
         so we consider feb in 1918 has 29 days - 14 it'll be 15 totals days = 230
 * 
 */
const leapYear = year => {
    if (year % 400 === 0 || (year % 4 === 0) && (year % 100 != 0))
        return "It's a leap year";
    return "It's not a leap year.";
}
const leapGregorian = year => {
    console.log("Gregorian Calendar");
    return (year % 400 === 0 || (year % 4 === 0) && (year % 100 != 0)) ? `${256 - 244}.09.${year}` : `${256 - 243}.09.${year}`;
}
const leapJulian = year => {
    console.log("Julian Calendar");
    return year % 4 === 0 ? `${256 - 244}.09.${year}` : `${256 - 243}.09.${year}`;
}
const getCalendar = y => {
    if (y === 1918)
        return `${256 - 229}.09.${y}`;
    else if (y > 1918)
        return leapGregorian(y);
    else
        return leapJulian(y);

}
const dayOfProgrammer = year => {
    return getCalendar(year);
}
console.log(leapYear(1918));
console.log(dayOfProgrammer(1918));
console.log(31 + 14 + 31 + 30 + 31 + 30 + 31 + 31);

const convertDecimalToBinary = n => {
    let bd = [];
    let remainder;
    while (n > 0) {
        remainder = n % 2;
        n = parseInt(n / 2);
        bd.unshift(remainder); // insert elt at the beginning of the list

    }
    return bd.join('');
}
console.log(convertDecimalToBinary(4));
console.log(1 % 2);
/**
 * Exercise : Bill Division on HackerRank
 *
 * @param {*} bill
 * @param {*} k
 * @param {*} b
 * @return {*} 
 */
const bonAppetit = (bill, k, b) => {
    let annabill = 0;
    let bcharged = 0;
    bill.forEach(item => {
        annabill += item;
        bcharged += item;
    });
    annabill = (annabill - bill[k]) / 2;
    bcharged = (bcharged) / 2;
    if (annabill === b)
        return 'Bon Appetit';
    else
        return `The amount of money brian owes anna is: ${bcharged - annabill}`;

}
let bnAppetit = [3, 10, 2, 9];
console.log(bonAppetit(bnAppetit, 1, 12));

const pageCount = (n, p) => {
    let cptStart = parseInt(p / 2); // when he starts flipping (tourner la page) page from the front  
    let cptTotal = parseInt(n / 2); // the totalpage to flip
    let cptEnd = cptTotal - cptStart; // when he starts flipping at the end of the page  
    return cptStart > cptEnd ? cptEnd : cptStart;
}

console.log(`the page to flip to arrive at p is: ${pageCount(7,4)}`);

const binaryOperation = (a, b) => {
    a = parseInt(a, 2);
    b = parseInt(b, 2);
    let r = eval(a + b);
    return r.toString(2);
}
let ba = 11011;
let bb = 1000;
console.log(binaryOperation(ba, bb));