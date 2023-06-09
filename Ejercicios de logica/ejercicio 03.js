function countNameRepetitions(array){
    const cantidad = []
    // console.log(array)
    for (const nombre of array) { 
        
        if (cantidad[nombre]) {
        cantidad[nombre] = cantidad[nombre] + `${"*"}` 
        console.log(cantidad)  
        } else {
        cantidad[nombre] = "*" 
        console.log(cantidad)   
        }
    } 
    console.log(cantidad)
    return cantidad
}

const nombres = ["julian", "mario", "pedro", "julian", "juan","mario", "pedro", "julian",]
const cuentaNombres  = countNameRepetitions(nombres)

console.log(cuentaNombres) 




