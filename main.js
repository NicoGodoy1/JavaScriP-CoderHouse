let MotorolaE22 = 30000.00;
let MotorolaE40 = 35000.00; 
let MotorolaE20 = 40000.00;
let MotorolaE32 = 45000.00;
let MotorolaG22 = 50000.00;
let MotorolaG32 = 50000.00;
let MotorolaG42 = 55000.00;
let MotorolaG52 = 60000.00;
let MotorolaG82 = 65000.00;
let MotorolaEdge30fusion = 70000.00; 


// console.log("El valor del Motorola E20 ES:", MotorolaE20); 
alert("Hola")
let modeloElegido = prompt("Indica cuál modelo de celular quieres comprar: \n a) Moto E \n b) Moto G \n c) Moto Edge:" );
modeloElegido = modeloElegido.toLowerCase()
prompt("Usted eligió la opción", modeloElegido);
let totalCompra = 0;
// usar while mientras la opcion sea mayor a cero o igual o menor a 4

if (modeloElegido == "a"){
    celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaE20  \n 2) MotorolaE22 \n 3) MotorolaE32 \n 4) MotorolaE40:" ));
    if(celularElegido == 1 ){
        totalCompra += MotorolaE20;
        alert("Usted a comprado el MotorolaE20");
    }else if(celularElegido == 2){
        totalCompra += MotorolaE22;
        alert("Usted a comprado el MotorolaE20");
    }else if(celularElegido == 3){
        totalCompra += MotorolaE32;
        alert("Usted a comprado el MotorolaE20");
    }else{
        totalCompra += MotorolaE40;
        alert("Usted a comprado el MotorolaE20");
    }
}
if (modeloElegido == "b"){
    celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaG22  \n 2) MotorolaG32 \n 3) Motorola42 \n 4) MotorolaE52 \n 4) MotorolaG82:" ));
    if(celularElegido == 1 ){
        totalCompra += MotorolaG22;
        alert("Usted a comprado el MotorolaG22");
    }else if(celularElegido == 2){
        totalCompra += MotorolaG32;
        alert("Usted a comprado el MotorolaG32");
    }else if(celularElegido == 3){
        totalCompra += Motorola;
        alert("Usted a comprado el MotorolaG42");
    }else if(celularElegido == 3){
        totalCompra += MotorolaG42;
        alert("Usted a comprado el MotorolaG52");
    }else{
        totalCompra += MotorolaG82;
        alert("Usted a comprado el MotorolaG82");
    }
}
if (modeloElegido == "c"){
    celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaG22  \n 2) MotorolaG32 \n 3) Motorola42 \n 4) MotorolaE52 \n 5) MotorolaG82:" ));
    if(celularElegido == 1 ){
        totalCompra += MotorolaG22;
        alert("Usted a comprado el MotorolaG22");
    }else if(celularElegido == 2){
        totalCompra += MotorolaG32;
        alert("Usted a comprado el MotorolaG32");
    }else if(celularElegido == 3){
        totalCompra += Motorola;
        alert("Usted a comprado el MotorolaG42");
    }else if(celularElegido == 3){
        totalCompra += MotorolaG42;
        alert("Usted a comprado el MotorolaG52");
    }else{
        totalCompra += MotorolaG82;
        alert(`Usted a comprado el ${MotorolaG82}`);
        alert(`El total de la compra es ${totalCompra}`);

    }
}

    // prompt("Usted eligió la opción", celularElegido);
    // totalCompra += celularElegido;
    // prompt("El total es", totalCompra);
    // alert("Usted completó la compra");


// let compra = parseInt(prompt("Querés comprar el moto e22?"));

// if (compra == 1) {
//     Total += MotorolaE22
//     alert("Usted Compró el moto e 22")
//     alert("El monto total de la compra es: " + MotorolaE22)
// }


// ingresar qué celular quiere comprar
// calcular total
//calcular precio con descuento 
//y calcular precio con promocion
// funcion para seleccionar el producto
// fuincion para realizar la compra
// funcion para aplicar descuento

// como usa un ciclo? 
