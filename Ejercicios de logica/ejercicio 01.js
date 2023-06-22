// En primer lugar, creamos la función
 function next_pal(numero){
    // Aca vasmo a crear el bucle, para que aumente de uno en uno hasta que se cumpla la condición del Palindromo
    while (true) {
        numero++

        // para poder comparar los digitos del número, lo covertimos en texto, lo invertimos y unimos nuevamente.
        let inverso = numero.toString().split("").reverse().join("");
        // console.log(inverso);
        
        // escribimos la condición, que de ser cierta, imprime el numero. El # Palindromo debe leerse igual alderecho y al revez, por lo tanto el numero debe ser igual al inverso. Si la condición se cumple, returna el valor y termina el bucle.
        if (inverso == numero) {
            // console.log(inverso);
            // console.log(typeof(inverso));
            return numero;
        }
    }
}


console.log(next_pal(1526));
