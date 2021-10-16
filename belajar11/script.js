const array = [
    6,
    2,
    5,
    4,
    3,
    1,
    7,
];

var angka2 = array.find(x => {
    return x > 3;
});

console.log(angka2);