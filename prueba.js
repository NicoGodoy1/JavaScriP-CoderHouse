//  DOM
let contenedor = document.getElementById("cards");

const products = [
  {id: 1, nombre: "motoe20", precio: 35000.00},
  {id: 2, nombre: "motoe40", precio: 40000.00},
  {id: 3, nombre: "motoe32", precio: 45000.00},
  {id: 4, nombre: "motog22", precio: 50000.00},
  {id: 5, nombre: "motog32", precio: 55000.00},
  {id: 6, nombre: "motog42", precio: 60000.00},
  {id: 7, nombre: "motog52", precio: 65000.00},
  {id: 8, nombre: "motog82", precio: 70000.00},
];

products.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <div class="col-lg-3 col-md-6 col-sm-4">
          <div class="card tarjetas__efecto" >
            <img src="./recursos/productos/motoG52.png" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">${item.nombre}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center fs-3 fw-bold">${item.precio}</li>
              <li class="list-group-item text-success bg-success bg-opacity-25 text-center p-1 fw-bold">¡Llega mañana!</li>
              <a href="https://www.motorola.com.ar/moto-g52/p"></a><button class="btn-morado align-items-center mx-2 my-2" type="button">Comprar</button></a>
              <h2 >Id: ${item.id}</h2>
            </ul>
          </div>
        </div>
  `;

  contenedor.append(div);
});

// FUNCION PARA LA EJECUCIÓN DEL MENU
// alert("Hola, muy buenas tardes, ¡Bienvenido/a a nuestro sitio web\ndonde vas a encontrar los últimos modelos de celulares!")

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

// función que ordena los productos por precio de menor a mayor
function ordenarPorPrecioMenorAMayor(productos) {
  productos.sort((a, b) => a.precio - b.precio);
  return productos;
}
// función  que ordena los productos por precio de mayor a menor
function ordenarPorPrecioMayorAMenor(productos) {
  productos.sort((a, b) => b.precio - a.precio);
  return productos;
}
