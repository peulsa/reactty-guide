//Objetos - Manipulación

const producto = {
    nombre : "Tablet", 
    precio : 300,
    disponible : false
}
//No deja añadir, modificar mover alterar el código debajo, quea hasta antes del freeze
//Object.freeze(producto)

//deja modificcar las propiedades ya existentes, mas no añadir eliminar alguna
//Object.seal(producto)

//Reescribir un valor
producto.disponible = true

//Si no existe una propiedad, la añade
producto.imagen = 'imagen.jpg'

//Eliminar propiedad
delete producto.precio

console.log(producto)