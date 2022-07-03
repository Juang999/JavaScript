// 1. object
// let mahasiswa1 = {
//   nama: "Juang",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi
//     console.log(`hello ${this.nama}, selamat makan!`)
//   }
// }

// let mahasiswa2 = {
//   nama: "mujahid",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi
//     console.log(`hello ${this.nama}, selamat makan!`)
//   }
// }


// 2. function declaration
// function Mahasiswa (nama, energi) {
//   let mahasiswa = {}
//   mahasiswa.nama = nama
//   mahasiswa.energi = energi

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi
//     console.log(`hallo ${this.nama}, selamat makan!`)
//   }

//   mahasiswa.main = function (jam) {
//     this.energi -= jam
//     console.log(`hello ${this.nama}, selamat bermain!`)
//   }

//   return mahasiswa
// }

// let juang = Mahasiswa('Juang', 10);


// constructor function
// keyword new
// let methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi
//     console.log(`hallo ${this.nama}, selamat makan!`)
//   },

//   main: function (jam) {
//     this.energi -= jam
//     console.log(`hello ${this.nama}, selamat bermain!`)
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2
//     console.log(`hello ${this.nama}, selamat tidur`)
//   }
// }

// function Mahasiswa (nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama
//   mahasiswa.energi = energi

//   return mahasiswa
// }

// let juang = Mahasiswa('juang', 10)

// function Mahasiswa (nama, energi) {
//   this.nama = nama
//   this.energi = energi
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi
//   console.log(`hello ${this.nama}, selamat makan`)
// }

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam
//   console.log(`hello ${this.nama}, selamat main`)
// }

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2
//   console.log(`hello ${this.nama}, selamat main`)
// }

// let juang = new Mahasiswa('juang', 10)

// class Mahasiswa {
//   constructor (nama, energi) {
//     this.nama = nama
//     this.energi = energi
//   }

//   makan (porsi) {
//     this.energi += porsi
//     return `Hallo ${this.nama}, selamat makan!`
//   }

//   main (jam) {
//     this.energi -= jam
//     return `Hallo ${this.nama}, selamat main!`
//   }

//   tidur (jam) {
//     this.energi += jam * 2
//     return `${this.nama}, selamat tidur!`
//   }
// }

// let juang = new Mahasiswa('Juang', 10)
// let mujahid = new Mahasiswa('Mujahid', 10)

function Santri (nama, energi, berat) {
  this.nama = nama
  this.energi = energi
  this.berat = berat
}

Santri.prototype.makan = function (porsi) {
  this.berat += porsi
  return `si ${this.nama}, makan mulu ehhh`
}

Santri.prototype.main = function (jam) {
  this.energi -= jam
  return `si ${this.nama} main mulu, ga cape apa`
}

Santri.prototype.tidur = function (jam) {
  this.energi += jam * 2
  return `heyyy ${this.nama} kerjaan tuh tidur muluuuu`
}

let indra = new Santri('indra', 10, 45)