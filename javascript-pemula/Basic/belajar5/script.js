var jumlahSamping = 5;
var jumlahBawah = 5;
var s = '';

for (let i = 1; i <= jumlahSamping; i++) {
    for (let j = 1; j <= jumlahBawah; j++) {
        s += '*';
        
    }
    s+= '\n';
}

console.log(s);