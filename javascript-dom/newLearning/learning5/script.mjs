import number from "./number.mjs"

let prompt = document.getElementById('prompt')
let promptAttr = prompt.getAttributeNode('value')

let funcOnClick = (elementDoc) => {
    elementDoc.onclick = (event) => {
        console.info(promptAttr.value)
    }
}

let arrayDocs = number.arrayDocument

console.info(arrayDocs)