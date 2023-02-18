//CARRITO VACíO ARRAY
carrito = [];
baseDatosClientes = [];

// FUNCIONES QUE CALCULAN LOS DESCUENTOS E INTERESES
function efectivo(monto) {
    monto = monto - (monto*0.2)
    return monto
}
function credito(monto) {
    monto = monto + (monto*0.1)
    return monto
}


// DECLARACIÓN OBJETO PRODUCTO
class Producto {

    constructor(nombre, precio) {
        this.nombre =  nombre;
        this.precio = parseFloat(precio);
    }
    agregarCarrito(producto) {
        carrito.push(producto)
        alert(`${producto} fue agreado al carrito`);
    }
}

// ARRAY DE PRODUCTOS 
const productos = [];

producto1 = new Producto("motoe20", 35000.00);
producto2 = new Producto("motoe40", 40000.00);
producto3 = new Producto("motoe32", 45000.00);
producto4 = new Producto("motog22", 50000.00);
producto5 = new Producto("motog32", 55000.00);
producto6 = new Producto("motog42", 60000.00);
producto7 = new Producto("motog52", 65000.00);
producto8 = new Producto("motog82", 70000.00);

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);

//PRUEBA
let producto = prompt("Ingrese el NOMBRE del producto que desea comprar:\n 1) MotoE20  \n 2) MotoE32 \n 4) MotoE40 \n 5) MotoG22  \n 6) MotoG32 \n 7) MotoG42 \n 8) MotoG52 \n 9) MotoG82");
        productoComprar = producto.toLowerCase();
        let agregarCarrito = productos.filter((el)=> el.nombre.includes(productoComprar));
        precioComprar = parseInt(agregarCarrito.map((el)=> el.precio));
        carrito.push((precioComprar));

// DECLARO OBJETO CLIENTE    
class Cliente {

    constructor(dni, nombre, apellido, direccion, correo) {
        this.dni =  dni
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.correo = correo;
    }
    comprar() {
        let producto = prompt("Ingrese el NOMBRE del producto que desea comprar:\n 1) MotoE20  \n 2) MotoE32 \n 4) MotoE40 \n 5) MotoG22  \n 6) MotoG32 \n 7) MotoG42 \n 8) MotoG52 \n 9) MotoG82");
        productoComprar = producto.toLowerCase();
        let agregarCarrito = productos.filter((el)=> el.nombre.includes(productoComprar));
        precioComprar = parseInt(agregarCarrito.map((el)=> el.precio));
        carrito.push((precioComprar));
        return carrito
    }
    finalizarCompra() {
        const final = carrito.reduce((partialSum, a) => partialSum + a, 0);
        alert(`El precio total es: ${final}`);
        return final
    }
    enviarCorreo(){
        alert("Se le ha enviado la factura al correo "+ this.correo)
    }
}



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
            const usuarioUno = new Cliente(dni, nombre, apellido, direccion, correo);
            alert(`¡Perfecto, hemos creado su usuario!`)
            baseDatosClientes.push((usuarioUno));
            let accionCliente = prompt("¿Qué desea realizar?:\n 1) Comprar \n 2) Abandonar compra\n Ingrese la opción: ");
            if (accionCliente == 1) {
                usuarioUno.comprar();
                alert("Ahora, procederemos a pagar el producto")
                usuarioUno.finalizarCompra();
                let suma = usuarioUno.finalizarCompra(); 
                descuento = parseInt(prompt("Elija el medio de pago: \n 1) Efectivo o débito (20% descuento) \n 2) Crédito en 3 cuotas (10% interés)"))
                while (descuento == 1 || 2 ) {
                    if (descuento == 1) {
                        sumaEfectivo = efectivo(suma);
                        alert(`- El subtotal es ${suma} pesos.\n- El total final con 10% de descuento es ${sumaEfectivo} pesos.\n\n--- Rescibirás el producto en las próximas 24hs.---\n\n---La/lo invitamos a conocer nuestros CELU YA CRÉDITOS con la mejor tasa.---\n \n ¡¡Gracias por su compra!!`);
                        usuarioUno.enviarCorreo();
                        return sumaEfectivo
                    } else if (descuento == 2){
                        sumaCredito = credito(suma);
                        alert(`- El subtotal es: ${suma} pesos.\n- El total final con el 10% de interés es ${sumaCredito} pesos.\n\n--- Rescibirás el producto en las próximas 24hs.---\n\n--- La/lo invitamos a conocer nuestros CELU YA CRÉDITOS con la mejor tasa.---\n \n ¡¡Gracias por su compra!!`)
                        usuarioUno.enviarCorreo();
                        return sumaEfectivo
                    } else {
                        alert(`No ingresó un medio correcto, vuelva a intentar`)
                        break
                    }
                }
                break
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

function imprimirBaseDatos() {
    let op = parseInt(prompt("Desea mostrar en pantalla el cliente creado?:\n 1) Sí \n 2) No"))
    if (op == 1) {
        alert(JSON.stringify(baseDatosClientes))
    } else {
        alert("Muy buenas tardes")
    }
}

imprimirBaseDatos()

//  DOM

productos.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>Id: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
      <button class="button">"Comprar"</button>
    `;
  
    container.append(div);
  });