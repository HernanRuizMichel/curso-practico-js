const gratis ={
    codigo: 'FREE',
    descuento: 100
}

function calcularPrecioD(precio, porcentaje){
    let PrecioFinal = (precio * (100 - porcentaje)) / 100;
    return PrecioFinal;
}

function onclickButtonCalcular(){
    let PrecioInicial = document.getElementById("inputPorcent").value;
    let Descuento = document.getElementById("inputDiscount").value;

    if(Descuento == gratis.codigo){
        let PrecioFinal = calcularPrecioD(PrecioInicial, gratis.descuento);
        document.getElementById("PrecioFinal").innerText = "El precio final es: $" + PrecioFinal;

        document.getElementById("inputDiscount").value ="";
        document.getElementById("inputPorcent").value ="";
        document.getElementById("PrecioFinal").style.color = "rgb(0, 200, 0)";
    } else { 
        document.getElementById("PrecioFinal").innerText = "El cupon no es valido";
        document.getElementById("PrecioFinal").style.color = "rgb(200, 0, 0)";
    }
}