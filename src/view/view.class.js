
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
        const DOMdiv =  document.getElementById('book-' + book.id);
        DOMdiv.innerHTML =
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
              `;
        return DOMdiv;
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

    validateForm(){
        if (this.bookForm.checkValidity()){
            document.querySelectorAll('#bookForm span.error').forEach((span)=>{
                span.textContent='';
            })
           return true;
        }

        Array.from(this.bookForm.elements).forEach((item)=>{
            const spanError = item.parentElement.querySelector('span.error')
            if (item.checkValidity()){
                spanError.textContent = '';
            }else {
                spanError.textContent = item.validationMessage
            }
        })

    }

    customError(input){
        if (input.checkValidity()){
            return '';
        }
        if (input.validity.valueMissing){
            return 'El campo ' + input.name + ' es obligatorio'
        }
        if (input.validity.typeMismatch){
            return 'El campo ' + input.name + ' debe ser ' + input.type;
        }

        // seguir
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
        this.bookForm.elements[book.status].checked = true;
        this.bookForm.elements['comments'].value = book.comments
    }

    renderForm(){
        document.getElementById('bookForm').reset()
        this.bookForm.querySelector('legend').textContent = 'Añadir libro'
        this.bookForm.elements['bookId'].className = 'hidden'
    }
    renderErrorMessage(type, message) {
        const messageUI = document.createElement('div')
        messageUI.className = type + ' alert alert-danger alert-dismissible'
        messageUI.setAttribute('role', 'alert')
        messageUI.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button>
    `
        this.messages.appendChild(messageUI)
        window.scroll(0,0)
    }

    getBookFormValues(){
        let idBook = this.bookForm.elements['bookId'].value
        let idModule = this.bookForm.elements['id-module'].value
        let publisher = this.bookForm.elements['publisher'].value
        let price = this.bookForm.elements['price'].value
        let pages =this.bookForm.elements['pages'].value
        let status = this.bookForm.querySelector('input[name="bookStat"]:checked').value;
        let comments = this.bookForm.elements['comments'].value

        return{
            idBook,
            idModule,
            publisher,
            price,
            pages,
            status,
            comments
        }
    }

}