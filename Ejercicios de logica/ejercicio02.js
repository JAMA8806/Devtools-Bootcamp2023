function createPhoneNumber (numero){
    tel = numero.toString()
    console.log(tel)
    console.log(tel.length)
    if (tel.length == 10) {
        return  `(${tel.slice(0,3)}) ${tel.slice(3,6)}-${tel.slice(6)}` 
    }else{
        return "El numero debe tener 10 cifras"
    }
}


console.log(createPhoneNumber(3258545596))