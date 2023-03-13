const convertDecimalToBinary = n => {
    let bd = [];
    let remainder;
    while (n > 0) {
        remainder = n % 2;
        n = parseInt(n / 2);
        bd.unshift(remainder); // insert elt at the beginning of the list

    }
    return bd.join('');
}
console.log(convertDecimalToBinary(4));
console.log(1 % 2);