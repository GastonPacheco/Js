let carrito = "";
let totalCarrito = 0;
let cantidadTotal = 0;

function agregarProducto() {
  let producto = prompt("Ingrese el nombre del producto que desea comprar (Figura, Busto, Mate, Cuadro, Llavero)");
  let cantidad = Number(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));

  let precioUnitario = obtenerPrecioUnitario(producto);
  if (precioUnitario !== null) {
    let precioTotal = precioUnitario * cantidad;
    carrito += `${producto} - Cantidad: ${cantidad} - Precio Total: ${precioTotal} pesos\n`;
    totalCarrito += precioTotal;
    cantidadTotal += cantidad;
    alert(`El producto se ha agregado al carrito:\n${producto} - Cantidad: ${cantidad}`);
  } else {
    alert("El producto ingresado no está disponible.");
  }
}

function obtenerPrecioUnitario(producto) {
  let precio = null;

  switch (producto.toLowerCase()) {
    case "figura":
      precio = 5000;
      break;
    case "busto":
      precio = 3000;
      break;
    case "mate":
      precio = 2500;
      break;
    case "cuadro":
      precio = 4000;
      break;
    case "llavero":
      precio = 1000;
      break;
  }

  return precio;
}

function verCarrito() {
  if (carrito === "") {
    alert("El carrito de compras está vacío.");
  } else {
    alert(`Productos en el carrito:\n${carrito}\nCantidad total de productos: ${cantidadTotal}\nTotal valor del carrito: ${totalCarrito} pesos`);
  }
}

function iniciarCarrito() {
  let operacion;

  do {
    operacion = prompt("Seleccione una opción:\n1. Agregar producto al carrito\n2. Ver carrito\n3. Salir");

    switch (operacion) {
      case "1":
        agregarProducto();
        break;
      case "2":
        verCarrito();
        break;
      case "3":
        alert("Gracias por utilizar el carrito de compras");
        break;
      default:
        alert("Opción inválida.");
    }
  } while (operacion !== "3");
}

iniciarCarrito();
