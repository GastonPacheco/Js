let carrito = [];
let cantidadTotal = 0;

function agregarProducto() {
  let producto = prompt("Ingrese el nombre del producto que desea comprar (Figura, Busto, Mate, Cuadro, Llavero)");
  let cantidad = Number(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));

  let precioUnitario = obtenerPrecioUnitario(producto);
  if (precioUnitario !== null) {
    let precioTotal = precioUnitario * cantidad;
    let productoEnCarrito = {
      nombre: producto,
      cantidad: cantidad,
      precioUnitario: precioUnitario,
      precioTotal: precioTotal
    };

    carrito.push(productoEnCarrito);
    cantidadTotal += cantidad;
    alert(`El producto se ha agregado al carrito:\n${producto} - Cantidad: ${cantidad}`);
  } else {
    alert("El producto ingresado no está disponible.");
  }
}

function obtenerPrecioUnitario(producto) {
  let precios = {
    figura: 5000,
    busto: 3000,
    mate: 2500,
    cuadro: 4000,
    llavero: 1000
  };

  return precios[producto.toLowerCase()] || null;
}

function verCarrito() {
  if (carrito.length === 0) {
    alert("El carrito de compras está vacío.");
  } else {
    let mensaje = "Productos en el carrito:\n";
    for (let producto of carrito) {
      mensaje += `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio Total: ${producto.precioTotal} pesos\n`;
    }
    mensaje += `Cantidad total de productos: ${cantidadTotal}\n`;
    alert(mensaje);
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
        alert("Gracias por utilizar el carrito de compras.");
        break;
      default:
        alert("Opción inválida.");
    }
  } while (operacion !== "3");
}

iniciarCarrito();

