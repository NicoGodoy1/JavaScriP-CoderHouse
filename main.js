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
let MotorolaEdge30Ultra = 75000.00;
let MotorolaEdge30Neo = 80000.00;
let MotorolaEdge30Pro = 85000.00;
let MotorolaEdge30fusionSE = 90000.00; 



alert("Hola, muy buenas tardes, ¡Bienvenido a nuestro sitio web\ndonde vas a encontrar los últimos modelos de celulares!")

totalCompra = 0
function Comprar() {
    let totalCompra = 0;
    let modeloElegido = prompt("Indiquenos cuál familia de motorola desea comprar: \n a) Moto E \n b) Moto G \n c) Moto Edge:" );
    modeloElegido = modeloElegido.toLowerCase()
    while (modeloElegido == "a" || "b" || "c") {
        if (modeloElegido == "a"){
            celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaE20  \n 2) MotorolaE22 \n 3) MotorolaE32 \n 4) MotorolaE40:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaE20;
                alert("Usted agregó al carrito el MotorolaE20");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else if(celularElegido == 2){
                totalCompra += MotorolaE22;
                alert("Usted agregó al carrito el MotorolaE20");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaE32;
                alert("Usted agregó al carrito el MotorolaE20");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else{
                totalCompra += MotorolaE40;
                alert("Usted agregó al carrito el MotorolaE20");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }
        }
        else if (modeloElegido == "b"){
            celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaG22  \n 2) MotorolaG32 \n 3) Motorola42 \n 4) MotorolaE52 \n 5) MotorolaG82:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaG22;
                alert("Usted agregó al carrito elMotorolaG22");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else if(celularElegido == 2){
                totalCompra += MotorolaG32;
                alert("Usted agregó al carrito el MotorolaG32");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaG42;
                alert("Usted agregó al carrito el MotorolaG42");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else if(celularElegido == 4){
                totalCompra += MotorolaG42;
                alert("Usted agregó al carrito el MotorolaG52");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else{
                totalCompra += MotorolaG82;
                alert("Usted agregó al carrito el MotorolaG82");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }
        }
        else{
            celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaEdge30Fusion  \n 2) MotorolaEdge30Ultra \n 3) MotorolaEdge30Neo \n 4) MotorolaEdge30Pro \n 5) MotorolaEdge30FusionSe:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaEdge30fusion;
                alert("Usted agregó al carrito el MotorolaEdge30Fusion");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else if(celularElegido == 2){
                totalCompra += MotorolaEdge30Ultra;
                alert("Usted agregó al carrito el MotorolaEdge30Ultra");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaEdge30Neo;
                alert("Usted agregó al carrito el MotorolaEdge30Neo");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaEdge30Pro;
                alert("Usted agregó al carrito el MotorolaEdge30Pro");
                alert(`El subtotal de la compra es ${totalCompra}`);
            }else{
                totalCompra += MotorolaEdge30fusionSE;
                alert(`Usted agregó al carrito el MotorolaEdge30fusionSE`);
                alert(`El subtotal de la compra es ${totalCompra}`);
            }
  
        }
    return totalCompra
    }
}


function comprarOtro() {
    agregar = parseInt(prompt("Desea agregar otro producto? \n 1) Sí. \n 2) No."))
    let totalCompra = 0;
    let modeloElegido = prompt("Indiquenos cuál familia de motorola desea agregar: \n a) Moto E \n b) Moto G \n c) Moto Edge:" );
    if (agregar == 1) {
        while (modeloElegido == "a" || "b" || "c") {
            if (modeloElegido == "a"){
                celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaE20  \n 2) MotorolaE22 \n 3) MotorolaE32 \n 4) MotorolaE40:" ));
                if(celularElegido == 1 ){
                    totalCompra += MotorolaE20;
                    alert("Usted agregó al carrito el MotorolaE20");
                }else if(celularElegido == 2){
                    totalCompra += MotorolaE22;
                    alert("Usted agregó al carrito el MotorolaE20");
                }else if(celularElegido == 3){
                    totalCompra += MotorolaE32;
                    alert("Usted agregó al carrito el MotorolaE20");
                }else{
                    totalCompra += MotorolaE40;
                    alert("Usted agregó al carrito el MotorolaE20");
                }
                return totalCompra
            }
            else if (modeloElegido == "b"){
                celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaG22  \n 2) MotorolaG32 \n 3) Motorola42 \n 4) MotorolaE52 \n 5) MotorolaG82:" ));
                if(celularElegido == 1 ){
                    totalCompra += MotorolaG22;
                    alert("Usted agregó al carrito el MotorolaG22");
                }else if(celularElegido == 2){
                    totalCompra += MotorolaG32;
                    alert("Usted agregó al carrito el MotorolaG32");
                }else if(celularElegido == 3){
                    totalCompra += Motorola;
                    alert("Usted agregó al carrito el MotorolaG42");
                }else if(celularElegido == 4){
                    totalCompra += MotorolaG42;
                    alert("Usted agregó al carrito el MotorolaG52");
                }else{
                    totalCompra += MotorolaG82;
                    alert("Usted agregó al carrito el MotorolaG82");
                }
                return totalCompra
            }
            else{
                celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaEdge30Fusion  \n 2) MotorolaEdge30Ultra \n 3) MotorolaEdge30Neo \n 4) MotorolaEdge30Pro \n 5) MotorolaEdge30FusionSe:" ));
                if(celularElegido == 1 ){
                    totalCompra += MotorolaEdge30fusion;
                    alert("Usted agregó al carrito el MotorolaEdge30Fusion");
                }else if(celularElegido == 2){
                    totalCompra += MotorolaEdge30Ultra;
                    alert("Usted agregó al carrito el MotorolaEdge30Ultra");
                }else if(celularElegido == 3){
                    totalCompra += MotorolaEdge30Neo;
                    alert("Usted agregó al carrito el MotorolaEdge30Neo");
                }else if(celularElegido == 3){
                    totalCompra += MotorolaEdge30Pro;
                    alert("Usted agregó al carrito el MotorolaEdge30Pro");
                }else{
                    totalCompra += MotorolaEdge30fusionSE;
                    alert(`Usted agregó al carrito el MotorolaEdge30fusionSE`);
                }
                return totalCompra
            }
        };
    } else {
        totalCompra = 0
        alert("Muchísimas gracias por comprar en nuestro sitio.")
        return totalCompra
    } 
}


let valor1 = Comprar();

let valor2 = comprarOtro();


let valorTotal = valor1 + valor2;

function saberTotal() {
    respuesta = parseInt(prompt("¿Desea saber el total de su compra? \n 1) Sí. \n 2)No. \n 3) Abandonar la compra."))
    if (respuesta == 1) {
        alert(`El total final de su compra es: ${valorTotal}`)
        alert(`Gracias por comprar en nuestro sitio`)
    }else if (respuesta == 2){
        respuesta2= parseInt(prompt("Quiere agregar otro producto?\n 1) Sí. \n 2) No."))
        while (respuesta2 == 1){
            const listaPrecios = []
            valor3= comprarOtro()
            suma = valor3 + valor1 + valor2;
            alert(`Gracias por visitar nuestro sitio.\n Lo esperamos cuando desee realizar el pedido.\n El total de su compra es ${suma}`)
            break
        }
    }else {
        alert("Gracias por visitar nuestro sitio.\n Lo esperamos cuando desee realizar el pedido")
    }
}

 saberTotal()
