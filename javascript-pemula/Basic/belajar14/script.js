// Membuat object
//cara 1 - function declaration

// function hello(){
// console.log(this);
// console.log("hello world");
// }

// this.hello();
//this & window mengembalikan object global


// cara 2 - Menggunakan object literal
// var obj = {a : 10, nama : "Bangkit Juang Raharjo"};
// obj.function = () => {
//     console.log(this);
//     console.log("hallo dunia");
// }

// obj.function();

//cara 3 - Menggunakan constructor function
// function Hello(){
    // console.log(this);
    // console.log("hello world");
// }

// new Hello();
//this mengembalikan object yang baru dibuat

//This

// var a = 10;
// console.log(this.a);