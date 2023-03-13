//Le DomContentLoaded Event  permet de ptienter que mon Dom soit chargé
// et il est tres importnt de l'utiliser là meme si le script 
// est en haut de la page mes methodes pourront marcher
document.addEventListener('DOMContentLoaded', function(param) {

    //Size of the screen

    let size = window.innerWidth;
    let span = document.querySelector(".size-screen");
    span.innerHTML = size;

    //Event succeed

    let succeed = document.querySelector(".frm-book li:first-child span");
    succeed.addEventListener("click", function(e) {
        e.target.innerHTML = "Event Succeed";
    });
    let frmbookUl = document.querySelector(".frm-book ul")

    // add a book nb on ne passe que l'id ou l'index pas le nom de l'attribut class

    let frmAddbook = document.forms["frm-add-book"];
    const addBook = (e) => {
        e.preventDefault();
        let txt_input = frmAddbook.querySelector('input[type="text"]');
        let valInput = txt_input.value != " " && txt_input.value ? txt_input.value : alert("Enter the name of the book");
        if (valInput) {
            let li = document.createElement("li");
            let span = document.createElement("span");
            let btn = document.createElement("button");
            li.appendChild(span);
            li.appendChild(btn);
            btn.className = "btn-delete";
            btn.innerHTML = "Delete";
            span.innerHTML = valInput;
            frmbookUl.appendChild(li);
        }


    }

    frmAddbook.addEventListener('submit', addBook);

    //Delete a book

    const deleteBook = (e) => {
        e.preventDefault();
        if (e.target.className === "btn-delete") {
            let li = e.target.parentNode;
            frmbookUl.removeChild(li);
        }
    }
    frmbookUl.addEventListener("click", deleteBook);
    // hide all books
    let hideBox = document.querySelector("#hide");
    hideBox.addEventListener("change", function(e) {
        e.target.checked ? frmbookUl.style.display = "none" : frmbookUl.style.display = "initial";
    });

    //search by filtering we gonna use the keyup event the keyup Event its when we press or click a button and release it
    let frmSearch = document.forms["frm-search"];

    /** 
     * first of all i've to select  the input in order to add a keyup event
     * second grab all li 
     * third try to position on the span and get its textcontent 
     * fourth compare the span textcontent to the input value in comparing their index
     * fifth if the element exist display it in block else display none
     * @type {*} */
    const search_bar = frmSearch.querySelector('input');
    search_bar.addEventListener("keyup", function(e) {
        let li_book = frmbookUl.getElementsByTagName('li'); // it returns a html collection i'vr to convert it to an array to loop through using the foreach
        let inputValue = e.target.value.toLowerCase();
        Array.from(li_book).forEach(book => {
            const bookName = book.firstElementChild.textContent; // it's gonna return the text content of a span 
            if (bookName.toLocaleLowerCase().indexOf(inputValue) != -1)
                book.style.display = 'block';
            else
                book.style.display = 'none';

        });


    });
    // Tab content
    const tabs = document.querySelector(".tabs");
    let panels = document.querySelectorAll(".panel");
    tabs.addEventListener("click", function(e) {
        if (e.target.tagName.toLocaleLowerCase() === "li") {
            const data_target = e.target.dataset.target;
            panels.forEach(panel => {
                if (panel.id === data_target.slice(1)) {
                    panel.classList.add("active");
                } else {
                    panel.classList.remove("active");
                }
            });

        }


    })
















    /*tabs.addEventListener("click", (e) => {
        if (e.target.tagName === "li") {
            //let dataset returns a data attribute in our case data-target
            // now we've to get it data attribute
            //if we notice we wrote dataset.target cause in our html it data-target
            //if it was data-cible we would've written dataset.cible
            let data = document.querySelector(e.target.dataset.target);
            panel.forEach(p => {
                if (p.id === data) {
                    alert(data);
                }
            })
        }
    })*/
});