let bookoroma = document.querySelector("#page-banner");
bookoroma.childNodes.forEach(elt => {
    if (elt.nodeName === "H1") {
        elt.innerHTML += " Of Yansane";
    }
});
/**
 * Delete Book function
 *
 * @param {*} e
 */
const deleteBook = (e) => {
    if (e.target.className === "delete") {
        const li = e.target.parentNode;
        const parentLi = li.parentNode;
        parentLi.removeChild(li);
        alert("Suppression reussi avec success");
    }
}
const bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);
/** @type {*} */
let formsAdd = document.forms["add-book"];
/**
 * Interacting with forms from that we gonna add a new book
 * We've to create our elements we've li and inside we've two span elements
 * the two span are the childNodes of li so we gonna append them in our li
 *
 * @param {*} e
 */

const addBook = (e) => {
        e.preventDefault();
        let text = formsAdd[0]; // there's another way to select this let create a variable  t
        let tInp = formsAdd.querySelector('input[type=text]');
        //const isValid = tInp.value ? tInp.value : "there's no value";
        // cette partie c'est une operation ternaire il sera tjrs truthy cr le else retourne un string ("there's no value")
        //pour que le if marche le ternaire la partie else doit retourner u falsy
        const isValid = tInp.value ? tInp.value : "";
        if (isValid) {
            // creating elements
            let li = document.createElement("li");
            let bookName = document.createElement("span");
            let deleteBook = document.createElement("span");
            bookName.innerHTML = isValid;
            //given them their attributes
            // bookName.className = "name";
            //deleteBook.className = "delete";
            //appending li child elements
            li.appendChild(bookName);
            li.appendChild(deleteBook);
            bookList.appendChild(li);

        } else {
            alert("Please enter a book name");
        }
    }
    // we're interacting with forms so the event must be submit
    //const btnAdd = formsAdd.querySelector('button[class="btnAdd"');
    //btnAdd.addEventListener("click", addBook);
    //btnAdd = formsAdd[2] instead of using btnAdd as event we can directly use formsAdd
formsAdd.addEventListener("submit", addBook);