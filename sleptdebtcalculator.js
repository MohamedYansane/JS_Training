/** Did you know girafe sleep 4.6 hour a day 
 * the first problem to solve is determing how many hours of sleep you
 * got each night of the week.
 *You can create a function that returns any given night's
 * number of hours of rest instead of writting seven different functions (one of each day of week)
 * lets write one function with parameter for the day
 * 1 - create a function getSleepHours with a single parameter named day
 * the function should accept a day as an argument and return the
 * number of hours u slept that night .
 * For instance if you got 8 hours of sleep on Monday night,
 * calling getSleepHours('monday') should return 8 
 * use an if else or switch
 * Now that you've written a function to get sleep hours for
 * each night ,we need to do three things:
 * Get the total sleep hours that u actually slept
 * Get the ideal sleep hours that u prefer
 * calculate the sleep debt if any
 * To get the total sleep hours that u actually slept,
 * create a new function named getActualSleepHours that 
 * takes no parameter
 *  5 - Inside the getActualSleepHours() function, call the
 * getSleepHours() function for each day of the week
 * Add the result together and return the sum using an implicit return
 * 6 - To get the ideal sleep hours that u prefer, create a function named
 * getIdealSleepHours() with no parameters.
 * Inside the function declare a variable named idealHours sets its to your ideal
 * hours per night. Then return the idealhours multiplied by 7.
 * you'll want to multiply by 7 to get the total hours you prefer per week
 * 7 - Now that you can get the actual sleep hours and the ideal sleep hours , 
 * it's time to calculate sleep debt
 * Create a function calculateSleepDebt() with no parameters.
 * Inside of its block, create a variable name actualSleepHours set equal to the
 * getActualSleepHours() function call then create another
 * variable named idealSleepHours, set equal to the getIdealSleepHours
 * function call.
 * Now that u have actualSleepHours and idealSleepHours u can write a few if/else
 * statements to output the result to the console.
 * the function should fulfill this logic:
 * if actual sleep equals ideal sleep, log to the console
 * that the user got the perfect amount of sleep
 * if the actual sleep is greater than the ideal sleep log 
 * to the console that the user got more sleep than needed
 * if the actual sleep is less than the ideal sleep,log
 * to the console that the user should get some rest
 * 12 - for extra pratice, try these:
 * getActualSleepHours() coulbe implemented without calling getSleepHours()
 * use litteral numbers and + operator to rewrite getActualSleepHours()
 * it should still return the total actual hours slept in the week
 */
const getSleepHours = day => {
    switch (day.toLowerCase()) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 5;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 7;
            break;
        case 'friday':
            return 4;
            break;
        case 'saturday':
            return 11;
            break;
        case 'sunday':
            return 9;
            break;
        default:
            return 'enter a correct day from monday to sunday';
            break;

    }

}

const getActualSleepHours = () => {
    let ar = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let sum = 0;
    let i = 0;
    while (i <= ar.length - 1) {
        sum += getSleepHours(ar[i]);
        i++;
    }
    return sum;
}

const getIdealSleepHours = () => {
    let idealHours = 6;
    return idealHours *= 7;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours)
        console.log('You got the perfect amount of sleep');
    else if (actualSleepHours > idealSleepHours)
        console.log('You got more sleep than needed');
    else
        console.log('You should get some rest');
}

calculateSleepDebt();

const getActualSleepHours_ = () => 8 + 5 + 6 + 7 + 4 + 11 + 9;
console.log(`the actual sleep hours is: ${getActualSleepHours_()}`);