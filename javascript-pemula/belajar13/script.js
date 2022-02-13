// Membuat object
// Object patrial
const santri1 = {
    nama : "Bangkit Juang Raharjo",
    id : "081325507780",
    email : "juangraharjo03@gmail.com",
    divisi : "Backend Developer"
}

const santri2 = {
    nama : "Rahmat Bagus Latami",
    id : "088881222345",
    email : "latami28@gmail.com",
    divisi : "Backend De    veloper"
}

//Membuat object dengan menggunakan function declaration
function buatObjectSantri(nama, id, email, divisi){
    const santri = {};

    santri.nama = nama;
    santri.id = id;
    santri.email = email;
    santri.divisi = divisi;

    return santri;
}

const santri3 = buatObjectSantri('Muhammad Mujahid Muslim', '087776687395362', 'mujahidpondokprogrammer@gmail.com', 'mobile');

//Membuat object menggunakan constructor
function Santri(nama, id, email, divisi) {
    //var this = {};
    this.nama = nama;
    this.id = id;
    this.email = email;
    this.divisi = divisi;
    //return this;
}

const santri4 = new Santri("Muhammad David Ismail MS", "081225356213434", "davidpondokprogrammer@gmail.com", "Backend");