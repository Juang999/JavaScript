// DOM selection
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()

// document.querySelector()
// const p4 = document.querySelector('#b p');

// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('#b li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');

// p.style.backgroundColor = 'lightBlue';

// document.querySelectorAll()
// const p = document.querySelectorAll('p');

// for (let index = 0; index < p.length; index++) {
//     p[index].style.backgroundColor = 'lightBlue'; 
// }

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

p4.style.backgroundColor = 'orange';