import './style.css'
import data from './datos.js'

import Users from "./src/model/users.class.js";
import datos from "./datos.js";
import Modules from "./src/model/modules.class.js";
import Books from "./src/model/books.class.js";



document.querySelector('#app').innerHTML = `
    <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/public/logoBatoi.png" class="logo" alt="Vite logo" />
    </a>
    <h1>Batoi Books</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Abre la consola para ver los resultados
    </p>
  </div>
`
let users = new Users();
users.populateData(datos.users)
let modules = new Modules()
modules.populateData( datos.modules)
let books = new Books();
books.populateData(datos.books)
console.log(books.booksFromUser(4))
let bookFilter1 = books.booksFromModule('5021')
console.log( bookFilter1.booksWithStatus('Good'))
let booksFilter2 = books.booksFromModule('5025')
console.log(booksFilter2.incrementPriceOfbooks(0.1))