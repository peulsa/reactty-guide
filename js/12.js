//Iteración - recorrer arrays con for (alternativas para for loop)

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js','TypeScript.js']

for (let i = 0; i < tecnologias.length; i++) {
    console.log(tecnologias[i])
}

//foreach loop (edita un arreglo ya creado y recorre el index ya creado :)  es un método exclusivo de los Arrays. Es una función de orden superior que ejecuta una llamada de retorno (callback) por cada elemento. No permite detener el bucle con break, ni maneja bien funciones asíncronas en su interior.
tecnologias.forEach(function(nombrecualquiera){
    console.log(nombrecualquiera)
})

//map (genera un nuevo arreglo)
const arrayMap = tecnologias.map(function(nombrecualquiera){
    return nombrecualquiera
})
console.log(arrayMap)

//for ... of   es una declaración de bucle que funciona con cualquier objeto iterable (Arrays, Strings, Maps, Sets). Permite usar sentencias de control como break y continue para detener o saltar iteraciones y se comporta correctamente con código asíncrono.
for(let nombrecualquiera of tecnologias){
    console.log(nombrecualquiera)
}