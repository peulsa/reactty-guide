//Template strings y Concatenación

const producto = "Tablet de 12 pulgadas"
const precio = 500
const marca = "Orange"

console.log('El producto es: ' + producto)//antes
console.log(` El producto es: ${producto} `)//template strings

//antes
// console.log('El producto es: '+ producto + ' $' + precio + ' dólares, Marca: ' + marca )

//template strings
console.log(` ${producto} $${precio} Dólares, Marca: ${marca}`)


