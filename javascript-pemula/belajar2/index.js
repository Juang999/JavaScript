function tambah(nilai1, nilai2)
{
    alert(nilai1 + nilai2)
}

function kurang(nilai1, nilai2)
{
    alert(nilai1 - nilai2)
}

function kali(nilai1, nilai2)
{
    alert(nilai1 * nilai2)
}

function bagi(nilai1, nilai2)
{
    alert(nilai1 / nilai2)
}

do {
    var pilihan = prompt("masukkan pilihan +, -, *, /")

    if (pilihan == '+') {
        var nilai1 = parseInt(prompt("masukkan nilai pertama"))
        var nilai2 = parseInt(prompt("masukkan nilai kedua"))

        tambah(nilai1, nilai2)
    } else if (pilihan == '-') {
        var nilai1 = parseInt(prompt("masukkan nilai pertama"))
        var nilai2 = parseInt(prompt("masukkan nilai kedua"))

        kurang(nilai1, nilai2)
    } else if (pilihan == '*') {
        var nilai1 = parseInt(prompt("masukkan nilai pertama"))
        var nilai2 = parseInt(prompt("masukkan nilai kedua"))

        kali(nilai1, nilai2)
    } else if (pilihan == '/') {
        var nilai1 = parseInt(prompt("masukkan nilai pertama"))
        var nilai2 = parseInt(prompt("masukkan nilai kedua"))

        bagi(nilai1, nilai2)
    } else {
        alert("maaf, pilihan anda tidak ada")
    }

    var lanjut = confirm('apakah ingin diulang?')
    console.log(lanjut)

} while (lanjut === true);

alert("terimakasih telah menggunakan kalkulator kami")