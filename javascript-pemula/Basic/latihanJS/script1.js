// membuat object angkot

function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = namaPenumpang => {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = (namaPenumpang, bayar) => {
        if (this.penumpang.length == 0) {
            alert('angkot masih kosong');
            return false;
        }

        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] == undefined;
                this.kas += bayar
                return penumpang;
            }
            
        }
    }
}

var angkot1 = new Angkot('juang', ['madang', 'citeureup'], [], 0);
var angkot2 = new Angkot('david luise', ['cibinong', 'sentul'], [], 0);