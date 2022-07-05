// const tampilNama = function (nama) {
//     return `Hallo, ${nama}`
// }

// console.log(tampilNama('Juang'))

// const tampilNama = (nama) => { return `Hallo, ${nama}` }

// console.log(tampilNama('Juang'))

const mahasiswa = ['Bangkit Juang Raharjo', 'Muhammad Mujahid Muslim', 'Rahmat Bagus Latami']

const jumlahHuruf = mahasiswa.map( nama => ({nama, jumlahHuruf: nama.length}))
console.table(jumlahHuruf)