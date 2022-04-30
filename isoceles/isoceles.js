let lado1;
let lado2;
let lado3;

function calcularti(Lado1, Lado2,Lado3){
    if(Lado1 == Lado2 || Lado1 == Lado3 || Lado2 == Lado3){
        //Lado3 es la base en este caso
        if(Lado3 != Lado1 & Lado3 != Lado2){
            //Lado1 sera hipotenusa
            if(Lado3 < Lado1){
                let altura = Math.sqrt((Lado1 * Lado1) - ((Lado3 * Lado3) / 4));
                document.getElementById("resultado").innerHTML = "La altura del triangulo es: " + altura;
                lado1 = null;
                lado2 = null;
                lado3 = null;
            }
        }
    } else {
        document.getElementById("resultado").innerHTML = "No es un triangulo isoceles";
        lado1 = null;
        lado2 = null;
        lado3 = null;
    }
}

function values(){
    if(lado1 == null){
        lado1 = document.getElementById("input").value;
        document.getElementById("input").value = 0;
        document.getElementById("Lado_h2").innerHTML = "Lado 2"; 
    }
    else if(lado2 == null & lado1 != null){
        lado2 = document.getElementById("input").value;
        document.getElementById("input").value = 0;
        document.getElementById("Lado_h2").innerHTML = "Lado 3"; 
    }
    else if(lado3 == null & lado1 != null & lado2 != null){
        lado3 = document.getElementById("input").value;
        document.getElementById("input").value = 0;
        document.getElementById("Lado_h2").innerHTML = "Triangulo"; 
        calcularti(lado1, lado2, lado3);
    }
}

