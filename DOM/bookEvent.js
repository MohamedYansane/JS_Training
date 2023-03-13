/**DOM EVENTS
 * to add an event on our deleteBtn we've to loop through all btns
 * because deleteBtn gonna return a nodeList[4]
 * dans le forEach je peux dire dans mon callback j'ai passé deux 
 * argument le btn fe type node et l'index de chaque btn
 * 
 * Exercice
 * 1- Add an EventListener when we click on a button to print i'm button followed by its index
 *    using function inside an EventListener
 * 2- When we click a delete btn we wanna remove the book
 *    You've to create a  function called deleteBook
 * 
 * Nb:target returns the element that triggered the event and 
 * e me permet de detailler les actions c'est tres important
 * comme par Exemple s'il y'a eu un ctrlKey sur mon element je peux le savoir grace a cela etc
 * 3 - Go to your html page and create a link and change its beheaviour using Event
 * Nb: the preventDefault Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
 */

/*let deleteBtn = document.querySelectorAll(".sub-container li .delete");

const deleteBook = () => {
    deleteBtn.forEach(btn => {
        btn.addEventListener("click", function(e) {
            const li = e.target.parentNode;
            console.log("the parent Node is: ", li);
            const liParent = li.parentNode;
            console.log("the parent Node of li is: ", liParent);
            //maintenant je peux supprimer cette li de mon ul
            liParent.removeChild(li);
            alert("Suppression effectué avec success");

        });
    });
}
deleteBtn.forEach((btn, i) => {
    btn.addEventListener("mousedown", function(e) {
        console.log("I'm btn: " + i);
        console.log(e);

    });
    btn.addEventListener("click", deleteBook)

});
const redirectLink = () => {
    const link = document.querySelector(".head-container a");
    link.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("Navigation to " + e.target.textContent, "has been prevented");
    });
}
*/

/** @type {*} 
 *
 *  Best DOM EVENTS code more simple than the first one at the top of the page
 * 
const deleteBook = (e) => {
    let li = e.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
}
let deleteBtn = document.querySelectorAll(".ul-book .delete");
deleteBtn.forEach((btn, i) => {
    btn.addEventListener("click", function(e) {
        console.log("I'm btn: " + i);
    });
});
// suppression
deleteBtn.forEach(btn => {
    btn.addEventListener("mousedown", deleteBook);
});

*/
const link = document.querySelector(".head-container a");
link.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Navigation to " + e.target.textContent, "has been prevented");
});
/**Event bubbling here we gonna attached our suppression to the ul element
 * cause it's the best way to delete so even if we add another book we can suppress it later
 * the first one the deleteBtn were attached to the span so when we add a new book it will be impossible to deklete
 * that book and if we have more than one book added it will be difficult so that why we're using event bublle
 * Nb: for the attachment to the ul the code will be complexe(i'm referring to the time complexity) but for better understanding go to my book and read the definition and remarque
 * nb: Apres avoir rattaché notre event à ul nimporte quelle element qu'on clickera dans le ul :
 * renverra un bubble à sa hierarchie(ul).
 * Exemple: Dans le ul on a li et inside li on deux span un pour le nom du live et l'autre pour le button
 * donc lorsquon clique le li le e.target retournera le li si c'est le text il retournera le span du text et idem pour le span du button 
 * Result
    let bookList = document.querySelector(".sub-container ul");
    const deletBook = (e) => {
        if (e.target.className === 'btn-primary delete') {
            const li = e.target.parentNode;
            bookList.removeChild(li);
        }
    }
    bookList.addEventListener("click", deletBook);

 */

//Time to delete a book

const bookList = document.querySelector("#book-list ul");

bookList.addEventListener("click", function(e) {
    if (e.target.className === 'btn-primary delete') {
        const li = e.target.parentNode;
        bookList.removeChild(li);
    }
});
let f = document.forms[2]; // on peut passer l'id a la place de l'index document.forms['add-book']
/**
 * Interacting with forms from that we gonna add a new book
 * We've to create our elements we've li and inside we've two span elements
 * the two span are the childNodes of li so we gonna append them in our li
 *
 * @param {*} e
 */
const ul = document.querySelector("#ulbook");
f.addEventListener("submit", function(e) {
    e.preventDefault();
    // Grab the input of any Value we want from the form
    let valInput = f.querySelector('input[type="text"]');

    // creating the element
    const li = document.createElement("li");
    const spanBookName = document.createElement("span");
    const spanDelete = document.createElement("span");
    // si c'est un truthy on ajoute sinon on fait un alert
    if (valInput.value) {

        // append the element
        li.appendChild(spanBookName); // its gonna append to the end of the li
        li.appendChild(spanDelete); // its gonna append to the end too so the bookName will be the first childNodes
        bookList.appendChild(li);
        spanDelete.textContent = "Delete";
        console.log("its truthy", valInput.value);
        //Given a class name
        spanDelete.className = "btn-primary delete";
        li.className = "list-book";
        //spanBookName.className = "quote";
        // we can give also className using the classList.add
        spanBookName.classList.add("quote");

    } else {
        alert("pLease enter a book name");
    }
    // using ternaire
    valInput = valInput.value ? valInput.value : "there's nothing inside add input form";
    console.log(valInput);

});

