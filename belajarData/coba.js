let strArray = ['loveftw 8', 'Yuka', 'TELEMARKETING3', 'Dwi', 'putri', 'sales 3', 'putri', 'TELEMARKETING3', 'TELEMARKETING7', 'putri', 'TELEMARKETING11', 'TELEMARKETING2', 'Dwi', 'loveftw 8', 'Dwi', 'Yuka', 'sales 3', 'loveftw 8', 'putri', 'Octa', 'Dwi', 'putri', 'Dwi', 'TELEMARKETING4', 'putri', 'loveftw 8', 'TELEMARKETING17', 'TELEMARKETING2', 'loveftw 8', 'putri', 'sales 3', 'loveftw 8', 'Dwi', 'TELEMARKETING15', 'Yana', 'Dwi', 'sales 3'];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log(findDuplicates(strArray)) // All duplicates
console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates