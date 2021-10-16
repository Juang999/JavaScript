// Membuat object
//cara 1 - function declaration

function hello(){
console.log(this);
console.log("hello world");
}

hello()

// cara 2 - Menggunakan object literal
// var obj = {};
// obj.function = () => {
    // console.log("hello world");
// }
// 
// obj.function();

//cara 3 - Menggunakan constructor function
// function Hello(){
//     console.log("hello world")
// }

// new Hello();


//This

// var a = 10;
// console.log(this.a);