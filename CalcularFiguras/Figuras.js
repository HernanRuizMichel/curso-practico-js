//Cuadrado
console.group("Cuadrado");
const LadoCuadrado = 5;
console.log("El lado del cuadrado mide: " + LadoCuadrado + "cm");

const PerimetroCuadrado = LadoCuadrado * 4;
console.log("El Perimetro del Cuadrado es: " + PerimetroCuadrado + "cm");

const AreaCuadrado = LadoCuadrado * LadoCuadrado;
console.log("El Area del Cuadrado es: " + AreaCuadrado + "cm2")
console.groupEnd();

//Triangulo
console.group("Triangulo");
const LadoTriangulo1 = 6;
const LadoTriangulo2 = 6;
const BaseTriangulo = 4;
console.log("Los lados del Triangulo miden: " + LadoTriangulo1 + "cm, "
            + LadoTriangulo2 + "cm, "
            + BaseTriangulo + "cm"
);

const PerimetroTriangulo = LadoTriangulo1 + LadoTriangulo2 + BaseTriangulo;
console.log("El Perimetro del Triangulo es: " + PerimetroTriangulo + "cm");

const AlturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + AlturaTriangulo + "cm");

const AreaTriangulo = (BaseTriangulo * AlturaTriangulo) / 2;
console.log("El Area del Triangulo es: " + AreaTriangulo + "cm2");
console.groupEnd();

//Circulo
console.group("Circulo");
const radio = 3;
console.log("EL radio del circulo es: " + radio + "cm");

const diametro = radio * 2;
console.log("El diametro del circulo es: " + diametro + "cm");

const PI = Math.PI;
const PerimetroCirculo = PI * diametro;
console.log("El Perimetro del circulo es: " + PerimetroCirculo + "cm");

const AreaCirculo = PI * (radio * radio);
console.log("El Area del circulo es: " + AreaCirculo + "cm2");
console.groupEnd();