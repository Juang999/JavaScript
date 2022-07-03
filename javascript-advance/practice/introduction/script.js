// object
// let santri = {
//     nama: "indra",
//     energi: 10,
//     kelas: 5,
//     berat: 35,
//     tidur: function (jam) {
//         this.energi += jam
//         console.log(`hello ${this.nama}, tidur mulu!`)
//     },
//     makan: function (porsi) {
//         this.berat += porsi
//         console.log(`dasar ${this.nama}, makan mulu luuu!!!`)
//     }
// }

// object with function javascript
// function Santri (nama, energi, berat) {
//     let santri = {}

//     santri.nama = nama
//     santri.energi = energi
//     santri.berat = berat

//     santri.makan = function (porsi) {
//         this.berat += porsi
//         console.log(`woy ${this.nama}, makan mulu luuuuu!!!!`)
//     }

//     santri.tidur = function (jam) {
//         this.energi += jam
//         console.log(`woy ${this.nama}, tidur mlu luuu!!!!`)
//     }

//     return santri
// }

// let indra = Santri('indra', 10, 40)

// object function
function Santri (nama, energi, berat) {
    this.nama = nama
    this.energi = energi
    this.berat = berat

    this.makan = function (porsi) {
        this.berat += porsi
        console.log(`woy ${this.nama}, makan mulu luuuuu!!!!`)
    }

    this.tidur = function (jam) {
        this.energi += jam
        console.log(`woy ${this.nama}, tidur mlu luuu!!!!`)
    }
}

let indra = new Santri('indra', 10, 40)