let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btns = document.querySelector("#btns");

let third = btn3.innerHTML;
let first = btn1.innerHTML;
let fourth = btn4.innerHTML;
let seven = btn7.innerHTML;
let eight = btn8.innerHTML;
let nine = btn9.innerHTML;
let six = btn6.innerHTML;
let second = btn2.innerHTML;

let matrix = Array.from(btns.children);
matrix = [
    [matrix[0], matrix[1], matrix[2]],
    [matrix[3], matrix[4], matrix[5]],
    [matrix[6], matrix[7], matrix[8]]
];


const rotate = e => {
    if (e.target.id === "btn5") {
        let first_row = matrix[0];
        let second_row = matrix[1];
        let third_row = matrix[2];
        first_row.forEach((btn, i) => {

            if (i === 0)
                btn.innerHTML = fourth; // btn4.innerHTML;
            if (i === 1)
                btn.innerHTML = first; // btn1.innerHTML;
            if (i === 2)
                btn.innerHTML = second; //btn2.innherHTML;

        });

        second_row.forEach((btn, i) => {
            if (i === 0)
                btn.innerHTML = seven; // btn4.innerHTML;
            if (i === 1)
                btn.innerHTML = btn5.innerHTML; // btn1.innerHTML;
            if (i === 2)
                btn.innerHTML = third;
        });

        third_row.forEach((btn, i) => {
            if (i === 0)
                btn.innerHTML = eight; // btn4.innerHTML;
            if (i === 1)
                btn.innerHTML = nine; // btn1.innerHTML;
            if (i === 2)
                btn.innerHTML = six;

        });
        third = btn3.innerHTML;
        first = btn1.innerHTML;
        fourth = btn4.innerHTML;
        seven = btn7.innerHTML;
        eight = btn8.innerHTML;
        nine = btn9.innerHTML;
        six = btn6.innerHTML;
        second = btn2.innerHTML;
    }

}

btns.addEventListener("click", rotate);