
function drawX(tamaño) {
      
    let valorX = "";

    bucleFilas: for (let fila = 1; fila <= tamaño; fila++) {
        bucleColumnas: for (let columna = 1; columna <= tamaño; columna++) {
            // console.log(`La ubicación actual en la matriz es : ${fila} , ${columna} y el este es el valor de valorX  "${valorX}"`)
            if (columna === fila || columna === tamaño-(fila-1)) {
                
                if (columna == tamaño) {
                    valorX += "*\n"
                    //console.log(valorX);
                    break bucleColumnas;
                } else {
                    valorX += "*"; 
                    //console.log(valorX);                   
                }
            } else {
                if (columna == tamaño) {
                    valorX += "\n"
                } else {
                    valorX += " ";
                    //console.log(valorX);
                }
            }
        }
        
    }
    return valorX
}



  console.log(drawX(8));
  

