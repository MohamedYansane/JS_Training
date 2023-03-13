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
 */

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
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



//let ppcm_pgcd = getTotalX([2, 4], [16, 32, 96]);
//console.log(ppcm_pgcd);

const getTotalX = (a, b) => {
    let ppcm_pgcd = gcd_lcm(a, b);
    let lcm = ppcm_pgcd[0];
    let gcd = ppcm_pgcd[1];
    let m = [];
    let i = 1;
    while (lcm <= gcd) {
        lcm *= i;
        if (gcd % lcm === 0) {
            m.push(lcm);

        }
        i++;
    }
    return m.length + 1;
}
console.log(`the get total is ${getTotalX([2, 4], [16, 32, 96])}`);