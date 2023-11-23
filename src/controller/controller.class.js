import Books from "../model/books.class.js";
import Modules from "../model/modules.class.js";
import UsersClass from "../model/users.class.js";
import Cart from "../model/cart.class.js";
import ViewClass from "../view/view.class.js";

export default class Controller {
    constructor() {
        this.books = new Books()
        this.modules = new Modules();
        this.users = new UsersClass();
        this.view = new ViewClass();
        this.carrito = new Cart()
    }

    async init() {
        await this.books.populateData();
        await this.users.populateData()
        await this.modules.populateData()

        this.view.renderOptionsModule(this.modules.data)
        this.books.data.forEach((book) => {
        let element = this.view.renderNewBook(book)
            this.addButtonListeners(element,book)

        })

        this.view.bookForm.addEventListener('submit',async (event) => {
            event.preventDefault()

            const idUser = 2;
            const idModuleSelect = this.view.bookForm.elements['id-module']
            try {
                if (await this.books.bookAlreadyExists(idModuleSelect.value,idUser)){
                    idModuleSelect.setCustomValidity('Ya has añadido ese libro')
                }else {
                    idModuleSelect.setCustomValidity('')
                }
            }catch (error){
                 this.view.renderErrorMessage('error', 'Error comprobando si existe el libro: '+ error)
            }

            if (!this.view.validateForm()){
                return
            }

            const payload = this.view.getBookFormValues();
            payload.price = Number(payload.price)
            payload.pages = Number(payload.pages)
            payload.idUser = idUser

            const editing = payload.id

            let book = {}

            try {
                book = editing
                    ? await this.books.editItem(payload)
                    : await this.books.addItem(payload)
            }catch (error){
                this.view.renderErrorMessage('error', 'Error guardando el libro: '+ error)
                return
            }
            if (editing){
                this.view.renderBookEdit(book)
            }else {
                const bookHtml = this.view.renderNewBook(book)
                this.addButtonListeners(bookHtml,book)
            }

            this.view.renderForm();
        })
        window.addEventListener('hashchange',(event)=>{
            this.view.renderForm()
            const newUrl = event.newURL
            if (newUrl.includes('#list')){
                document.getElementById('list').classList.remove('hidden')
                document.getElementById('form').classList.add('hidden')
                document.getElementById('about').classList.add('hidden')
            }else if (newUrl.includes('#form')){
                document.getElementById('form').classList.remove('hidden')
                document.getElementById('list').classList.add('hidden')
                document.getElementById('about').classList.add('hidden')
            }else if (newUrl.includes('#about')){
                document.getElementById('about').classList.remove('hidden')
                document.getElementById('list').classList.add('hidden')
                document.getElementById('form').classList.add('hidden')
            }

        })
    }

    addButtonListeners(element,book){
        element.querySelector('.delete').addEventListener('click',async () =>{
            try {
                await this.books.removeItem(book.id)
            }catch (error){
                this.view.renderMessage('error',error) // crear método en la vista
                return
            }
            this.view.renderDeleteBook(book.id);
        })
        element.querySelector('.add').addEventListener('click', async () => {
            try {
                this.carrito.addItem(book)
                this.view.renderMessage('Correct','Añadido correctamente')
            }catch (Error){
                this.view.renderMessage('Error','El libro ya se encuentra en el carrito')
            }

        })
        element.querySelector('.edit').addEventListener('click',async() =>{
            document.getElementById('form').classList.remove('hidden')
            this.view.renderBookEdit(book)

        })
    }

    addProductToStore(prod) {
            // haría las comprobaciones necesarias sobre los datos y luego
            const newProd = this.productStore.addProduct(prod);	// dice al modelo que añada el producto
            if (newProd) {
                this.storeView.renderNewProduct(newProd);		// si lo ha hecho le dice a la vista que lo pinte
            } else {
                this.storeView.showErrorMessage('error', 'Error al añadir el producto');
            }
        }

    // También se incluirían los métodos escuchadores para las acciones del usuario
    // sobre la página. Por ejemplo pondrá un escuchador en el formulario para que
    // cuando se envíe coja los datos, los valide y llame a 'addProductToStore'
}

/* this.view.remove.addEventListener('click',async (event) => {
              // Aquí poned el código que
              // - pedirá al usuario que introduzca la id de un libro
              // - la validará
              // - le pedirá al modelo que borre ese libro
              // - una vez hecho lo borrará de la vista

              const bookId = prompt('Introduce una ID')
              try {
                  await this.books.removeItem(bookId)
              }catch (error){
                  this.view.renderMessage('error',error) // crear método en la vista
                  return
              }
              this.view.renderDeleteBook(bookId);
          })  */