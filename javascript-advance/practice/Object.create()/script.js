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
let santriMethod = {
  makan: function (porsi) {
    this.berat += porsi
    console.log(`woyyyy ${this.nama}, makan mulu luuu!!!!`)
  },

  main: function (jam) {
    this.energi -= jam
    console.log(`buseeett si ${this.nama}, main mulu kerjaan nya`)
  },

  tidur: function (jam) {
    this.energi += jam * 2
    console.log(`kerjaan si ${this.nama} tidur mulu yaaa!!!`)
  }
}

function Santri (nama, energi, berat) {
  let santri = Object.create(santriMethod)
  santri.nama = nama
  santri.energi = energi
  santri.berat = berat

  return santri
}

let indra = Santri('indra', 10, 45)