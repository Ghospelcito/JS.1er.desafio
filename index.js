const cantidadElemento = document.querySelector(".cantidad");
const totalElemento = document.querySelector(".valor-total");
const botonIncremento = document.querySelector(".incrementa");
const botonDisminuye = document.querySelector(".disminuye");

let cantidad = 0;
const precioBase = 400000;

botonIncremento.onclick = () => {
  cantidad++;
  cantidadElemento.innerHTML = cantidad;
  totalElemento.innerHTML = `${cantidad * precioBase}`;
};

botonDisminuye.onclick = () => {
  cantidad = Math.max(0, cantidad - 1);
  cantidadElemento.innerHTML = cantidad;
  totalElemento.innerHTML = `${cantidad * precioBase}`;
};
