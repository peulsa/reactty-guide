//Objetos - Destructuring para dos o más objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "juan",
    premiun: true
}


const carrito = {
    cantidad: 1,
    ...producto // spread operator
}


//unir producto y cliente en un mismo objeto
const nuevoOjt = {
    producto: { ...producto },
    producto: { ...cliente }
}
//mas corto
const nuevoObjt = {
    ...producto,
    ...cliente,
}
console.log(nuevoObjt)

//object assign  

const nuevoObjt2 = Object.assign(producto, cliente)
console.log(nuevoObjt2)

