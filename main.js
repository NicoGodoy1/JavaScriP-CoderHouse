//CARRITO VACíO ARRAY
carrito = [];

// FUNCIONES QUE CALCULAN LOS DESCUENTOS E INTERESES
function efectivo(monto) {
    monto = monto - (monto*0.2)
    return monto
}
function credito(monto) {
    monto = monto + (monto*0.1)
    return monto
}


// DECLARACIÓN OBJETOS: PRODUCTO Y CLIENTE
class Producto {

    constructor(nombre, precio) {
        this.nombre =  nombre;
        this.precio = parseFloat(precio);
        // this.vendido = false;
    }
    // vender() {
    //     alert("Hola, soy el producto" + this.nombre)
    // }
    agregarCarrito(producto) {
        // carrito.push(precio)
        alert(${producto} + " fue agreado al carrito")
    }
}

// FUNCION QUE SUMA TODOS LOS VALORES DEL CARRITO []
// function calcularTotal() {
//     const suma = carrito.reduce((partialSum, a) => partialSum + a, 0);
//     alert(suma);
//     return suma
// }

// ARRAY DE PRODUCTOS 
const productos = [];

producto1 = new Producto("MotoE20", 35000.00);
producto2 = new Producto("MotoE40", 40000.00);
producto3 = new Producto("MotoE32", 45000.00);
producto4 = new Producto("MotoG22", 50000.00);
producto5 = new Producto("MotoG32", 55000.00);
producto6 = new Producto("MotoG42", 60000.00);
producto7 = new Producto("MotoG52", 65000.00);
producto8 = new Producto("MotoG82", 70000.00);

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);


   
class Cliente {

    constructor(dni, nombre, apellido, direccion, correo) {
        this.dni =  dni
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.correo = correo;
    }
    comprar() {
        let productoComprar = prompt("Ingrese el NOMBRE del producto que desea comprar:\n 1) MotoE20  \n 2) MotoE32 \n 4) MotoE40 \n 5) MotoG22  \n 6) MotoG32 \n 7) MotoG42 \n 8) MotoE52 \n 9) MotoG82");
        // carrito.push(producto.precio)
        // alert(productoComprar)
        agregarCarrito = productos.filter((el)=> el.nombre.includes(productoComprar));
        // alert(JSON.stringify(agregarCarrito))
        precioComprar = parseInt(agregarCarrito.map((el)=> el.precio));
        // alert(JSON.stringify(precioComprar))
        carrito.push((precioComprar));
        // alert(`El precio del producto es: ${carrito}`);
    }
    aplicarInteres() {
        let medioDePago = prompt("Elija el medio de pago: \n 1) Efectivo o débito (20% descuento) \n 2) Crédito en 3 cuotas (10% interés)")
        while (medioDePago == 1 || 2 ) {
            if (medioDePago == 1) {
                sumaEfectivo = efectivo(parseInt(calcularTotal()));
                alert(`- El subtotal es ${suma} pesos.\n- El total final con 10% de descuento es ${sumaEfectivo} pesos.\n\n--- Rescibirás el producto en las próximas 24hs.---\n\n---La/lo invitamos a conocer nuestros CELU YA CRÉDITOS con la mejor tasa.---\n \n ¡¡Gracias por su compra!!`);
                return sumaEfectivo
            } else if (medioDePago == 2){
                sumaCredito = credito(parseInt(calcularTotal()));
                alert(`- El subtotal es: ${suma} pesos.\n- El total final con el 10% de interés es ${sumaCredito} pesos.\n\n--- Rescibirás el producto en las próximas 24hs.---\n\n--- La/lo invitamos a conocer nuestros CELU YA CRÉDITOS con la mejor tasa.---\n \n ¡¡Gracias por su compra!!`)
                return sumaEfectivo
            } else {
                alert(`No ingresó un medio correcto, vuelva a intentar`)
                break
            }
        // alert("El precio del producto es: " + this.precio)
    }
    }
    // FUNCIONA
    finalizarCompra() {
        const final = carrito.reduce((partialSum, a) => partialSum + a, 0);
        alert(`El precio del producto es: ${final}`);
    }
    // FUNCIONA
    enviarCorreo(){
        alert("Se le ha enviado la factura al correo "+ this.correo)
    }
}

//PRUEBA

