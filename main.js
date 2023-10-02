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

/* console.log(cadena)
console.log(letters(cadena) + " letras y "+words(cadena) + " palabras")
console.log(upperString(cadena))
console.log(titleString(cadena))
console.log(backwardsLetters(cadena))
console.log(backwardsWords(cadena))
console.log(palindromo(cadena)) */

// console.log(booksFromUser(data.books,2))
console.log(averagePriceOfBooks(data.books))
console.log(getUserById(data.users,2))




