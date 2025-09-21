# 🎁 Challenge Amigo Secreto

Este es un proyecto simple e interactivo que permite a los usuarios ingresar nombres de amigos y sortear aleatoriamente quién será el **amigo secreto**.  
El objetivo es practicar lógica de programación, estructuras de datos, condicionales y manipulación del DOM con **JavaScript**.

---

## 🚀 Tecnologías utilizadas
- **HTML5** → estructura de la página.  
- **CSS3** → estilos y diseño.  
- **JavaScript (Vanilla)** → lógica del programa, manipulación del DOM y dinámicas de interacción.  

---

## 📌 Funcionalidades principales
1. **Añadir amigos**  
   - El usuario escribe un nombre y lo agrega a la lista.  
   - Se valida que no esté vacío ni duplicado.  

2. **Visualización dinámica de la lista**  
   - Cada nombre agregado se muestra en pantalla con un número de orden.  

3. **Sorteo de amigo secreto**  
   - Cuando hay al menos 2 amigos en la lista, se puede realizar un sorteo.  
   - El programa selecciona aleatoriamente un amigo y muestra el resultado.  

4. **Mensajes interactivos**  
   - Se muestran mensajes en pantalla para avisar errores (ej. nombre repetido o sorteo sin suficientes amigos).  

---

## 🛠️ Código principal (`app.js`)
El archivo contiene la lógica del proyecto, organizada en funciones:

- `agregarAmigo()` → agrega un nombre validado a la lista.  
- `actualizarListaAmigos()` → pinta la lista en pantalla usando un loop.  
- `sortearAmigo()` → selecciona aleatoriamente un amigo secreto.  
- `mostrarMensaje()` → muestra mensajes dinámicos en la interfaz.


