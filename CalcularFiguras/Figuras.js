//Cuadrado
// console.group("Cuadrado");
// const LadoCuadrado = 5;
// console.log("El lado del cuadrado mide: " + LadoCuadrado + "cm");

function PerimetroCuadrado(lado){
    return lado * 4;
} 
// console.log("El Perimetro del Cuadrado es: " + PerimetroCuadrado + "cm");

function AreaCuadrado(lado){
    return lado * lado;
}
// console.log("El Area del Cuadrado es: " + AreaCuadrado + "cm2")
// console.groupEnd();

//Triangulo
// console.group("Triangulo");
// const LadoTriangulo1 = 6;
// const LadoTriangulo2 = 6;
// const BaseTriangulo = 4;
// console.log("Los lados del Triangulo miden: " + LadoTriangulo1 + "cm, "
//             + LadoTriangulo2 + "cm, "
//             + BaseTriangulo + "cm"
// );

function PerimetroTriangulo(Lado1, Lado2, Base){
    return Lado1 + Lado2 + Base;
}
// console.log("El Perimetro del Triangulo es: " + PerimetroTriangulo + "cm"

function AreaTriangulo(base, altura){
    return (base * altura) / 2;
}

//Circulo
// console.group("Circulo");
// const radio = 3;
// console.log("EL radio del circulo es: " + radio + "cm");

// const diametro = radio * 2;
// console.log("El diametro del circulo es: " + diametro + "cm");
function diametro(radio){
    return radio * 2;
}
const PI = Math.PI;
function PerimetroCirculo(radio){
    let diametro = diametro(radio);
    return diametro * PI;
}

function AreaCirculo(radio){
    return PI * (radio * radio);
} 