

function precioFinal(precio, descuento){
    return (precio * (100 - descuento))/100
}

function CalcularPrecioFinal(){
    const Input1 = document.getElementById("InputIni");
    const value1 = Number(Input1.value);
    const Input2 = document.getElementById("InputDes");
    const value2 = Number(Input2.value);

    const pagarias = precioFinal(value1,value2);
    alert("El valor final a pagar es: " + pagarias);

}

/*
const precioOriginal = 120;
const descuento = 15;
*/
/*
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
})
*/
/*
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento);

    return precioConDescuento;
}*/