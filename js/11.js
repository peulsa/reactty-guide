//

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
//Destructuring de arrays, los dos de abajo son iguales pero la de abajo es l asintaxis moderna
const react = tecnologias[3]
const[ , , , reactjs] = tecnologias //[corchete pq es un arreglo] y {cuando es un objeto}
console.log(react)