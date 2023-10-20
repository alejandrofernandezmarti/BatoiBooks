import './style.css'
import Controller from "./src/controller/controller.class.js";

document.querySelector('#app').innerHTML = `
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
    <input type="number" id="price"><br>
  </div>

  <div>
    <label for="pages">Páginas:</label>
    <input type="number" id="pages"><br>
  </div>

  <div>
    <label>Estado:</label>
    <!-- Aquí poned un radiobutton para cada estado -->
  </div>

  <div>
    <label for="comments">Comentarios:</label>
    <textarea id="comments"></textarea>
  </div>

  <button type="submit">Añadir</button>
  <button type="reset">Reset</button>
</form>
</div>
<div id="about"> </div>
</div>
<button id="remove">Borrar libro</button>

    
  
`
document.addEventListener('DOMContentLoaded', () => {
    const myController = new Controller()
    myController.init()
})
