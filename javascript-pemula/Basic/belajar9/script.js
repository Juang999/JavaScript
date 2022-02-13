var array = [
    "senin",
    "selasa",
    "rabu",
    "kamis",
    "jum'at",
    "sabtu",
    "minggu"];
    
// array.forEach(i => {
//     if (i == "minggu"){
//         console.log("horray, sekarang hari libur");
//     } else {
//         console.log(i);
//     }
// });

// console.log(array.length);

// var count = 0;

// array.forEach(i => {
//     if (i > 0) {
//         count++;
//     }
// });

array.shift();

console.log(array.join(' + '));