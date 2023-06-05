function createPhoneNumber (numero){
    tel = numero.toString() 
    console.log(tel)
    console.log(tel.length)
    // se verifica que el numero introducido cumpla con el primer requisito de longitud 10 digitos.
    if (tel.length == 10) {
        // si cumple con la longitud, se retorna el valor con el formato solicitado.
        return  `(${tel.slice(0,3)}) ${tel.slice(3,6)}-${tel.slice(6)}` 
    }else{
        return "El numero debe tener 10 cifras"
    }
}


console.log(createPhoneNumber(3258545596))