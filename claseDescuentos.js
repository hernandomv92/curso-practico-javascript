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

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

const coupons = [
    "Nando",
    "Jonathan",
    "Salome",
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value

    let descuento;

    switch(couponValue) {
        case coupons[0]: descuento = 15;
        break;
        case coupons[1]: descuento = 33;
        break;
        case coupons[1]: descuento = 40;
        break;
    }
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento

    }
    

    
    

    /*
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
*/
