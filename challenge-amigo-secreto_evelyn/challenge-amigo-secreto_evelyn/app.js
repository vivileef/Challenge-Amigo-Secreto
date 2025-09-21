// Lista donde se almacenan los nombres de los amigos
let listaAmigos = [];


/**
 * Función que obtiene el valor escrito en el input
 * y lo agrega a la lista de amigos si pasa las validaciones.
 */
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // quitamos espacios extra

    // Validaciones con condicionales (tentativas)
    if (nombre === "") {
        mostrarMensaje("⚠️ Por favor escribe un nombre válido.", "resultado");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        mostrarMensaje(`⚠️ El nombre "${nombre}" ya fue agregado.`, "resultado");
        return;
    }

    // Si pasa las validaciones, se agrega a la lista
    listaAmigos.push(nombre);
    actualizarListaAmigos();

    // Limpiar el input después de añadir
    input.value = "";
    input.focus();
}


/**
 * Función que actualiza visualmente la lista en pantalla
 */
function actualizarListaAmigos() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // limpiar antes de volver a pintar

    // Usamos loop para recorrer los amigos
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        // Concatenación de índice + nombre
        li.textContent = `${i + 1}. ${listaAmigos[i]}`;
        ul.appendChild(li);
    }
}


/**
 * Función que realiza el sorteo del amigo secreto
 */
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        mostrarMensaje("⚠️ Agrega al menos 2 amigos para realizar el sorteo.", "resultado");
        return;
    }

    // Sorteamos un índice aleatorio
    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indice];

    mostrarMensaje(`🎉 Tu amigo secreto es: ${amigoSecreto}`, "resultado");
}


/**
 * Función utilitaria para mostrar mensajes en pantalla
 */
function mostrarMensaje(mensaje, idElemento) {
    const ul = document.getElementById(idElemento);
    ul.innerHTML = ""; // limpiar antes de mostrar

    const li = document.createElement("li");
    li.textContent = mensaje;
    ul.appendChild(li);
}
