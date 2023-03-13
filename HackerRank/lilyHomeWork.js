const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    // return `the value of a and b after swapping: ${a}, ${b}`;
}
const bubbleSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                //swap(arr, j, j + 1); ca marche
            }
        }

    }
    return arr;
}
let bg = [6, 31415926535897932384626433832795, 1, 3, 10, 3, 5];
console.log(`the sorted of bg ${bubbleSort(bg)}`);
const reverse_sort = arr => {
    for (let i = 1; i < arr.length; ++i) {
        for (let j = arr.length - 1; j >= 0; --j) {
            if (arr[j] < arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

/*console.log(lilysHomework([2, 3, 4]));
let arr = [3, 4, 2, 5, 1];
console.log(bubbleSort(arr));
console.log(reverse_sorted(arr));*/




/**
 * J'ai pu resoudre le bug de l'exercice de lili en passant en argument la copie du tableau
 *
 * @param {*} arr
 * @return {*} 
 */

let ar = [3, 4, 2, 5, 1];


const cptsort = arr => {
    let cpt1 = 0;
    let cpyarr = [...arr];
    console.log('arr in cptsort: ', arr);
    let sorted = bubbleSort(arr);
    for (let i = 0; i < cpyarr.length; i++) {
        if (cpyarr[i] != sorted[i]) {
            swap(cpyarr, sorted.indexOf(cpyarr[i]), i);
            console.log(`index of ${cpyarr[i]}  in sorted is => ${sorted.indexOf(cpyarr[i])}`);
            cpt1++;
        }

    }
    console.log('after sorted in cpt sort: ', arr);
    return cpt1;
}

const cptreverse = cpyarr => {
        let cpt2 = 0;
        console.log('cpyarr: ' + cpyarr);
        let ar = [...cpyarr];
        let reverse_array = reverse_sort(cpyarr);

        console.log('ar: ' + ar);
        let j = 0;
        while (j < (ar.length) && (reverse_array.length)) {
            if (ar[j] != reverse_array[j]) {
                swap(ar, reverse_array.indexOf(ar[j]), j);
                console.log(`index of ${ar[j]}  in reverse is => ${reverse_array.indexOf(ar[j])}`);
                cpt2++;
            }

            j++;
        }

        console.log('after reverse: ' + cpyarr);
        return cpt2;
    }
    /** if (cpyarr[j] != reverse_array[j]) {
                swap(ar, reverse_array.indexOf(ar[j]), j);
                console.log(`index of ${cpyarr[j]}  in reverse is => ${reverse_array.indexOf(cpyarr[j])}`);
                cpt2++;

            } */
const liliwork = arr => {
    let cpt1 = cptsort(arr);
    let cpt2 = cptreverse(arr);
    console.log([cpt1, cpt2]);
    return cpt1 < cpt2 ? cpt1 : cpt2;
}
const lilysHomework = x => {
    let cpt1 = cptsort(x);
    let cpt2 = cptreverse(x);
    console.log([cpt1, cpt2]);
    return cpt1 < cpt2 ? cpt1 : cpt2;

}
let sw = [1, 2, 3, 5, 4];
console.log('the minimum swap of lili work is: ' + liliwork(sw));
console.log("LilysWork min swap is: ", lilysHomework(sw));

const lil = arr => {
    let cpt1 = cptsort(arr);
    let cpt2 = cptreverse(arr);
    console.log([cpt1, cpt2]);
    return cpt1 < cpt2 ? cpt1 : cpt2;
}
console.log("Lil min swap is: ", lil(sw));

const lilysHomeworks = arr => {
    const x = [...arr].sort((a, b) => a - b)
    const s = (a) => {
        const map = new Map()
        a.forEach((v, i) => map.set(v, i))
        let p = 0
        for (let [i, e] of a.entries()) {
            if (e !== x[i]) {
                p++
                const j = map.get(x[i])
                map.set(e, j)
                a[j] = e
            }
        }
        return p
    }
    return Math.min(s([...arr]), s(arr.reverse()));
}
console.log("The best i've to learn map an object.entries() LilysWorks min swap is: ", lilysHomeworks([2, 3, 5, 1]));