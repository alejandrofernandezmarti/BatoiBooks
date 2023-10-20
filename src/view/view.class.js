
export default class ViewClass {
    constructor() {
        this.list = document.getElementById('list')
        this.messages = document.getElementById('message')
        // this.bookForm =
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
    renderNewBook(book){
        const DOMselect = document.getElementById('list')

        const DOMdiv = document.createElement('div')
        DOMdiv.innerHTML = `<img src="${book.id}" alt="Libro: "${book.id}>
            <div>
              <h5>${book.cliteral}</h5> 
             <h6>${book.publisher}</h6>
              <p>Precio: ${book.price}</p> 
              <p>Páginas: ${book.pages}</p> 
              <p>Estado: ${book.status}</p>
              <p>En venta // Vendido el 21/12/2023</p>
              <p>Comentarios: ${book.comments}</p>
            </div>`
        DOMselect.appendChild(DOMdiv)

    }

    renderDeleteBook(id){
        const DOMbook = document.getElementById('book o como se llame')
        DOMbook.parentElement.removeChild(DOMbook)
    }
    renderMessage(type,message){
        const DOMnewMessage = document.createElement('div')
        DOMnewMessage.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()"> `
        DOMnewMessage.className  = type + "alert alert-danger alert-dismissible"
        // DOMnewMessage.role = "alert"
        DOMnewMessage.setAttribute('role',"alert")

        this.messages.appendChild(DOMnewMessage)
    }
}