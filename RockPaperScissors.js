    /**
     * 1 - when the game start the using should be able to chose
     * rock , papper or scissor. Using const and arrow function
     * create a function named getUserChoice that take single parameter userInput
     * 2 - Since a user can pass in a parameter such as rock, paper or scissor with different capitalisation
     * begin by utilising  javascript toLowerCase() function to 
     * make the user input all  lower case
     * 3 -  inside a getUserChoice write an if else statement that make sure
     * that the userInput is either rock,paper or scissor  if it does return the userInput if not use console.log to print an error message 
     * 4 - test the function by calling it with valid or invalid input and printing
     * the result to the console.
     * you can delete if u know its work
     * 5 -  now need to have a computer make a choice 
     * create a function named getComputerChoice with no parameter. 
     * Inside it's block utilize Math.random() and Math.floor() to get a whole
     * number between 0 and 2 then depending on the number
     * return either rock, paper or scissor
     * 6 - Test the function by Calling it multiple times and printing the result to the console
     * you can delete when u know it works
     * 7 - Create a function named determineWinner that takes two parameters named userchoice and computer choice
     * this function will compare the two choices played and then return
     * if the human player won , lost or tied.
     * let deal with the condition the first withing the determineWinner function
     * write an if statement that checks if the userChoice parameter equal the
     * computerChoice parameter if no return a string that the game was a tie 
     * 8 - if the game is not tie you'll need to determine a winner
     * begin by writing an if statement that checks if the user choice is 'rock'
     * inside the if statement block write another if else statement
     * the inner if else should check the computer choice is 'paper'.
     * if so return a computer won .if not return the user won
     * 9 - Next get another if statement for this user choice is 'paper'
     * inside this if statement the computer choice must be either 'scissors' or 'rock' 
     * write a logic that will return a winner
     * 10 - Dont forget to test ur function  check off this task when
     * u're finished testing
     * 11 - Everything is set up now u need to start the game and log the results
     * create a function playGame. Inside the playGame function create a variable named userChoice
     * set equal to the result of calling getUserChoice , passing in either
     * 'rock', 'paper', or 'scissor' as an argument 
     * create another variable named computerChoice and set it to equal to the result of calling
     * getComputerChoice() 
     * under both of these variables use console.log to print them to the console
     * 12 - Make this game better by adding a secret cheat code if a user types 'bomb'
     * as their choice then make sure they win no matter what
     */
    const getUserChoice = userInput => {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb') {
            return userInput;
        } else {
            console.log('You should choose between : rock,papper or scissor');
        }
    }

    const getComputerChoice = () => {
        let choice = Math.floor(Math.random() * 3);
        switch (choice) {
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
                break;

        }

    }

    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'the game was tie';
        }

        if (userChoice === 'bomb') {
            return 'the user won!';
        }
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'the computer won!';
            } else {
                return 'the user won!';
            }

        }
        if (userChoice === 'paper') {
            if (computerChoice === 'scissor') {
                return 'the computer won!';
            } else {
                return 'the user won!';
            }

        }
        if (userChoice === 'scissor') {
            if (computerChoice === 'rock') {
                return 'the computer won!';
            } else {
                return 'the user won!';
            }

        }

    }
    const playGame = () => {

        let userChoice = getUserChoice('bomb');
        let computerChoice = getComputerChoice();
        //console.log(determineWinner(user,computer));
        console.log(`The choice of user was '${userChoice}' and the computer was '${computerChoice}' 
    so, ${determineWinner(userChoice,computerChoice)} `);
    }

    playGame();