function alturaIsoceles(lado, base){
    return Math.sqrt(lado * lado - ((base*base)/4));
}

function calcularAlturaIsoceles(){
    const input1 = document.getElementById("inputLado");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputBase")
    const value2 = Number(input2.value);
    
    const altura = alturaIsoceles(value1, value2);
    if (value1 > value2) {
        alert(altura);
        }else{
            alert("el lado debe ser mayor a la base")
        }
    }
    
