// import number from "./number.mjs"
let prompt = document.getElementById('prompt');
let promptAttr = prompt.getAttributeNode('value');
let rawData = [];
let total = null;
let status = ""

let funcGetElement = (ids) => {
    let result = [];
    for (const id of ids) {
        let element = document.getElementById(`${id}`)
        result.push({element_docs: element, type:element.getAttribute('class') })
    }
    return result;
}

let mainFunction = function (elementDoc) {
    let status = elementDoc.getAttribute('class')

    if (status == 'data-number') {
        funcNumber(elementDoc)
    } else if (status == 'operation-operator') {
        funcOperator(elementDoc)
    }
}

let funcNumber = (parameterNumber) => {
    let valueNumber = parameterNumber.getAttribute('value')

    parameterNumber.onclick = () => {
        if (parseInt(promptAttr.value) == 0 || status == "operator") {
            promptAttr.value = valueNumber;
            status = "input"
        } else {
            promptAttr.value = promptAttr.value + valueNumber; 
            status = "input"
        }
    }
}

let funcOperator = (parameterOperator) => {
    let getAttrVal = parameterOperator.getAttribute('value');

    parameterOperator.onclick = () => {
        if (getAttrVal == "+") {
            (total == null) ? total = parseInt(promptAttr.value) : total += parseInt(promptAttr.value)
            status = "operator"
            setAttribute(getAttrVal)
            promptAttr.value = total;
        } else if (getAttrVal == "-") {
            (total == null) ? total = parseInt(promptAttr.value) : total -= parseInt(promptAttr.value)
            status = "operator"
            setAttribute(getAttrVal)
            promptAttr.value = total;
        } else if (getAttrVal == "*") {
            (total == null) ? total = parseInt(promptAttr.value) : total *= parseInt(promptAttr.value)
            status = "operator"
            setAttribute(getAttrVal)
            promptAttr.value = total;
        } else if (getAttrVal == "/") {
            (total == null) ? total = parseInt(promptAttr.value) : total /= parseInt(promptAttr.value)
            status = "operator"
            setAttribute(getAttrVal)
            promptAttr.value = total;
        } else if (getAttrVal == 'CE') {
            let inputOperator = document.getElementById("operator");
            let operator = inputOperator.getAttributeNode("value");
            operator.value = "";
            promptAttr.value = 0;
            total = 0;
            status = "";
        } else if (getAttrVal == '=') {
            let value = promptAttr.value;
            funcEqual(value)
        }
    }
}

let funcEqual = (value) => {
    let inputOperator = document.getElementById("operator");
    let operator = inputOperator.getAttributeNode("value");

    switch (operator.value) {
        case "+":
            total += parseInt(value);
            promptAttr.value = total;
            operator.value = "=";
            total = null;
            status = "operator";
            break;
        case "-":
            total -= parseInt(value);
            promptAttr.value = total;
            operator.value = "=";
            total = null;
            status = "operator";
            break;
        case "*":
            total *= parseInt(value);
            promptAttr.value = total;
            operator.value = "=";
            total = null;
            status = "operator";
            break;
        case "/":
            total /= parseInt(value);
            promptAttr.value = total;
            operator.value = "=";
            total = null;
            status = "operator";
            break;
        default:
            break;
    }
}

let setAttribute = (value) => {
    let propmtOperator = document.getElementById('operator')
    let attribute = document.createAttribute('value')

    attribute.value = value

    propmtOperator.setAttributeNode(attribute)
}

let dataButton = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "dot","0", "00", "delete", "divide", "times", "minus", "plus", "equal"];

let arrayButton = funcGetElement(dataButton);

for (const dataButton of arrayButton) {
    mainFunction(dataButton.element_docs);
}