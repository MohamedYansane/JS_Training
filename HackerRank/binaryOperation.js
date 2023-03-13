const binaryOperation = (a, b) => {
    // je verifie si mon operation binaire est exacte
    a = parseInt(a, 2);
    b = parseInt(b, 2);
    let r = eval(a + b);
    return r.toString(2);
}
console.log(binaryOperation(11011, 1000));