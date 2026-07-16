//Modificar arreglos Array Methods

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
//tecnologias[5] = 'Nest.js'//esto solo si se el nro del arreglo, entonces no me sirve mucho
//tecnologias.push('Nest.js')// como push es mutable, no es weno usarlo, entonces la otra opción es hacer un nuevo array
//console.table(tecnologias)

// const nuevoArray = ['Nest,js', ...tecnologias]
// console.table(nuevoArray)


//si quiero eliminar una posición
//tecnologias.shift()//elimina el primer elemento de un array y es mutable entonces hay que buscar otro

// const tecnologias2 = tecnologias.filter(function (tech) {//tech accede a cada valor de forma individual y filter no muta pq lo esta asignando a un nuevoarreglo y no modifica el original

//     if (tech !== 'HTML') {
//         return tech
//     }
// })
// console.log(tecnologias2)

const tecnologias2 = tecnologias.map(function (tech){
    if(tech === 'Node.js'){
        return 'Nest.js'
    } else { return tech}
})

console.log(tecnologias2)