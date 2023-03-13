/* 
Dans un tableau array retour le second largest number
Exemple [3,6,6,5,5,4,9] secondLargest = 6 */
const getSecondLargest = s => {
    let arr_set = new Set(s); // je me debarase des valeurs dupliquees et trier
    let ar = Array.from(arr_set).sort((a, b) => a - b);
    let largest = ar[0];
    let indxLargest;
    for (let i = 0; i < ar.length; ++i) {
        if (ar[i] > largest)
            indxLargest = i; // je recupere l'index du plus grand

    }
    return ar[indxLargest - 1];
}

const array = [10, 5, 2, 3, 8, 7];
console.log(`The second largest is: ${getSecondLargest(array)}`);

// 2e Methode
/* 
Dans un tableau array retour le second largest number
Exemple [3,6,6,5,5,4,9] secondLargest = 6 */

const secondLargest = array => {
    let largest = 0;
    let index;
    let ar_not_duplicated = Array.from(new Set(array)).sort((a, b) => a - b);
    for (let i = 0; i < ar_not_duplicated.length; ++i) {
        if (ar_not_duplicated[i] > largest) {
            largest = ar_not_duplicated[i];
            index = i;
        }
    }
    return ar_not_duplicated[index - 1];

}
let a = [3, 6, 6, 5, 5, 4, 9, 9, 9];
console.log(secondLargest(a));

/**You are in charge of the cake for a child's birthday.
 * You have decided the cake will have one candle for each year of their total age.
 * They will only be able to blow out the tallest of the candles.
 * Count how many candles are tallest.
 * Example : candles =[4,4,1,1,2]
 * The maximum height candles are 4 units high. There are 2 of them, so return 2.*/
let cake = [3, 6, 6, 5, 5, 4, 9, 9, 9];
const birthdayCakeCandles = candles => {
    let tallest = 0;
    candles.forEach(item => {
        if (item > tallest) {
            tallest = item;
        }
    });
    return candles.filter(candidate => candidate === tallest).length;

};

console.log("Number of tallest: " + birthdayCakeCandles(cake));