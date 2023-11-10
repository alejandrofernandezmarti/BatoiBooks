
export default class ViewClass {
    constructor() {
        this.list = document.getElementById('list')
        this.messages = document.getElementById('message')
        this.bookForm = document.getElementById('bookForm')
        this.remove = document.getElementById('remove')
    }
    renderOptionsModule(modules){
        const DOMselect = document.getElementById('id-module')

        modules.forEach((module) => {
            const DOMoption = document.createElement('option')
            DOMoption.textContent = module.cliteral
            DOMoption.value = module.code
            // DOMoption.setAttribute('value',module.code)   // equivale a la linea anterior

            DOMselect.appendChild(DOMoption)
        })
        /* modules.forEach((module) => {       Lo mismo de otra manera  (la otra es más correcta)
            DOMselect.innerHTML += `<option value=${module.code}>${module.cliteral}</option>`
        })*/
    }
    renderUpdate(book){
        document.getElementById('book-'+book.id).innerHTML =
            `
            <img src="${book.photo}" alt="Libro: ${book.id}">
              <h5>ID ${book.id}</h5> 
              <h5>${book.idModule}</h5> 
              <h6>${book.publisher}</h6>
              <p>Precio: ${book.price}</p> 
              <p>Páginas: ${book.pages}</p> 
              <p>Estado: ${book.status}</p>
              <p>En venta </p>
              <p>Comentarios: ${book.comments}</p>
              <div class="botones">
                <button class="add">
                <span class="material-icons">add_shopping_cart</span>
                </button>
                <button class="edit">
                    <span class="material-icons">edit</span>
                </button>
                <button class="delete">
                    <span class="material-icons">delete</span>
                </button>
              </div>
              `
    }
    renderNewBook(book){
        const DOMselect = document.getElementById('list')
        const DOMdiv = document.createElement('div')
        DOMdiv.className = 'container';
        DOMdiv.id = 'book-'+book.id;
        DOMdiv.innerHTML = `
            <img src="${book.photo}" alt="Libro: ${book.id}">
              <h5>ID ${book.id}</h5> 
              <h5>${book.idModule}</h5> 
              <h6>${book.publisher}</h6>
              <p>Precio: ${book.price}</p> 
              <p>Páginas: ${book.pages}</p> 
              <p>Estado: ${book.status}</p>
              <p>En venta </p>
              <p>Comentarios: ${book.comments}</p>
              <div class="botones">
                <button class="add">
                <span class="material-icons">add_shopping_cart</span>
                </button>
                <button class="edit">
                    <span class="material-icons">edit</span>
                </button>
                <button class="delete">
                    <span class="material-icons">delete</span>
                </button>
              </div>
              `
        DOMselect.appendChild(DOMdiv)
        return DOMdiv;

    }

    renderDeleteBook(id){
        const DOMbook = document.getElementById('book-'+id)
        DOMbook.parentElement.removeChild(DOMbook)
    }
    renderMessage(type,message){
        const DOMnewMessage = document.createElement('div')
        DOMnewMessage.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button> `
        DOMnewMessage.className  = type + "alert alert-danger alert-dismissible"
        // DOMnewMessage.role = "alert" () same as next line
        DOMnewMessage.setAttribute('role',"alert")

        this.messages.appendChild(DOMnewMessage)
    }
    renderBookEdit(book){

        this.bookForm.elements['bookId'].parentElement.classList.remove('hidden')  // nota el .elements solo muestra los inputs
        this.bookForm.querySelector('legend').textContent = 'Editar libro'
        this.bookForm.elements['bookId'].className = 'visible'
        this.bookForm.elements['bookId'].value = book.id
        this.bookForm.elements['id-module'].value = book.idModule
        this.bookForm.elements['publisher'].value = book.publisher
        this.bookForm.elements['price'].value = book.price
        this.bookForm.elements['pages'].value = book.pages
        this.bookForm.elements['nuevo'].checked = true;   // preguntar this.bookForm.elements[book.status].checked = true;
        this.bookForm.elements['comments'].value = book.comments
    }

}