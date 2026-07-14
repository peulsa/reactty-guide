//Objetos - Destructuring para dos o más objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "juan",
    premiun: true,
    direccion : {
        calle: "sipo"
    }
}

const { nombre } = producto
const { nombre: nombreCliente, direccion : { calle }} = cliente

console.log(nombre)
console.log(nombreCliente)
console.log(calle)