//CARRITO VACíO ARRAY
carrito = [];
carritoPrueba = [];
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

    constructor(id, nombre, precio, url) {
        this.id = id;
        this.nombre =  nombre;
        this.precio = parseFloat(precio);
        this.url = url
    }
    agregarCarrito(producto) {
        carrito.push(producto)
        alert(`${producto} fue agreado al carrito`);
    }
}

// // ARRAY DE PRODUCTOS 
const productos = [];

const producto1 = new Producto(1,"motoe20", 35000.00, "./recursos/productos/motorE20.png");
const producto2 = new Producto(2,"motoe40", 40000.00, "./recursos/productos/motoE40.png");
const producto3 = new Producto(3,"motoe32", 45000.00, "./recursos/productos/motoE32.png");
const producto4 = new Producto(4,"motog22", 50000.00, "./recursos/productos/motoG22.png");
const producto5 = new Producto(5,"motog32", 55000.00, "./recursos/productos/motoG32.png");
const producto6 = new Producto(6,"motog42", 60000.00, "./recursos/productos/motoG42.png");
const producto7 = new Producto(7,"motog52", 65000.00, "./recursos/productos/motoG52.png");
const producto8 = new Producto(8,"motog82", 70000.00, "./recursos/productos/motoG82.png");
const producto9 = new Producto(9,"motoedge30ultra", 75000.00, "./recursos/productos/motoEdge30ultra.png");
const producto10 = new Producto(10,"motoedge30fusionse", 80000.00, "./recursos/productos/motoEdge30fusionSe.png");
const producto11 = new Producto(11,"motoedge30fusion", 85000.00, "./recursos/productos/motoEdge30Fusion.png");
const producto12 = new Producto(12,"motoedge30neo", 90000.00, "./recursos/productos/motoEdge30ultraNeo.png");
const producto13 = new Producto(13,"motoedge30", 95000.00, "./recursos/productos/motoEdge30.png");


productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);
productos.push(producto8);
productos.push(producto9);
productos.push(producto10);
productos.push(producto11);
productos.push(producto12);
productos.push(producto13);

//  DOM

let contenedor = document.getElementById("cards");

// const products = [
//   {id: 1, nombre: "motoe20", precio: 35000.00},
//   {id: 2, nombre: "motoe40", precio: 40000.00},
//   {id: 3, nombre: "motoe32", precio: 45000.00},
//   {id: 4, nombre: "motog22", precio: 50000.00},
//   {id: 5, nombre: "motog32", precio: 55000.00},
//   {id: 6, nombre: "motog42", precio: 60000.00},
//   {id: 7, nombre: "motog52", precio: 65000.00},
//   {id: 8, nombre: "motog82", precio: 70000.00},
// ];

productos.forEach(item => {
  contenedor.innerHTML += `
    <div class="col-lg-3 col-md-6 col-sm-4">
          <div class="card tarjetas__efecto" >
            <img src="${item.url}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">${item.nombre}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center fs-3 fw-bold">${item.precio}</li>
              <li class="list-group-item text-success bg-success bg-opacity-25 text-center p-1 fw-bold">¡Llega mañana!</li>
              <a href="https://www.motorola.com.ar/moto-g52/p"></a><button id="agregarCarrito" class="btn-morado align-items-center mx-2 my-2" type="button" dataValor="${item.precio}">Comprar</button></a>
              <h6 class="text-center">producto N°: ${item.id}</h6>
            </ul>
          </div>
        </div>
  `;
});

// EVENTOS 

// boton.addEventListener("mouseover", () => {
//   saludo.className = "azul";
// });
// boton.addEventListener("click", () => console.log("click"));

let botonComprar = document.getElementById("agregarCarrito");

botonComprar.addEventListener("click", function() {
    let valorProducto = parseInt(botonComprar.getAttribute("dataValor"));
    carrito.push(valorProducto);
    alert(`Sumo al carrito un producto que vale ${valorProducto}`); 
  });

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
