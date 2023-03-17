/** 
 * 1 - Create a function called fetchPokemon that returns
 * a promise that resolves with the value :
 * { data : {name: "Pickachu", power: 20}} after 2s
 * 
 * 2 - print out program starting
 * 
 * 3 - Create an async function that uses await to
 * wait for the data to comeback from the "fetchPokemon"
 * then log out the data
 * 
 * 4- Call the async function you created 
 * 
 * 5- log out the program complete
 */

const fetchPokemon = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: { name: "Pickachu", power: 20 } });
        }, 2000);
    })
}

console.log("Program starting...");

const fetchPokemonData = async() => {
    const data = await fetchPokemon();
    console.log(data);
}
fetchPokemonData();
console.log("program completed!");
/*
//That's was my first approach
let isTrue = true;
const fetchPokemon = () => {
    return new Promise((resolve, reject) => {
        let val = { data: { name: "Pickachu", power: 20 } };
        isTrue ? setTimeout(() => { resolve(val) }, 2000) : reject(console.log("no data so it's rejected"));
    })
}
console.log("program starting ...");

const getData = async() => {
    try {
        await fetchPokemon();
    } catch (error) {
        console.log("there's is rejection", error);
    }
}

getData(); */