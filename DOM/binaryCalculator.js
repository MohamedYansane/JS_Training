let btnclr = document.querySelector("#btnClr");
let btneql = document.querySelector("#btnEql");
let indxOperator;
let foperator = document.forms[1];
let fbinary = document.forms[0];
let resTable = document.querySelector("#res");
const getNumber = (e) => {
    e.preventDefault();
    if (e.target.id === "btn0" || e.target.id === "btn1") {
        resTable.innerText += e.target.innerText;
        //console.log(resTable.textContent.length); // ca inclura les espaces l'approprie est innerText
    }
}
const getOperator = (e) => {
    e.preventDefault();
    switch (e.target.id) {
        case "btnSum":

            resTable.innerText += e.target.innerText;

            indxOperator = resTable.innerText.indexOf("+");

            console.log("the value of the index operator is: " + indxOperator);
            break;
        case "btnMul":
            resTable.innerText += e.target.innerText;
            indxOperator = resTable.innerText.indexOf("*");
            console.log("the value of the index operator is: " + indxOperator);
            break;
        case "btnSub":
            resTable.innerText += e.target.innerText;
            indxOperator = resTable.innerText.indexOf("-");
            console.log("the value of the index operator is: " + indxOperator);
            break;
        case "btnDiv":
            resTable.innerText += e.target.innerText;
            indxOperator = resTable.innerText.indexOf("/");
            console.log("the value of the index operator is: " + indxOperator);
            break;

    }
}

fbinary.addEventListener("click", getNumber);
foperator.addEventListener("click", getOperator);
btnclr.addEventListener("click", function(e) { resTable.innerText = ""; });

btneql.addEventListener("click", function(e) {
    let a;
    let b;
    let res;
    console.log("the value of the index operator is: " + indxOperator);
    // indxOperator = resTable.innerText.indexOf("+");
    a = resTable.innerText.slice(0, indxOperator);
    b = resTable.innerText.substring(indxOperator + 1);
    a = parseInt(a, 2)
    b = parseInt(b, 2);

    console.log("type of a is: " + typeof a);
    switch (resTable.innerText[indxOperator]) {
        case "+":
            res = eval(a + b);
            resTable.innerText = res.toString(2);
            break;
        case "-":
            res = eval(a - b);
            resTable.innerText = res.toString(2);
            console.log("The sign: " + resTable.innerText[indxOperator]);
            break;
        case "*":
            res = eval(a * b);
            resTable.innerText = res.toString(2);
            break;
        case "/":
            res = eval(a / b);
            resTable.innerText = res.toString(2);
            break;
    }
    console.log(`the value of a is ${a} and b is ${b}`);

});