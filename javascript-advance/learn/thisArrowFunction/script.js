// const tampilNama = function (nama) {
//     return `Hallo, ${nama}`
// }

// console.log(tampilNama('Juang'))

// const tampilNama = (nama) => { return `Hallo, ${nama}` }

// console.log(tampilNama('Juang'))

// const mahasiswa = ['Bangkit Juang Raharjo', 'Muhammad Mujahid Muslim', 'Rahmat Bagus Latami']

// const jumlahHuruf = mahasiswa.map( nama => ({nama, jumlahHuruf: nama.length}))
// console.table(jumlahHuruf)

// const Mahasiswa = function () {
//     this.nama = "Juang"
//     this.umur = 23
//     this.sayHello = function () {
//         console.log(`hello nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     }
//     console.log(this)
// }

// const Juang = new Mahasiswa()

const Mahasiswa = function () {
    this.nama = "Juang"
    this.umur = 23
    this.sayHello = function () {
        console.log(`hello nama saya ${this.nama}, dan saya ${this.umur} tahun`)
    }
    console.log(this)
}

const Juang = new Mahasiswa()