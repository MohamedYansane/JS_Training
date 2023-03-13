/* const btnIncrease = document.querySelector(".increase");
const btnReset = document.querySelector(".reset");
const btnDecrease = document.querySelector(".decrease"); */
const btnbox = document.querySelector(".btn-box");
let val = document.querySelector('.txt-val');
btnbox.addEventListener("click", function(e) {
    if (e.target.className === "increase") {
        val.innerHTML = parseInt(val.innerText) + 1;
    }
    if (e.target.className === "decrease") {
        val.innerHTML = parseInt(val.innerText) - 1;
    }
    if (e.target.className === "reset") {
        val.innerHTML = parseInt(0);
    }

})