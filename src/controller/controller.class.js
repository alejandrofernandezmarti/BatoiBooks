import Books from "../model/books.class.js";
import Modules from "../model/modules.class.js";
import UsersClass from "../model/users.class.js";
import ViewClass from "../view/view.class.js";

export default class Controller {
    constructor() {
        this.books = new Books()
        this.modules = new Modules();
        this.users = new UsersClass();
        this.view = new ViewClass();
    }

    async init() {
        await this.books.populateData();
        await this.users.populateData()
        await this.modules.populateData()

        this.view.renderOptionsModule(this.modules.data)
        this.books.data.forEach((book) => {
        this.view.renderNewBook(book)
        })


        this.view.remove.addEventListener('click',async (event) => {
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
          })

        this.view.bookForm.addEventListener('submit',async (event) => {
            event.preventDefault()
            // Aquí poned el código que
            // - cogerá los datos del formulario
            // - pedirá al modelo que añada ese libro
            // - una vez hecho lo añadirá a la vista y borrará el formulario
            let idModule = this.view.bookForm.elements['id-module'].value
            let publisher = this.view.bookForm.elements['publisher'].value
            let price = this.view.bookForm.elements['price'].value
            let pages =this.view.bookForm.elements['pages'].value
            let status = this.view.bookForm.querySelector('input[name="bookStat"]:checked').value;
            let comments = this.view.bookForm.elements['comments'].value

            const newBook = await this.books.addItem({
                idUser: 2, idModule: idModule, publisher: publisher, price ,pages,status,photo: "",comments,soldDate: ""
            })
            document.forms[0].reset()
            this.view.renderNewBook(newBook)

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