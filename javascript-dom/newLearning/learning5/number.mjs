let funcGetElement = (id) => {
    let element = document.getElementById(`${id}`)
    return element
}

let idButtonNumber = ["1", "2", "3", "4", "5", "6", "8", "9", "dot","0", "00"]
let nameNumber = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'dot', 'zero', 'double_zero']

let arrayDocument = [];

for (let index = 0; index < nameNumber.length; index++) {
    arrayDocument.push({element_docs: funcGetElement(idButtonNumber[index])})
}

export default {arrayDocument, nameNumber}