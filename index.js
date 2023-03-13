const area = (w,h) =>{
    return w * h;
    
}
console.log(area(3,7));
console.log('Hello');
// verifie si l'user est truthy si oui retourne luser ou affiche stranger
var user = '';
user? console.log(`Hello ${user}`) : console.log(`Hello stranger`);
//print number for 0 to 5 but skipped  4

/*for(let i = 0; i <=5; ++i)
{
    if(i==4)
        continue;
    console.log(i);
}*/

for(let counter = 5 ; counter >=1 ; --counter)
{
    console.log(counter);
}

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);