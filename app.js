// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []


//Agregar amigo
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if(nombre == "") {
    alert("por favor, inserte un nombre");
    return;
  }
  amigos.push(nombre);
  actualizarLista();
  input.value = "";
};


//Actualizacion de la lista
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(amigo => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
} 

//Sortear amigo
function sortearAmigo() {
  if(amigos.length == 0) {
    alert('No hay amigos en la lista. Ingresa los nombres de tus amigos.')
  } else {
      let indiceAleatorio = Math.floor(Math.random() * amigos.length);
      let amigoSorteado = amigos[indiceAleatorio];

      document.getElementById("resultado").innerHTML = amigoSorteado
  }
}