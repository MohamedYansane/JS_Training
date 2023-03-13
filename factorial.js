/**
 *
 *
 * @param {*} n
 * @return {*} 
 */
const factorial = n => {
    return n > 1 ? n * factorial(n - 1) : 1;
}
const fact = n => {
    if (n > 1)
        n = n * fact(n - 1);
    else
        n = 1;
    return n;

}
console.log(`le factoriel de 6  est: ${fact(6)}`);