
console.group("Cuadrados");


function perimetroCuadrado(lado) {
    return lado * 4;
} 


function areaCuadrado(lado) {
    return lado * lado;
}


console.groupEnd();



console.group("Triangulos");



function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();




console.group("Circulos");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();


// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Perimetro Triagunlo con el html

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputLado2");
    const value2 = Number(input2.value);
    const inputB = document.getElementById("inputBase");
    const valuebase = Number(inputB.value);

    const perimetro = perimetroTriangulo(value1, value2, valuebase);
    alert(perimetro);
}  

// Area Triangulo con el html

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputBaseArea");
    const value1 = Number(inputBase.value);
    const inputAltura = document.getElementById("inputAltura")
    const value2 = Number(inputAltura.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
}

// Area Perimetro Ciruclo

    function calcularPerimetroCiruclo() {
        const input = document.getElementById("inputRadio");
        const value = input.value;
        const perimetro = perimetroCirculo(value);
        alert(perimetro);
    }

    function calcularAreaCirculo() {
        const input = document.getElementById("inputRadio");
        const value = input.value;
        const area = areaCirculo(value);
        alert(area);
    }


