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
function Mahasiswa (nama, energi) {
  this.nama = nama
  this.energi = energi

  this.makan = function (porsi) {
    this.energi += porsi
    console.log(`hallo ${this.nama}, selamat makan!`)
  }

  this.main = function (jam) {
    this.energi -= jam
    console.log(`hello ${this.nama}, selamat bermain!`)
  }
}

let juang = new Mahasiswa('juang', 10)