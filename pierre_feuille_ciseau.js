const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'pierre' || userInput === 'feuille' || userInput === 'ciseau' || userInput === 'bomb') {
        return userInput;
    } else {
        return 'Choisissez entre pierre, feuille et ciseau';
    }
}
const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'pierre';
            break;
        case 1:
            return 'feuille';
            break;
        case 2:
            return 'ciseau';
            break;
        default:
            break;
    }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Le match etait tendu';
    }
    if (userChoice === 'bomb') {
        return 'Le joueur a gagné';
    }
    if (userChoice === 'feuille') {
        if (computerChoice === 'pierre') {
            return 'Le joueur a gagné';
        } else {
            return 'l\'ordinateur a gagné';
        }
    }
    if (userChoice === 'pierre') {
        if (computerChoice == 'ciseau') {
            return 'Le joueur a gagné';
        } else {
            return 'l\'ordinateur a gagné';
        }
    }
    if (userChoice === 'ciseau') {
        if (computerChoice === 'feuille') {
            return 'Le joueur a gagné';
        } else {
            return 'l\'ordinateur a gagné';
        }
    }

}
const playGame = () => {
    let userChoice = getUserChoice('pierre');
    let computerChoice = getComputerChoice();
    return `the user choice is ${userChoice} and the computer ${computerChoice}\npour le resultat : ${determineWinner(userChoice,computerChoice)}`;
}
console.log(playGame());