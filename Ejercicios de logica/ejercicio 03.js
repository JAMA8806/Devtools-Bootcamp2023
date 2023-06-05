function countNameRepetitions(array){
    const cantidad = []
    console.log(array)
    for (const nombre of array) { 
        cantidad[nombre] = (cantidad[nombre]) + `${"*"}` 
        cantidad[nombre] = cantidad[nombre].replace("undefined", "")
        console.log(cantidad)
        
    } 
    console.log(cantidad)
    return cantidad
}

const nombres = ["julian", "mario", "pedro", "julian", "juan","mario", "pedro", "julian",]
const cuentaNombres  = countNameRepetitions(nombres)

console.log(cuentaNombres)

