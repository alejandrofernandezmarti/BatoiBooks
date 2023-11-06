import './style.css'
import Controller from "./src/controller/controller.class.js";

document.querySelector('#app').innerHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la página</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
<header>

</header>
    <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/logoBatoi.png" class="logo" alt="Vite logo" />
    </a>
    </div>
    <nav>
  <ul>
    <li><a href="#list">Ver Libros</a></li>
    <li><a href="#form">Añadir Libro</a></li>
    <li><a href="#about">Acerca de...</a></li>
  </ul>
</nav>
<div>
<div id="list"> 
    
</div>

<br>

<div id="form"> 
    <form id="bookForm">
  <div>
    <label for="id-module">Módulo:</label>
    <select id="id-module">
      <option>- Selecciona un módulo -</option>
    </select><br>
  </div>

  <div>
    <label for="publisher">Editorial:</label>
    <input type="text" id="publisher" required><br>
  </div>

  <div>
    <label for="price">Precio:</label>
    <input type="number" id="price" required><br>
  </div>

  <div>
    <label for="pages">Páginas:</label>
    <input type="number" id="pages" required><br>
  </div>

  <div>
  
    <label>Estado:</label>
    <input type="radio" id="nuevo" name="bookStat" value="Nuevo" required>
        <label for="nuevo">Nuevo</label>
    <input type="radio" name="bookStat" id="usado" value="Usado">
        <label for="usado">Usado</label>
    <input type="radio" name="bookStat" id="roto" value="Roto">
        <label for="roto">Roto</label>

  </div>

  <div>
    <label for="comments">Comentarios:</label>
    <textarea id="comments"></textarea>
  </div>
  <div id="message"></div>

  <button type="submit">Añadir</button>
  <button type="reset">Reset</button>
</form>
</div>
<div id="about"> </div>
</div>
</body>
</html>

    
  
`
document.addEventListener('DOMContentLoaded', async () => {
    const myController = new Controller()
    await myController.init()
})
