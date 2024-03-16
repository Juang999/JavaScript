// DOM selection
// document.getElementById()
var p = document.getElementsByTagName('p');

for (let index = 0; index < p.length; index++) {
    p[index].style.backgroundColor = 'lightBlue';
}

var nama = document.getElementById('judul');

const ismun = {
    name: "Bangkit Juang Raharjo"
}

nama.innerHTML = ismun.name;

nama.style.color = "green";