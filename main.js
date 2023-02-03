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



alert("Hola, muy buenas tardes, ¡Bienvenido/a a nuestro sitio web\ndonde vas a encontrar los últimos modelos de celulares!")

totalCompra = 0
function Comprar() {
    let totalCompra = 0;
    let modeloElegido = prompt("Ingrese la letra de la familia de motorola que desea comprar: \n a) Moto E \n b) Moto G \n c) Moto Edge:" );
    modeloElegido = modeloElegido.toLowerCase()
    while (modeloElegido == "a" || "b" || "c") {
        if (modeloElegido == "a"){
            celularElegido = parseInt(prompt("Indica el número del celular quieres comprar: \n 1) Motorola E20  \n 2) Motorola E22 \n 3) Motorola E32 \n 4) Motorola 40:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaE20;
                alert("Agregaste al carrito el MotorolaE20");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else if(celularElegido == 2){
                totalCompra += MotorolaE22;
                alert("Agregaste al carrito el MotorolaE22");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaE32;
                alert("Agregaste al carrito el Motorola E32");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else{
                totalCompra += MotorolaE40;
                alert("Agregaste al carrito el Motorola E40");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }
        }else if (modeloElegido == "b"){
            celularElegido = parseInt(prompt("Indica el número celular quieres comprar: \n 1) Motorola G22  \n 2) Motorola G32 \n 3) Motorola 42 \n 4) Motorola E52 \n 5) Motorola G82:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaG22;
                alert("Agregaste al carrito elMotorola G22");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else if(celularElegido == 2){
                totalCompra += MotorolaG32;
                alert("Agregaste al carrito el MotorolaG32");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaG42;
                alert("Agregaste al carrito el Motorola G42");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else if(celularElegido == 4){
                totalCompra += MotorolaG52;
                alert("Agregaste al carrito el Motorola G52");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else{
                totalCompra += MotorolaG82;
                alert("Agregaste al carrito el Motorola G82");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }
        }else{
            celularElegido = parseInt(prompt("Indica el número del celular quieres comprar: \n 1) Motorola Edge 30Fusion  \n 2) Motorola Edge 30Ultra \n 3) Motorola Edge 30Neo \n 4) Motorola Edge 30Pro \n 5) Motorola Edge 30Fusion SE:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaEdge30fusion;
                alert("Agregaste al carrito el MotorolaEdge 30 Fusion");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else if(celularElegido == 2){
                totalCompra += MotorolaEdge30Ultra;
                alert("Agregaste al carrito el MotorolaEdge 30Ultra");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaEdge30Neo;
                alert("Agregaste al carrito el Motorola Edge 30Neo");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaEdge30Pro;
                alert("Agregaste al carrito el Motorola Edge 30Pro");
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }else{
                totalCompra += MotorolaEdge30fusionSE;
                alert(`Agregaste al carrito el MotorolaEdge 30fusion SE`);
                alert(`El subtotal de la compra es ${totalCompra} pesos`);
            }
  
        }
    return totalCompra
    }
}


function comprarOtro() {
    agregar = parseInt(prompt("Desea agregar otro producto? Elija el número \n 1) Sí. \n 2) No."))
    let totalCompra = 0;
    if (agregar == 1) {
        let modeloElegido = prompt("Elige la letra de la familia de motorola desea agregar: \n a) Moto E \n b) Moto G \n c) Moto Edge:" );
        while (modeloElegido == "a" || "b" || "c") {
            if (modeloElegido == "a"){
                celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) Motorola E20  \n 2) Motorola E22 \n 3) Motorola E32 \n 4) Motorola E40:" ));
                if(celularElegido == 1 ){
                    totalCompra += MotorolaE20;
                    alert("Agregaste al carrito el Motorola E20");
                }else if(celularElegido == 2){
                    totalCompra += MotorolaE22;
                    alert("Agregaste al carrito el Motorola E22");
                }else if(celularElegido == 3){
                    totalCompra += MotorolaE32;
                    alert("Agregaste al carrito el Motorola E32");
                }else{
                    totalCompra += MotorolaE40;
                    alert("Agregaste al carrito el Motorola E40");
                }
                return totalCompra
            }else if (modeloElegido == "b"){
                celularElegido = parseInt(prompt("Indica el número del celular que quieres comprar: \n 1) Motorola G22  \n 2) Motorola G32 \n 3) Motorola G42 \n 4) Motorola G52 \n 5) Motorola G82:" ));
                if(celularElegido == 1 ){
                    totalCompra += MotorolaG22;
                    alert("Agregaste al carrito el Motorola G22");
                }else if(celularElegido == 2){
                    totalCompra += MotorolaG32;
                    alert("Agregaste al carrito el Motorola G32");
                }else if(celularElegido == 3){
                    totalCompra += MotorolaG42;
                    alert("Agregaste al carrito el Motorola G42");
                }else if(celularElegido == 4){
                    totalCompra += MotorolaG52;
                    alert("Agregaste al carrito el Motorola G52");
                }else{
                    totalCompra += MotorolaG82;
                    alert("Agregaste al carrito el Motorola G82");
                }
                return totalCompra
            }else{
                celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) Motorola Edge 30Fusion  \n 2) Motorola Edge 30Ultra \n 3) Motorola Edge 30Neo \n 4) Motorola Edge 30Pro \n 5) MotorolaEdge 30Fusion SE:" ));
                if(celularElegido == 1 ){
                    totalCompra += MotorolaEdge30fusion;
                    alert("Agregaste al carrito el Motorola Edge 30Fusion");
                }else if(celularElegido == 2){
                    totalCompra += MotorolaEdge30Ultra;
                    alert("Agregaste al carrito el Motorola Edge 30Ultra");
                }else if(celularElegido == 3){
                    totalCompra += MotorolaEdge30Neo;
                    alert("Agregaste al carrito el Motorola Edge 30Neo");
                }else if(celularElegido == 3){
                    totalCompra += MotorolaEdge30Pro;
                    alert("Agregaste al carrito el Motorola Edge 30Pro");
                }else{
                    totalCompra += MotorolaEdge30fusionSE;
                    alert(`Agregaste al carrito el Motorola Edge 30fusion SE`);
                }
                return totalCompra
            }
        };
    } else if (agregar == 2) {
        alert("¡Perfecto! A continuación indica si quiere sabe el monto total de su compra")
        totalCompra = 0
        return totalCompra 
    }else {
        totalCompra = 0
        alert("Recuerda que debe elegir entre opción 1 y 2. A continuación, \n indica si quieres saber el monto total de su compra")
        return totalCompra
    } 
}

function saberTotal() {
    respuesta = parseInt(prompt("¿Desea saber el total de su compra? \n 1) Sí. \n 2)No. \n 3) Abandonar la compra."))
    if (respuesta == 1) {
        alert(`El total final de su compra es: ${valorTotal} pesos`)
        alert(`¡Gracias por comprar en nuestro sitio!`)
    }else if (respuesta == 2){
        respuesta2= parseInt(prompt("Quiere agregar otro producto?\n 1) Sí. \n 2) No."))
        while (respuesta2 == 1){
            const listaPrecios = []
            valor3= comprarOtro()
            suma = valor3 + valor1 + valor2;
            alert(`Se pueden realizar hasta 3 compras por vez.\n El total de su compra es ${suma} pesos`)
            break
        }
    }else {
        alert("Gracias por visitar nuestro sitio.\n Lo esperamos cuando desee realizar el pedido")
    }
}

// Ejecución del programa principal

let valor1 = Comprar();

let valor2 = comprarOtro();

let valorTotal = valor1 + valor2;


 saberTotal()
