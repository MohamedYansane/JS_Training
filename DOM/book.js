/** DOM 
 * clear();// pour nettoyer la console
 * et une fois fini d'ecrire le code je sauvegarde
 * et je me dirige vers la console de mon navigateur
 * console.log(Array.isArray(titles)); will return true or false
 * 
 * ById
 * let quote = document.getElementById("quote");
 * 
 * ByClassName or Tag
 * let titles = document.getElementsByClassName('title');
 * Loop from HTMLCOLLECTIONS convert htmlcollections into array
 * Array.from(titles).forEach(t => console.log(t));
 * QUERY SELECTOR
 * The querySelector() method returns the first element that matches a CSS selector.
 * Exemple: 
 * document.querySelector("p").style.backgroundColor = "red";
 * Get the first element with class="example":
 * document.querySelector(".example");
 * we ca color on it => document.querySelector(".example").style.backgroundColor = "red";
 * To return all matches (not only the first), use the querySelectorAll() instead.
 * Notice the querySelectorAll() method return a static NodeList
 * Exemple:
 * const nodeList = document.querySelectorAll(".example");
 * for (let i = 0; i < nodeList.length; i++) {
 *      nodeList[i].style.backgroundColor = "red";
 *  }
 */
let x = document.getElementById("book");
let w = window.innerWidth;
x.innerHTML = `The size of the screen is: ${w}`;
let container = document.querySelector("#wrapper");
console.log(container);
/** Exercises
 * Get the second book name
 * Get the third book name
 * Get all book names i'm gonna user querySelectorALL
 * and to print nodeList element we can use forEach method
 * Answer
 * const lf = document.querySelector('#book-list .list-book:nth-child(2) .quote');
 * console.log(`the value of lf is below`);
 * console.log(lf);
 * console.log("All quotes after traversing\n")
 * let livre = document.querySelector('.sub-container li:nth-child(3) .quote');
 * let all_quotes = document.querySelectorAll('.sub-container li .quote');
 * all_quotes.forEach(quote => {
 *  console.log(quote)
 * });
 * 
 * 
 * 
 * 

 */









let t = document.getElementById('txt');
/*const changeText = (e) => {
    e.target.innerHTML = 'I\'ve changed ';
}*/
t.addEventListener("click", function(e) {
    console.log(e.target);
    e.target.innerHTML = "Event Succeed ";

});
console.log("\n");
let text = t.textContent;
console.log(`The text inside span with id='txt' is: ${text}`);

let dramouss = document.querySelector(".sub-container li:nth-child(2) .quote");

dramouss.innerHTML = `${dramouss.innerText} Of Camara Laye`;
/**Rajouter du contenu a notre element head-banner en faisant un append
 * let head = document.querySelector("#head-banner");
 * head.innerHTML += "<h2> J'ai reussi a change le contenu div en h2 </h2>";
 * After that we gonna get the node type of quote the enemy , the name of the element and the check if it has a child or not
 * After we gonna grab the child Nodes of our element we selected if it has or not.
 * the cloneNode(true) will return the elt + the child Nodes of our element when we pass false:
 * It will only return the element

 */

/** let txt = document.querySelector(".footer .txt-add ");
 * 
 */
const stopEventDefault = (e) => {
    e.preventDefault();
}
btnNode = document.getElementById('btnNode');
btnNode.addEventListener('click', stopEventDefault);
const getTypeofNodeandName = () => {

    let enemy = document.querySelector(".ul-book li:nth-child(4) .quote");
    enemy.innerHTML = `Type: ${enemy.nodeType} Name: ${enemy.nodeName} Child: ${enemy.hasChildNodes()}`;
    console.log("the child Nodes of our elements precisely the book container");
    const book = document.querySelector(".sub-container");
    const grabChild = book.cloneNode(true);
    console.log(grabChild);


}

/**
 * const bookList = document.querySelector("#book-list");
 * console.log("The parentNode of the book list is: see below");
 * console.log(bookList.parentNode);
 * console.log("The parent element of the parentElement of bookList is: ", bookList.parentElement.parentElement)
 * //console.log(bookList.parentElement); it will be the same result as parentNode
 * console.log(bookList.childNodes);
 * console.log("ChildNodes add a line break inside of our nodeList elt which is text is data part is slash n: ", bookList.parentElement.childNodes);
 * console.log("To avoid a line break we write like that instead: ", bookList.children);
 * console.log(bookList.parentNode.children);
 * const siblingInBookContainer = document.querySelector(".book-container");
 * console.log("The next sibling gonna return a line break like that: ", siblingInBookContainer.nextSibling);
 * console.log('The next element sibling is: ', siblingInBookContainer.nextElementSibling);
 * 
 * Exercise
 *  Grab the text Bookorohama using previousElementSibling with siblingInBookContainer
 *  Add to the Bookorohama of Mohamed Yansane
 * Ansxer
 * const siblingInBookContainer = document.querySelector(".book-container");
 * console.log(siblingInBookContainer.previousElementSibling.querySelector("h1").textContent);
 * const bookoroma = siblingInBookContainer.previousElementSibling.querySelector("h1");
 * bookoroma.innerHTML+=" Of Mohamed Yansane ";
 */
const siblingInBookContainer = document.querySelector(".book-container");
const bookoroma = siblingInBookContainer.previousElementSibling.querySelector("h1");
bookoroma.innerHTML += " of Mohamed Yansane ";

/***DOM EVENTS 
 * Dans title je place dans le book container de la section
 * et une fois positionné j'essaie de selection seulement la partie h2
 * target returns the element that triggered the event
 * titleEvent is a callback function cause i passed it as a parameter to my addEventListener*
 * Another way to create a callback function on event look for book exemple
 * Exercise
 * Check if the user click on control key or not in title Eventif its true return he clicked or he didn't
 */

let title = document.querySelector(".book-container h1");
const titleEvent = (e) => {
    console.log(e.target);
    console.log(e); //me permet de detailler les actions c'est tres important
    console.log(e.ctrlKey ? "he clicked" : "he didn't");
}
title.addEventListener('click', titleEvent);
const book = document.querySelector("#book");
book.addEventListener('click', function(e) {
    console.log("The element that triggered the event is below.");
    console.log(e.target);
    console.log(e);
});