
let colores = [];

function cargarColor() {
  const inputColor = document.getElementById('color');
  colores.push(inputColor.value);
  console.log(colores);
}

function mostrarColores(){
  const contenedor = document.getElementById('contenedor');

  contenedor.innerHTML = '';

  for (let index = 0; index < colores.length; index++) {
    contenedor.innerHTML += `<div class="caja-color" style="background-color: ${colores[index]}">${colores[index]}</div>`;
  }

  colores = [];
  console.log(colores);
  
}


function agregarTarjeta(){
  const inputTitulo = document.getElementById('titulo');
  const inputColor = document.getElementById('color2');
  const inputParrafo = document.getElementById('parrafo');

  const tarjetas = document.getElementById('tarjetas');

  tarjetas.innerHTML += `
    <div class="tarjeta">
      <h3>${inputTitulo.value}</h3>
      <div style="background-color: ${inputColor.value}">${inputColor.value}</div>
      <p>${inputParrafo.value}</p>
    </div>
  `;
}