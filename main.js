import './style.css'
import data from "./datos.js"
import {
  booksFromUser,
  booksFromModule,
  booksCheeperThan,
  booksWithStatus,
  averagePriceOfBooks,
  booksOfTypeNote,
  booksNotOfTypeNote,
  booksNotSold,
  incrementPriceOfbooks,
  getUserById,
  getUserIndexById,
  getUserByNickName,
  getModuleByCode,
  getModuleIndexByCode
} from './scripts/functions.js'

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

console.log(booksFromUser(data.books,22))
console.log(booksFromModule(data.books,3))
console.log(booksCheeperThan(data.books,100))
console.log(booksWithStatus(data.books,'good'))
console.log(averagePriceOfBooks(data.books))
console.log(booksOfTypeNote(data.books))
console.log(booksNotOfTypeNote(data.books))
console.log(booksNotSold(data.books))
console.log(incrementPriceOfbooks(data.books,0.5))
console.log(getUserById(data.users,2))
console.log(getUserIndexById(data.users,2))
console.log(getUserByNickName(data.users,'Maria'))
console.log(getModuleByCode(data.modules,'DWES'))
console.log(getModuleIndexByCode(data.modules,2))