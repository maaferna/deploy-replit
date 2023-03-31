function saludo() {
  alert("Hola mundo");
  var nombre = prompt("Ingrese su nombre:");
  alert("hola " + nombre);
}

function despedida() {
  alert("Gracias por visitar la pagina");
}

var inicio = document.getElementsByClassName("link")[0];

inicio.addEventListener("click", function() {
  saludo();
});

var segundo = document.getElementsByClassName("link")[1];

segundo.addEventListener("click", function() {
  despedida();
});

var selectorEtiqueta = document.getElementById("parrafo");

var selectorClass = document.getElementsByClassName("contenedor");
for(let i = 0; i < selectorClass.length; i ++){
 console.log(selectorClass[i].innerHTML);
}

function add_function() {
  const creandoElemento = document.createElement("p");
  
  const textnode = document.createTextNode("Este nodo fue creado desde JavaScript");
  creandoElemento.appendChild(textnode);
  document.getElementById("add").appendChild(creandoElemento);
  }

function mostrarMensaje() {
document.getElementById("boxz").style.display="block";
}


function ocultarMensaje() {
document.getElementById("box2").style.display="none";
}

function cambiarFondo() {
  document.getElementById("btn1").style.backgroundColor = "blue";
}

function cambiarFont() {
  document.getElementById("btn2").innetHTML="Change text"
}