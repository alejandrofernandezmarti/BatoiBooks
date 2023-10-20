import './style.css'
import Users from "./src/model/users.class.js";
import Modules from "./src/model/modules.class.js";
import Books from "./src/model/books.class.js";



document.querySelector('#app').innerHTML = `
    <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/logoBatoi.png" class="logo" alt="Vite logo" />
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

async function main() {
    let users = new Users();
    await users.populateData()

    let modules = new Modules()
    await modules.populateData()
    let books = new Books();
    await books.populateData()


    let book5021 = books.booksFromModule('5021')
    let book4 = books.booksFromUser(4)
    let book5025 = books.booksFromModule('5025')
    book5025.incrementPriceOfbooks(0.1)


    console.log(book4)
    console.log(book5021)
    console.log(book5025)


    console.log(users.data[0])
    console.log(modules.data[0])

    console.log(books.data)
}
main()
