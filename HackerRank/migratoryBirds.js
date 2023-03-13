//[1, 1, 3, 1, 5]
// the best answer and i got 10
const migratorybirds = arr => {
    let mf = 1;
    let mfElt;
    let cpt = 0;
    arr = arr.sort((a, b) => a - b);
    let notduplicate = Array.from(new Set(arr));
    notduplicate.forEach(item => {
        cpt = arr.filter(x => x === item).length;
        if (cpt > mf) {
            mf = cpt;
            mfElt = item;
        }

    });
    return mfElt;

}
const cptElement = arr => {
    let cpt = 0;
    let cmpteur_arr = [];
    let prev;
    arr = arr.sort((a, b) => a - b);
    arr.forEach(elt => {
        cpt = arr.filter(item => item === elt).length;
        cmpteur_arr.push(cpt);

    });
    return cmpteur_arr;
}
console.log(migratorybirds([0, 0, 4, 1, 8, 2, 2, 7]));
console.log(cptElement([3, 1, 1, 8, 7]));

const remove_and_getOccurence = arr => {
    let mf = 1;
    let mfElt;
    let cpt = 0;

    arr = arr.sort((a, b) => a - b);
    let notduplicate = Array.from(new Set(arr));
    notduplicate.forEach(item => {
        cpt = arr.filter(x => x === item).length;
        if (cpt > mf) {
            mf = cpt;
            mfElt = item;
        }

    });
    return mfElt;
}
console.log(remove_and_getOccurence([0, 0, 4, 1, 8, 2, 2, 2, 7]));