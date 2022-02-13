// const array = [
//     'senin',
//     'selasa',
//     'rabu',
//     'kamis',
//     'jumat',
//     'sabtu',
//     'minggu',
// ];

const array = [
    6,
    2,
    5,
    4,
    3,
    1,
    7,
];

//foreach
// array.forEach(function(e, i) {
//     console.log("hari ke-"+(i+1)+" adalah "+e);
// });

array.sort();
//map
var angka = array.map(function(e, i) {
        return e * 2;
    });

console.log(angka);