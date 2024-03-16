let button = document.getElementById('button')

button.addEventListener('click', () => {
    console.info('you already clicked it!')
    let valueAttr = button.getAttributeNode('value')
    valueAttr.value = 'yes, you clicked it!'
    button.setAttributeNode(valueAttr)
})