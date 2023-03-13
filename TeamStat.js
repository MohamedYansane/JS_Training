/**JAVASCRIPT: ARRAYS, LOOPS, AND OBJECTS Team Stats
     ** /
/**We want to create and extract information about your favorite sports team.
 * Basketball, soccer, tennis, or water polo, you pick it.
 * It 's your job to create data using the JavaScript data structures 
 * at your disposal: arrays, objects, etc.
 * Once created, you can manipulate these data structures as well as
 * gain insights from them.For example, you might want to get the total number
 * of games your team has played, or the average score  of all of their games.
 * 1 -  We want a data structure to store the infarmation about our team.
 *      Create an empty team abject.
 * 2 -  Our team has players, and the team plays games. We want to represent both of these.
 *      Add two properties to your team object.
 *      A _players property and a _games property that are both initialized to empty arrays.
 * 3 -  Populate the empty array that corresponds to the _players key in your team object with
 *      three actual players. They should be in the following format:
 *      {
             firstName 'Pablo',
            LastName: 'Sanchez',
            age: 11
            } 
            You should put each player on a new line to prevent the lime from getting long
    *  4 -  Populate the empty array that corresponds to the _games key in your team object with
    *      three actual games. They should be in the following format:
    *      {
            opponent 'Bronces',
            teamPoints: 42,
            opponentsPoints: 27
            
            }
    * 5 -   Create getter methods for your _players and _games keys.
    *       You don't need to create setter methods, because we don't want anyone to change
    *       the values saved to these keys.
    * 6 -   We want to add a new player to your team.
    *       Add a method addPlayer to your team object.
    *       This method should take in three parameters: firstName,LastName and age.
    *       It should create a player object, and add them to the team's players array.
    * 7 -   Below your team object, invoke your addPlayer method on the following players:
    *       Steph Curry Age 28 28. Lisa Leslie Age 44, and Bugs Bunny Age 76.
    * 8 -  The scorekeeper has some new information for us!
Add a similar method for recording game results called
addGame that:
• takes in an opponent's name,
• your team's points,
• the opponent's points,
• creates a game object,
• adds the game object to your team 's games array.
Print out the team's players to check they were all  properly added.
9 - Invoke your addGame method on three games and
print the team 's updated games array.*/
const team = {
    _players: [{
            firstName: 'Andrew',
            lastName: 'Wiggins',
            age: 29
        },
        {
            firstName: 'Klay',
            lastName: 'Thompson',
            age: 30
        },
        {
            firstName: 'Jordan',
            lastName: 'Poole',
            age: 29
        }
    ],
    _games: [{
            opponent: 'Bronces',
            teamPoints: 42,
            opponentsPoints: 27

        },
        {
            opponent: 'Denver Nuggets',
            teamPoints: 126,
            opponentsPoints: 106

        },
        {
            opponent: 'New Orleans Pelicans',
            teamPoints: 128,
            opponentsPoints: 107

        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName,
            lastName,
            age: age
        };
        this._players.push(player);

    },
    addGame(opponentName, teamPoint, opponentPoint) {
        const game = {
            opponentName,
            teamPoint,
            opponentPoint: opponentPoint
        };
        this._games.push(game);
    }

};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 74);
team.addGame('Atlanta', 101, 98);
for (player of team.players) {
    console.log(player);
}
team._games.map(item => console.log(item));
const sortTable = array => {
    return array.sort((a, b) => a - b);
}

const findDuplicateNumber = array => {
    sortTable(array);
    return Array.from(new Set(array));

}

let array = [11, 113, 12, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 4, 5, 6, 7, 8, 9, 10, 113];
let dish = ['mango', 'patate', 'banane'];
console.log(findDuplicateNumber(array));
console.log(array.length);
console.log(dish.length);
dish.forEach(element => {
    console.log(element);
});
/**Initialisation expression: Iterator = Highest value desired
 * Stop condition: When the iterator is less than your desire amount
 * Decrementation: Decrement
 */
for (let i = dish.length - 1; i >= 0; i--) {
    console.log(dish[i]);
}
/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here


process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function(input) {
    stdin_input += input;
});
process.stdin.on("end", function() {
    main(stdin_input);
});

function main(input) {
    input = input.split('\n');
    input.shift();
    input.forEach(n => {
        n = parseInt(n);
        let fact = BigInt(1);
        while (n) {
            fact = BigInt(fact) * BigInt(n);
            n--;
        }
        console.log(String(fact).replace('n', ''));
    });
}
let val = 5;
console.log(`Here is your input value ${val}`);