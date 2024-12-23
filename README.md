# 📽️ Beginner Web Development: HTML, CSS, and JavaScript

This project introduces the basics of web development using **HTML**, **CSS**, and **JavaScript**. It includes examples and exercises to build a simple, responsive webpage with interactive features.

## 🗂️ Table of Contents

- [📽️ Beginner Web Development: HTML, CSS, and JavaScript](#️-beginner-web-development-html-css-and-javascript)
  - [🗂️ Table of Contents](#️-table-of-contents)
  - [📖 Project Description](#-project-description)
    - [🎯 Goals](#-goals)
    - [📂 Project Structure](#-project-structure)
  - [✅ Requirements](#-requirements)
  - [🔧 Installation and Setup](#-installation-and-setup)
  - [🛠️ Project Walkthrough](#️-project-walkthrough)
  - [📦 Extending the Project](#-extending-the-project)
  - [📈 Benefits](#-benefits)
  - [🏗️ Architecture](#️-architecture)
  - [🤝 Contributing](#-contributing)
  - [📜 License](#-license)

---

## 📖 Project Description

This project is a beginner-friendly introduction to web development. It demonstrates how to create a basic webpage with **HTML** for structure, **CSS** for styling, and **JavaScript** for interactivity.

---

### 🎯 Goals

1. **Learn HTML**: Understand how to structure a webpage using HTML.

2. **Apply CSS**: Style the webpage to make it visually appealing and responsive.

3. **Add Interactivity**: Use JavaScript to create interactive features like buttons and dynamic content.

4. **Containerization**: Web application.

5. **Docker volumes**: Development.

6. **Live data fetching**: APIs and styling with Bootstrap.

7. **Insights**: Container inspection and debugging.

---

### 📂 Project Structure

   ```plaintext
   📁
   ├── 📁 scripts
   │   ├── main.js
   │   ├── fetchData.js
   ├── 📁 styles
   │   └── main.css
   ├── 📁 data
   │   └── data.json
   ├── Dockerfile
   ├── docker-compose.yml
   ├── entrypoint.sh
   ├── default.conf
   ├── index.html
   ├── README.md

   ```

---

## ✅ Requirements

To start with this project, you’ll need:

- **A modern web browser**: Examples include [Google Chrome](https://www.google.com/chrome/), [Mozilla Firefox](https://www.mozilla.org/firefox/), or [Microsoft Edge](https://www.microsoft.com/edge).

- **A text editor or IDE**: We recommend using [Visual Studio Code](https://code.visualstudio.com/) for its features and ease of use.

- **Basic knowledge of HTML, CSS, and JavaScript**: While not mandatory, having a foundational understanding of these technologies will help you get the most out of this project.

---

## 🔧 Installation and Setup

1. Clone the repository:

   ```bash

   git clone https://github.com/omaciasd/beginner-web-development.git
   cd beginner-web-development

   ```

2. **Open the project:**:

   - Open index.html in your preferred web browser to view the webpage:

      - [http://localhost:8080](http://localhost:8080)

3. **Using Docker Compose:**:

   - The `docker-compose.yml` file simplifies the deployment process by orchestrating the build and runtime configurations of the containerized application.

4. **Volume Usage:**:

   - Is mounted to sync local development files with the container:

      - **Local directory**: ./app
      - **Container directory**: /app

   - Benefits:

      - Changes in local files are immediately reflected in the container.

5. **Inspecting Containers:**:

   - You can inspect running containers to verify volume mounting and other configurations:

      ```plaintext
      docker inspect app

      ```

   - Filter by `Mounts` in the JSON output:

      ```plaintext
      docker inspect app | jq '.[0].Mounts'

      ```

---

## 🛠️ Project Walkthrough

1. **HTML Structure:**:

   The index.html file contains the basic structure of the webpage:

      - **Headings** for titles.
      - **Paragraphs** for text.
      - **Buttons** and other interactive elements.
      - `scripts/`: Lógica en JavaScript.

2. **Styling with CSS:**:

   The styles.css file applies styles to the webpage:

      - Colors, margins, and fonts.
      - Styling for buttons and containers.
      - `styles/`: Estilos personalizados.

3. **Styling with CSS:**:

   The script.js file adds interactivity:

      - Fetches data from an external API using `fetch`.
      - Dynamically updates the page content.

4. **Live Data Fetch:**:

   The application fetches data from a public API.

5. **Bootstrap Integration:**:

   The UI is styled with Bootstrap.

6. **Proyecto Dockerizado:**:

   Este proyecto implementa una aplicación sencilla con Nginx y PostgreSQL usando Docker Compose:

      - `Dockerfile`: Configuración de la imagen.
      - `docker-compose.yml`: Orquestación de servicios.
      - `data/`: Datos persistentes.

---

## 📦 Extending the Project

1. **Add more styles:**:

   Experiment with CSS to improve the design.

2. **Include animations:**:

   Use CSS or JavaScript to add animations.

3. **Use external libraries:**:

   Try integrating Bootstrap or Tailwind CSS for advanced styling.

---

## 📈 Benefits

1. **Learn by Doing:**:

   Hands-on experience in building a webpage.

2. **Understand the Basics:**:

   Master foundational concepts of web development:

      - Demonstrate how they work together to build the web page.

3. **Create Interactive Pages:**:

   Build user-friendly and dynamic web applications:

      - Introduce concepts like CSS classes.

      - Briefly mention the DOM and event handling with JavaScript.

---

## 🏗️ Architecture

The architecture of this project is based on centralized:

1. **HTML:**:

   Provides the structure of the webpage.

2. **CSS:**:

   Used for styling and responsiveness.

3. **JavaScript:**:

   Adds interactivity, such as dynamic content updates and event handling.

4. **Containerization:**:

   Docker for application packaging and deployment:

      - **Contenedor 1**: Servidor Nginx.
      - **Contenedor 2**: Base de datos PostgreSQL.
      - **Cliente**: Navegador que consume la API.

5. **Volumes:**:

   Enable seamless development.

6. Bootstrap.

7. PostgreSQL.

For more details, refer to the [Architecture Guide](./docs/guides/ARCHITECTURE.md).

---

## 🤝 Contributing

If you would like to contribute to the project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request.

Please review our [Contributing Guide](./docs/guides/CONTRIBUTING.md) for setup instructions and how to submit your contributions.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---
