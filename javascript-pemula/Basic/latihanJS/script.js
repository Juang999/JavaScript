//juragan angkot
const penumpang = [];

//tunction tambahPenumpang
const tambahPenumpang = (namaPenumpang, penumpang) => {
    if (penumpang.length == 0) {
        //tambah penumpang
        penumpang.push(namaPenumpang);
        //mengembalikan nilai penumpang
        return penumpang;
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }else if (penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + " sudah naik angkot");
                return penumpang;
            } else if (i == penumpang.length - 1 ) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

// function hapusPenumpang
const hapusPenumpang = (namaPenumpang, penumpang) => {
    if (penumpang == 0) {
        console.log("angkot masih kosong");
        return penumpang;
    } else {   
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1){
                return (namaPenumpang + " tidak ada di angkot");
                return penumpang;
            }
            
        }
    }
}