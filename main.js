let MotorolaE20 = 30000.00;
let MotorolaE40 = 35000.00; 
let MotorolaE22 = 40000.00;
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

let totalCompra = 0;

// FUNCION PARA SELECCIONAR LOS PRODUCTOS
function Comprar() {
    let totalCompra = 0;
    let modeloElegido = prompt("Ingrese la letra de la familia de motorola que desea comprar: \n a) Moto E \n b) Moto G \n c) Moto Edge:" );
    modeloElegido = modeloElegido.toLowerCase()
    while (modeloElegido == "a" || "b" || "c") {
        if (modeloElegido == "a"){
            celularElegido = parseInt(prompt("Indica el número del celular quieres comprar: \n 1) Motorola E20  \n 2) Motorola E22 \n 3) Motorola E32 \n 4) Motorola E40" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaE20;
                alert("Agregaste al carrito el MotorolaE20");
            }else if(celularElegido == 2){
                totalCompra += MotorolaE22;
                alert("Agregaste al carrito el MotorolaE22");
            }else if(celularElegido == 3){
                totalCompra += MotorolaE32;
                alert("Agregaste al carrito el Motorola E32");
            }else{
                totalCompra += MotorolaE40;
                alert("Agregaste al carrito el Motorola E40");
            }
        }else if (modeloElegido == "b"){
            celularElegido = parseInt(prompt("Indica el número celular quieres comprar: \n 1) Motorola G22  \n 2) Motorola G32 \n 3) Motorola 42 \n 4) Motorola E52 \n 5) Motorola G82:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaG22;
                alert("Agregaste al carrito elMotorola G22");
            }else if(celularElegido == 2){
                totalCompra += MotorolaG32;
                alert("Agregaste al carrito el MotorolaG32");
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
        }else{
            celularElegido = parseInt(prompt("Indica el número del celular quieres comprar: \n 1) Motorola Edge 30Fusion  \n 2) Motorola Edge 30Ultra \n 3) Motorola Edge 30Neo \n 4) Motorola Edge 30Pro \n 5) Motorola Edge 30Fusion SE:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaEdge30fusion;
                alert("Agregaste al carrito el MotorolaEdge 30 Fusion");
            }else if(celularElegido == 2){
                totalCompra += MotorolaEdge30Ultra;
                alert("Agregaste al carrito el MotorolaEdge 30Ultra");
            }else if(celularElegido == 3){
                totalCompra += MotorolaEdge30Neo;
                alert("Agregaste al carrito el Motorola Edge 30Neo");
            }else if(celularElegido == 3){
                totalCompra += MotorolaEdge30Pro;
                alert("Agregaste al carrito el Motorola Edge 30Pro");
            }else{
                totalCompra += MotorolaEdge30fusionSE;
                alert(`Agregaste al carrito el MotorolaEdge 30fusion SE`);
            }
        }
    return totalCompra
    }
}

// FUNCIONES QUE CALCULAN LOS DESCUENTOS E INTERESES
function efectivo(monto) {
    monto = monto - (monto*0.2)
    return monto
}
function credito(monto) {
    monto = monto + (monto*0.1)
    return monto
}

// FUNCION PARA LA EJECUCIÓN DEL MENU
function ejecutarMenu () {
    let option = parseInt(prompt(" Indiqué la opción que desee realizar \n 1) Agregar un producto al carrito \n 2) Salir del sitio"));
    while (option != 0) {
        if (option == 1){
            num = parseInt(prompt("¿Cuántos celulares vas a comprar?"));
            let suma = 0;
            for(let i = 0; i < num; i++){
                numeroCompra = i + 1;
                alert(`Producto n° ${numeroCompra}`);
                suma += Comprar();
            }
            alert(`Has finalizado la selección. El total es ${suma} pesos`)
            descuento = parseInt(prompt("Elija el medio de pago: \n 1) Efectivo o débito (20% descuento) \n 2) Crédito en 3 cuotas (10% interés)"))
            while (descuento == 1 || 2 ) {
                if (descuento == 1) {
                    sumaEfectivo = efectivo(suma);
                    alert(`- El subtotal es ${suma} pesos.\n-El total final con 10% de descuento es ${sumaEfectivo} pesos`);
                    return sumaEfectivo
                } else if (descuento == 2){
                    sumaCredito = credito(suma);
                    alert(`- El subtotal es: ${suma} pesos.\n- El total final con el 10% de interés es ${sumaCredito} pesos`)
                    return sumaEfectivo
                } else {
                    alert(`No ingresó un medio correcto, vuelva a intentar`)
                    break
                }
            }
            return listaCompras 
        }else if (option == 2){
            alert("Gracias por visitar nuestro sitio.\n Lo esperamos cuando desee realizar un pedido")
            break

        }else{
            alert("Comience de nuevo y elija la opción 1 o 2")
            break
        }
    }
}

// LLAMADO A LA FUNCION DEL MENU 
ejecutarMenu()