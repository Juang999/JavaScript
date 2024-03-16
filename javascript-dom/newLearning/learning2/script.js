let listMenu = document.getElementById('list')

for (let index = 1; index <= 10; index++) {
    let newElement = document.createElement('li')
    newElement.textContent = index;
    listMenu.appendChild(newElement)
}