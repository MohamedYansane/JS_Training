const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 5;
            break;
        case 'thursday':
            return 5;
            break;
        case 'friday':
            return 6;
            break;
        case 'saturday':
            return 11;
            break;
        case 'sunday':
            return 7;
            break;
        default:
            return 'Enter a day between Monday and Sunday';
            break;
    }
}
const getActualSleepHours = () => {
    let sum = 0;
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    for (let index = 0; index < days.length; index++) {
        sum += getSleepHours(days[index]);
    }
    return sum;
}
const getActualSleepHours_ = () => {
    let sum = 0;
    let i = 0;
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    while (i <= days.length - 1) {
        sum += getSleepHours(days[i]);
        i++;
    }
    return sum;
}

const getIdealSleepHours = () => {
    let idealHours = 9;
    return idealHours *= 7;
}
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours)
        console.log('You got a perfect amount of sleep');
    else if (actualSleepHours > idealSleepHours)
        console.log('You got more sleep than needed');
    else
        console.log('You should get some rest');
}
calculateSleepDebt();
const getSleepHours__ = () => {
    return 8 + 7 + 5 + 5 + 6 + 11 + 7;
}
console.log(getSleepHours__());
const greetWorld = () => {
    return 'Hello, World';
}
console.log(greetWorld());
const canIvote = age => age >= 18 ? true : false;
console.log(canIvote(18));