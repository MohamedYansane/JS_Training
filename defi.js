const getUserInput = user_input => {
    user_input = user_input.toLowerCase();
    if (user_input === 'feuille' || user_input === 'pierre' || user_input === 'ciseau' || user_input === 'bomb')
        return user_input;
    else
        return 'Veuillez choisir entre pierre feuille et ciseau';

}
const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'pierre';
            break;
        case 1:
            return 'feuille';
            break;
        case 2:
            return 'ciseau';
            break;

    }
}
const determinedWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice)
        return 'The game was tie';
    if (userChoice === 'pierre') {
        if (computerChoice === 'feuille')
            return `The computer won with ${computerChoice}`;
        else
            return `The user won with ${userChoice} compared to computer choice  ${computerChoice}`;
    }
    if (userChoice === 'feuille') {
        if (computerChoice === 'ciseau')
            return `The computer won with ${computerChoice}`;
        else
            return `The user won with ${userChoice} compared to computer choice  ${computerChoice}`;
    }
    if (userChoice === 'ciseau') {
        if (computerChoice === 'pierre')
            return `The computer won with ${computerChoice}`;
        else
            return `The user won with ${userChoice} compared to computer choice  ${computerChoice}`;
    }
    if (userChoice === 'bomb') {
        return `The user won`;
    }

}

const playTheGame = () => {
        let user_choice = getUserInput('feuille');
        let computerChoice = getComputerChoice();
        console.log(determinedWinner(user_choice, computerChoice));
    }
    //playTheGame();
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
for (let i in spaceship.telescope) {
    console.log(`${i}: ${spaceship.telescope[i]}`);

}

let sortArray = ar => {
    return ar.sort((a, b) => a - b);
}
let findDuplicateNumber = ar => {
    ar = sortArray(ar);
    let duplicateArray = [];
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === ar[i + 1]) {
            duplicateArray.push(ar[i]);
        }
    }
    return Array.from(new Set(duplicateArray));

}
let sumDuplicateNumber = ar => ar.reduce((acc, item) => acc + item);
let ar = [1, 3, 4, 3, 3, 4, 4, 5, 11, 11, 2, 6];

const binearySearch = (ar, target) => {
    let left = 0;
    let right = ar.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (ar[mid] === target)
            return mid;
        else if (target > ar[mid])
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;

}
let table = [-1, 1, -2, 3, 4, 5, 11, 8, 2, 0];
table = sortArray(table);
console.log(table);
let target = -2;
if (binearySearch(table, target) != -1)
    console.log('La cible y figure à la position: ' + binearySearch(table, target));
else
    console.log('La cible ne figure pas');

/*console.log(sortArray(ar));
console.log(findDuplicateNumber(ar));
let dup = findDuplicateNumber(ar);
console.log(sumDuplicateNumber(dup));*/

let a_max = [3, 'a', 'a', 'a', 2, 3, 'a', 'b', 3, 'a', 2, 4, 9, 3, 3, 3, 3];
const countFunct = (array, elt) => {
    return array.filter(item => item === elt).length;
}
const mostFrequentElt = array => {
    let cpt = 0;
    let time_repeated = 1 // au cas il ny a qu'un seul elt dans le tableau;
    let mf;
    array.forEach(item => {
        cpt = countFunct(array, item);
        if (cpt > time_repeated) {
            time_repeated = cpt;
            mf = item;
        }
    });
    return `Most frequent element: ${mf} and repeated ${time_repeated}`;
}
console.log(mostFrequentElt(a_max));