let agregarCarrito = productos.filter((el)=> el.nombre.includes("MotoE20"));
alert(JSON.stringify(agregarCarrito))
precioComprar = parseInt(agregarCarrito.map((el)=> el.precio));
alert(JSON.stringify(precioComprar))
carrito.push(precioComprar);
alert(carrito)



// const cliente1 = new Cliente(39329297,"Nico", "Godoy", "Colón 1098", "nicolasgastongodoy@gmail.com");
// cliente1.comprar();
// cliente1.finalizarCompra();
// cliente1.enviarCorreo();
// cliente1.aplicarInteres();

// -------------------------------------------------------------- 






// FUNCION PARA LA EJECUCIÓN DEL MENU
alert("Hola, muy buenas tardes, ¡Bienvenido/a a nuestro sitio web\ndonde vas a encontrar los últimos modelos de celulares!")

function ejecutarMenu () {
    let option = parseInt(prompt("¿Desea crear su usuario? \n 1) Sí \n 2) No"));
    while (option != 0) {
        if (option == 1){
            alert("-A continuación, ingrese sus datos para poder crear su usuario: ");
            let dni = prompt("Ingrese su n° de DNI: ");
            let nombre  = prompt("Ingrese su nombre: ");
            let apellido = prompt("Ingrese su apellido: ");
            let direccion = prompt("Ingrese su calle y altura: ");
            let correo = prompt("Ingrese su correo electrónico: ");
            // usuario = nombre;
            const usuarioUno = new Cliente(dni, nombre, apellido, direccion, correo);
            let accionCliente = prompt("¿Qué desea realizar?:\n 1) Comprar \n 2) Abandonar compra\n Ingrese la opción: ");
            if (accionCliente = 1) {
                usuarioUno.comprar();
                alert("Ahora, procederemos a pagar el producto")
                usuarioUno.aplicarInteres()
                usuarioUno.finalizarCompra();
                usuarioUno.enviarCorreo();
            } 
            else if (accionCliente = 2) {
                alert("Gracias por visitar nuestro sitio.\n Lo esperamos cuando desee realizar un pedido")
                break
            } else {
                alert("Debe seleccionar una opción correcta, vuelva a empezar.")
                break
            }
        }else {
            alert("Debe seleccionar una opción correcta, vuelva a empezar.")
            break
        }
    }
}

// LLAMADO A LA FUNCION DEL MENU 
ejecutarMenu()


// // FUNCION PARA SELECCIONAR LOS PRODUCTOS
// function Comprar() {
//     let totalCompra = 0;
//     let modeloElegido = prompt("Ingrese la letra de la familia de motorola que desea comprar: \n a) Moto E \n b) Moto G \n c) Moto Edge:" );
//     modeloElegido = modeloElegido.toLowerCase()
//     while (modeloElegido == "a" || "b" || "c") {
//         if (modeloElegido == "a"){
//             celularElegido = parseInt(prompt("Indica el número del celular quieres comprar: \n 1) Motorola E20  \n 2) Motorola E22 \n 3) Motorola E32 \n 4) Motorola E40" ));
//             if(celularElegido == 1 ){
//                 totalCompra += MotorolaE20;
//                 alert("Agregaste al carrito el MotorolaE20");
//             }else if(celularElegido == 2){
//                 totalCompra += MotorolaE22;
//                 alert("Agregaste al carrito el MotorolaE22");
//             }else if(celularElegido == 3){
//                 totalCompra += MotorolaE32;
//                 alert("Agregaste al carrito el Motorola E32");
//             }else{
//                 totalCompra += MotorolaE40;
//                 alert("Agregaste al carrito el Motorola E40");
//             }
//         }else if (modeloElegido == "b"){
//             celularElegido = parseInt(prompt("Indica el número celular quieres comprar: \n 1) Motorola G22  \n 2) Motorola G32 \n 3) Motorola 42 \n 4) Motorola E52 \n 5) Motorola G82:" ));
//             if(celularElegido == 1 ){
//                 totalCompra += MotorolaG22;
//                 alert("Agregaste al carrito elMotorola G22");
//             }else if(celularElegido == 2){
//                 totalCompra += MotorolaG32;
//                 alert("Agregaste al carrito el MotorolaG32");
//             }else if(celularElegido == 3){
//                 totalCompra += MotorolaG42;
//                 alert("Agregaste al carrito el Motorola G42");
//             }else if(celularElegido == 4){
//                 totalCompra += MotorolaG52;
//                 alert("Agregaste al carrito el Motorola G52");
//             }else{
//                 totalCompra += MotorolaG82;
//                 alert("Agregaste al carrito el Motorola G82");
//             }
//         }else{
//             celularElegido = parseInt(prompt("Indica el número del celular quieres comprar: \n 1) Motorola Edge 30Fusion  \n 2) Motorola Edge 30Ultra \n 3) Motorola Edge 30Neo \n 4) Motorola Edge 30Pro \n 5) Motorola Edge 30Fusion SE:" ));
//             if(celularElegido == 1 ){
//                 totalCompra += MotorolaEdge30fusion;
//                 alert("Agregaste al carrito el MotorolaEdge 30 Fusion");
//             }else if(celularElegido == 2){
//                 totalCompra += MotorolaEdge30Ultra;
//                 alert("Agregaste al carrito el MotorolaEdge 30Ultra");
//             }else if(celularElegido == 3){
//                 totalCompra += MotorolaEdge30Neo;
//                 alert("Agregaste al carrito el Motorola Edge 30Neo");
//             }else if(celularElegido == 3){
//                 totalCompra += MotorolaEdge30Pro;
//                 alert("Agregaste al carrito el Motorola Edge 30Pro");
//             }else{
//                 totalCompra += MotorolaEdge30fusionSE;
//                 alert(`Agregaste al carrito el MotorolaEdge 30fusion SE`);
//             }
//         }
//     return totalCompra
//     }
// }

