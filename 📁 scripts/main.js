import { createButton } from './button.js';

document.body.appendChild(createButton('Haz clic aquí'));

document.getElementById("fetchButton").addEventListener("click", () => {
 fetch("data/data.json")
     .then((response) => response.json())
     .then((data) => {
         document.getElementById("output").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
     })
     .catch((err) => console.error(err));
});

// Función para cargar componentes
function loadComponent(selector, file) {
 fetch(file)
   .then(response => response.text())
   .then(data => {
     document.querySelector(selector).innerHTML = data;
   })
   .catch(error => console.error(`Error al cargar ${file}:`, error));
}

// Cargar encabezado y pie de página
loadComponent('header', './components/header.html');
loadComponent('footer', './components/footer.html');
