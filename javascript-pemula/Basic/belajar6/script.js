var tanya = true;
while (tanya) {
    
    //Menangkap pilihan player
    const p = prompt("pilih: gajah, semut, orang");
    
    /*
    Menangkap pilihan komputer
    membangkitkan piilhan random
    */
   
   var comp = Math.random();
   
   if (comp < 0,34) {
       comp = 'gajah'; 
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    
    //Menentukan rules
    var hasil = '';
    
    if (p == comp) {
        hasil = "SERI";
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'memasukkan pilihan yang salah';
    }
    
    alert('kamu memilih '+p+' dan komputer memilih '+comp+'\nMaka hasilnya : ' + hasil);

    tanya = confirm('mau ulangi? ');
}

alert('terimakasih telah bermain');