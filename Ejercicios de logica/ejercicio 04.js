function fizzBuzz(n) {
    let numero = []
    for (let index = 1; index <= n; index++) {
        // console.log(index)
        
        switch (true) {
            case index % 5 == 0 && index % 3 == 0 :
                    // console.log(" divisible 3&5")
                    numero[index] = "FizzBuzz"
                    break;
            case index % 3 == 0:
                // console.log("divisible 3")
                numero[index] = "fizz"
                break; 
            case index % 5 == 0 :
                // console.log("divisible 5")
                numero[index] = "Buzz"
                break;
            default:
                    // console.log("no divisible")
                    numero[index] = index
                break;       
        }         
    }
    return numero
}

let juego = [fizzBuzz(15)]
console.log(juego)
