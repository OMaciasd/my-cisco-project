// URL de la API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Elementos del DOM
const statusElement = document.getElementById('status');
const tableBody = document.getElementById('posts-table');

// Función para obtener los datos de la API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Limpiar mensaje de estado
        statusElement.textContent = '';

        // Generar filas de la tabla dinámicamente
        data.forEach(post => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${post.id}</td>
                <td>${post.title}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
        statusElement.textContent = 'Error al cargar los datos';
    });
