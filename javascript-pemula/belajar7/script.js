function tambahRuas(a, b){
    var kubus1;
    var kubus2;
    var hasil;
    
    
    kubus1 = Math.pow(a,3);
    kubus2 = Math.pow(b,3);

    hasil = kubus1 + kubus2;
    return [
        "keliling dari kubus1: "+kubus1,
        "keliling dari kubus2: "+kubus2,
        "jumlah dari kedua kubus: "+hasil
    ];
}

var kubus1 = 8;
var kubus2 = 3;

console.log(tambahRuas(kubus1, kubus2));