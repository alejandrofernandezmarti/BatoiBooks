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
            }
            this.view.renderDeleteBook();
        })

        this.view.bookForm.addEventListener('submit', (event) => {
            event.preventDefault()
            // Aquí poned el código que
            // - cogerá los datos del formulario
            // - los validará
            // - pedirá al modelo que añada ese libro
            // - una vez hecho lo añadirá a la vista y borrará el formulario
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