/*
let forms = document.forms;
console.log("forms");
forms = Array.from(forms).forEach((item, index) => {
    console.log(item.id + ' ' + index);
});*/


/*f = Array.from(f).forEach(elt => {
    elt.addEventListener("click", function(e) {
        if (e.target.className === 'btn-primary btnadd') {
            e.preventDefault();
            let txtAdd = document.getElementById("txtAdd");
            txtAdd = txtAdd.value ? txtAdd.value : "there's nothing inside";
            console.log(txtAdd);
        }
    });

});*/
const addBook = (e) => {
    alert("Hi do u wanna add a book");
    let bookUl = document.querySelector(".ul-book");

}
let btn_add = document.getElementById("addbook");
/*btn_add.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.ctrlKey === true)
        console.log(e);
    else
        console.log("not triggered");
        console.log("not triggered");
});*/
let s = document.getElementById("txt-search");
console.log(s.value);

/** Styles and Classes */
const last_li = document.querySelector("li:last-child");
last_li.style.color = "red";
//last_li.style.marginTop = "60px";
// add another class to our last li element
last_li.className += "  last_li";

/**Attributes using JavaScript (exemples of attributes: class, id, href)
 * var enemi = document.querySelector("li:last-child ");
 * undefined
 * enemi
 * output
 * <li class=​"list-book  last_li" style=​"color:​ red;​">​…​</li>​<span class=​"quote">​The enemy.​</span>​<span class=​"btn-primary delete">​Delete​</span>​</li> 
 *  enemi.getAttribute("class"); returns the attribute name
 * output
 * 'list-book  last_li'
 * enemi.setAttribute("class", "enemi_class") set or change the attribute name;
 * undefined
 * enemi
 * output
 * <li class=​"enemi_class" style=​"color:​ red;​">​…​</li>​
 * enemi.hasAttribute("id") check if the attribute id exist or not return a boolean;
 * false
 * enemi.hasAttribute("class");
 * true
 */
/**
 * var enemi = document.querySelector("li:last-child .quote");
 * undefined
 * enemi
 * <span class=​"quote">​Type: 1 Name: SPAN Child: true​</span>​
 * enemi.getAttribute("class");
 * 'quote'
 * enemi.hasAttribute("id");
 * false
 * enemi.setAttribute("class", "enemi_class");
 * undefined
 * enemi
 * <span class=​"enemi_class">​Type: 1 Name: SPAN Child: true​</span>​
 * enemi.removeAttribute("class");
 * undefined
 * enemi
 * <span>​Type: 1 Name: SPAN Child: true​</span>​ Attribute
 * 
 */
// Hide book
/** 
 * First of all we gonna grab the hideBox element (input) with id = hide
 * 
 */
const hideBox = f.querySelector('input[type="checkbox"]');
hideBox.addEventListener('change', function(e) {
    if (e.target.checked)
        bookList.style.display = 'none';
    else
        bookList.style.display = 'initial';
});

//search by filtering we gonna use the keyup event the keyup Event its when we press or click a button and release it

/** 
 * first of all i've to select  the input in order to add a keyup event
 * second grab all li 
 * third try to position on the span and get its textcontent 
 * fourth compare the span textcontent to the input value in comparing their index
 * fifth if the element exist display it in block else display none
 * @type {*} */
let frmsearch = document.forms['search-form'];
let frmBookList = document.forms['book-list'];
let searchBar = frmsearch.querySelector('input');
searchBar.addEventListener('keyup', function(e) {
    let book_li = frmBookList.getElementsByTagName('li');
    let input_val = e.target.value.toLowerCase();
    console.log(input_val);
    Array.from(book_li).forEach(book => {
        let book_name = book.firstElementChild.textContent.toLowerCase();
        if (book_name.indexOf(input_val) !== -1)
            book.style.display = 'block';
        else
            book.style.display = 'none';
    });

});

const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
tabs.addEventListener("click", function(e) {
    // je verifie lors du click de ses children est un li
    // si c'est le cas il me passe son dataset.target
    // si je ne fait pas le tolowercase la valeur du e.target serait en cpitalisation
    if (e.target.tagName.toLowerCase() === "li") {
        const data = e.target.dataset.target;
        //alert(`You clicked on ${data}`);
        // il est temps pour regler le cas des panels
        panels.forEach(panel => {
            if (panel.id === data.slice(1)) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        })
    }
});