// // FUNCION PARA LA EJECUCIÓN DEL MENU
// function ejecutarMenu () {
//     let option = parseInt(prompt(" Indiqué la opción que desee realizar \n 1) Agregar un producto al carrito \n 2) Salir del sitio"));
//     while (option != 0) {
//         if (option == 1){
//             num = parseInt(prompt("¿Cuántos celulares vas a comprar?"));
//             let suma = 0;
//             for(let i = 0; i < num; i++){
//                 numeroCompra = i + 1;
//                 alert(`Producto n° ${numeroCompra}`);
//                 suma += Comprar();
//             }
//             alert(`Has finalizado la selección. El total es ${suma} pesos`)
//             descuento = parseInt(prompt("Elija el medio de pago: \n 1) Efectivo o débito (20% descuento) \n 2) Crédito en 3 cuotas (10% interés)"))
//             while (descuento == 1 || 2 ) {
//                 if (descuento == 1) {
//                     sumaEfectivo = efectivo(suma);
//                     alert(`- El subtotal es ${suma} pesos.\n- El total final con 10% de descuento es ${sumaEfectivo} pesos.\n\n--- Rescibirás el producto en las próximas 24hs.---\n\n---La/lo invitamos a conocer nuestros CELU YA CRÉDITOS con la mejor tasa.---\n \n ¡¡Gracias por su compra!!`);
//                     return sumaEfectivo
//                 } else if (descuento == 2){
//                     sumaCredito = credito(suma);
//                     alert(`- El subtotal es: ${suma} pesos.\n- El total final con el 10% de interés es ${sumaCredito} pesos.\n\n--- Rescibirás el producto en las próximas 24hs.---\n\n--- La/lo invitamos a conocer nuestros CELU YA CRÉDITOS con la mejor tasa.---\n \n ¡¡Gracias por su compra!!`)
//                     return sumaEfectivo
//                 } else {
//                     alert(`No ingresó un medio correcto, vuelva a intentar`)
//                     break
//                 }
//             }
//             return listaCompras 
//         }else if (option == 2){
//             alert("Gracias por visitar nuestro sitio.\n Lo esperamos cuando desee realizar un pedido")
//             break

//         }else{
//             alert("Comience de nuevo y elija la opción 1 o 2")
//             break
//         }
//     }
// }
// // LLAMADO A LA FUNCION DEL MENU 
// ejecutarMenu()


// productos.forEach(item => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <h2>Id: ${item.id}</h2>
//       <p>Nombre: ${item.nombre}</p>
//       <b>$${item.precio}</b>
//       <button class="button">"Comprar"</button>
//     `;
  
//     container.append(div);
//   });

