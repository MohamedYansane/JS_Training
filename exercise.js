let ar = [3, 4, 3, 2, 3, 4, 5];
const duplicated_time = ar => {
    let new_ar = [];
    let count = 0;
    ar = ar.sort((a, b) => a - b);
    for (let i = 0; i < ar.length; ++i) {
        if (ar[i] === ar[i + 1]) {
            new_ar.push(ar[i]);
        } else {
            continue;
        }
    }
    return Array.from(new Set(new_ar));
}
const sortedArray = ar => {
    return ar.sort((a, b) => a - b);
}
const binarySearch = (array, target) => {
    array = sortedArray(array);
    /**so i'm considering the target must be at the left at the index 0 of my array or right of
     * my array precisely the last element;
     */
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === target)
            return mid;
        else if (target > array[mid])
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}
let arr = [4, 3, 2, 1, 5, 9];
console.log(binarySearch(arr, 8));
let output = arr.map(item => item * 2);
console.log(output);
/**1- Call the .filter() method on randomNumbers to return values that are less than 250.
 * Save them to a new array called smallNumbers ,
 *  declared with const. 
 * 2 - Now let's work with an array of strings.
 * Invoke .filter() on the favoritewords 
 * array to return elements that have more 
 * than 7 characters. Save the returned array 
 * to a const variable named longFavoritewords.*/
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(item => item.length > 7);
console.log(longFavoriteWords);
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(item => item < 250);
console.log(smallNumbers);
let sum_array = [1, 2, 3, 4, 5, 6, 7, 8];
const sumArray = sum_array.reduce((acc, item) => acc + item);
console.log(sumArray);

const sumTableau = ar => {
    return ar.reduce((acc, item) => acc + item);
}

console.log(`Sum of elements: ${sumTableau(ar)}`);
console.log(`Using binary search l'index of target is: ${binarySearch(ar, 5)}`);
/**1.Create a variable capFave and assign the captain‘s 
 * favorite food (the element in the 0th index of her 
 * 'favorite foods' array) to it. 
 * Make sure to use bracket and 
 * dot notation to get the value of the food 
 * through nested access (don’t just copy the value into the variable!)
 * 2. Right now the passengers property has a value of null.
 *  Instead, assign as its value an array of objects.
 *  These objects should represent the spaceship‘s passengers as individual objects.
 *  Make at least one passenger object in the array that has at least one key-value pair on it.
 * 3. Create a variable firstPassenger and assign the first passenger
 *  as its value (the element in the 0th index of the spaceship.
 * passengers array you just made).
 *  Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!) */
let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};
let capFave = spaceship.crew.captain['favorite foods'][0];
console.log(capFave);
spaceship.passengers = [{ name: 'Yansane', firstName: 'Mohamed' }, 'seat'];
let firstPassenger = spaceship.passengers[0];
console.log(firstPassenger);

/** 1. Using for...in , iterate through the 
 * spaceship.crew object in the code editor
 * and console.log() a list of crew roles and 
 * names in the following format: "[crew member's role]: [crew member's name]',e.g., 'chief officer: Dan '
 * 2. Using for...in , iterate through the spaceship.crew object in the code editor 
 * and console.log() a list of crew names
 * and degrees in the following format:
 * '[crew member's name]: [crew member's degree]', i.e., 'Lily: Computer Engineering'. */

let space_ship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};
for (let crew in space_ship.crew) {
    /** je me position sur spaceship.crew
     * la variable crew devient mon index et parcours tous les elements de spaceship.crew
     * le premier c'est le capitain and chief officer etc
     * je dois afficher les noms se trouvant a chaque index de mon crew
     */
    console.log(`${crew}: ${space_ship.crew[crew].name}`);
}

for (let crew in spaceship.crew) {
    console.log(`${spaceship.crew[crew].name}: ${spaceship.crew[crew].degree}`);
}

for (let i in spaceship.telescope) {
    console.log(`${i}: ${spaceship.yearBuilt}`);
}
/**2. Inside the getter method, add an if statement to check if this._energyLevel 
 * is a number using the typeof operator.
 * If that condition is truthy, return 'My current energy level is ENERGYLEVEL'.
 * Replace ENERGYLEVEL with the value of this. energyLevel.
 * Make sure you return the string and not logging it to the console. */

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        /** let test = 42 typeof test output number */
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`;
        }
    }

};

console.log(typeof robot);