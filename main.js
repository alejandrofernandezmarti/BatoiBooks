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
<body >
<header>

</header>
    
    <nav class="sidebar">
    <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/logoBatoi.png" class="logo" alt="Vite logo" />
    </a>
    </div>
  <ul>
    <li><a href="#list">Ver Libros</a></li>
    <li><a href="#form">Añadir Libro</a></li>
    <li><a href="#about">Acerca de...</a></li>
  </ul>
</nav>
<div id="message"></div>
<div class="content">
<div id="list"> 
    
</div>

<br>

<div id="form" > 
    
   <form id="bookForm">
   <legend class="legend" >Añadir libro</legend>
   <div id="idBook" class="hidden">
    <label for="bookId" class="hidden">ID:</label>
    <input type="text" id="bookId"  readonly ><br>
</div>
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

  
  
    <label>Estado:</label>
    <div class="options">
    <input type="radio" id="Nuevo" name="bookStat" value="Nuevo" required>
        <label for="Nuevo">Nuevo</label>
    <input type="radio"  name="bookStat" id="Usado" value="Usado">
        <label for="Usado">Usado</label>
    <input type="radio" name="bookStat" id="Roto" value="Roto">
        <label for="Roto">Roto</label>

  </div>

  <div>
    <label for="comments">Comentarios:</label>
    <textarea id="comments"></textarea>
  </div>
  

  <button type="submit">Añadir</button>
  <button type="reset">Reset</button>
</form>
</div>
<div id="about"><a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
Odit totam, adipisci iste ducimus id voluptatum voluptatem aut ea vel aperiam magnam officiis non officia tempora dicta veritatis nihil doloremque fugit!</a> </div>
</div>
</body>
</html>

    
  
`
document.addEventListener('DOMContentLoaded', async () => {
    const myController = new Controller()
    await myController.init()
})
