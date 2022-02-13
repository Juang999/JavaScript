var x = [
    [
        1,
       'juang'
    ],[
        1,
        'juang'
     ],[
        2,
        'rahmat'
     ],[
        3,
        'hasan'
     ],[
        4,
        'indro'
     ],[
        4,
        'indro'
     ],[
        2,
        'rahmat'
     ],[
        3,
        'hasan'
     ],[
        2,
        'rahmat'
     ],[
        2,
        'rahmat'
     ]
];
// console.log(x);
var array = [];

// for (let i = 0; i < x.length; i++) {
//     let data = x[i];
//     array.push(data);
// }

// const mySet = new Set(array);

// console.log(mySet);

// console.log(x);
const result = {};
for(var d of x){
    let dummyhash = d.reduce((x, y) => x + y, '');
    console.log(result.hasOwnProperty(dummyhash));
}

// var array = [];

// for (let i = 0; i < x.length; i++) {
//     console.log('hello world');
// }

// var newSet = new Set(array);
// 
// console.log("--[uniqueData]--")
// console.log(newSet);
// console.log("\n");
// 
// x.sort();
// 
// console.log("--[manyDuplicateData]--")
// var current = null;
// var cnt = 0;
// for (var i = 0; i < array.length; i++) {
    // if (array[i] != current) {
        // if (cnt > 0) {
            // console.log(current + ' comes --> ' + cnt);
        // }
        // current = array[i];
        // cnt = 1;
    // } else {
        // cnt++;
    // }
// }
// if (cnt > 0) {
    // console.log(current + ' comes --> ' + cnt);
// }


// var mySet = new Set(x);

// x.sort(function(a,b) {return a-b});
// console.log(x.toString());

// var j = x.slice(0,x.length);
// console.log(j.toString());