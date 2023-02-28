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