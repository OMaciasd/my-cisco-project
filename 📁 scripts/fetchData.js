fetch('./data.json')
  .then(response => response.json())
  .then(posts => {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'col-md-4';
      postElement.innerHTML = `
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.content}</p>
          </div>
        </div>
      `;
      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error('Error cargando los datos:', error));
