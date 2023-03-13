// font  "editor.fontLigatures": false, c'est pour les fonction et operateurs logiques <= >=
//   "editor.fontFamily": "'cascadia code'"
let secretMessage = ['learning', 'is','not','about','what', 'you',
 'get', 'easily','the', 'first','time,','it','is','about','what',
'you','can','figure', 'out.','-2022','Mohamed ','Yansane','learn','javascript'];
// remove the last element of secretMessage
secretMessage.pop();
console.log(secretMessage.length);
// add to and programm to secretMessage
secretMessage.push('to','programm');
console.log(secretMessage.length);
// replace easily o right
for(let i = 0; i < secretMessage.length; ++i)
{
    if(secretMessage[i]=== 'easily')
    {
        secretMessage[i] = 'right';
    }
}
//2e methode the one asked to use an array methode
/*secretMessage.indexOf('easily'); // return 7
secretMessage[7] = 'right'*/
// remove the first element of an array
secretMessage.shift();
// add programming as the first element of an array
secretMessage.unshift('Programming');

/** use an array methode  to remove get, right, the, first, time and replace them
 * with the single know
 * they asked using an array method 
 * i used splice cause its allow me to remove elemen for define index
 * and stop to tell the number of element to remove then replace with a single string
*/

console.log(secretMessage);
console.log("\n \n");
secretMessage.splice(6,5,'know');
console.log(secretMessage);
/** one one line use console.log and .join to print the secret message */
console.log("\n \n");
console.log(secretMessage.join(' '));
