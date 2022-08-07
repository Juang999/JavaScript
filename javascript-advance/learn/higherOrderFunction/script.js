const angka = [-1, 8, 9, 1, 4, -5. -4, 3, 2, 9];

// filter mencari angka
// const newAngka = [];
// for (let index = 0; index < angka.length; index++) {
//     if (angka[index] >= 3) {
//         newAngka.push(angka[index]);
//     }
    
// }

// console.log(newAngka

// filter

// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka)

// map
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka)

// reduce
const newAngka = angka.reduce((accumulator, currentValue) => {
    accumulator + currentValue
})