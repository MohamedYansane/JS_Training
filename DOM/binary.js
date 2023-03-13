let res = document.querySelector("#res");
let btns = document.querySelector("#btns");
btns.addEventListener("click", function(e) {
    if (e.target.id === "btnEql") {
        // je vais devoir utiliser les regex pour separer les digits des symboles de res
        const [a, operator, b] = res.innerText.split(/\b/);
        let result = binaryOperation(a, operator, b);
        res.innerText = result;
    } else if (e.target.id === "btnClr") {
        res.innerText = "";
    } else {
        res.innerText += e.target.innerText;
    }
})

const binaryOperation = (a, operator, b) => {
    // je verifie si mon operation binaire est exacte
    let r;
    a = parseInt(a, 2);
    b = parseInt(b, 2);
    switch (operator) {
        case "+":
            r = eval(a + b);
            break;
        case "-":
            r = eval(a - b);
            break;
        case "*":
            r = eval(a * b);
            break;
        case "/":
            r = Math.floor(eval(a + b));
            break;
        default:
            break;
    }

    return r.toString(2);
}