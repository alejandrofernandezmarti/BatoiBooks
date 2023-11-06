import data from "../../datos.js";


export default class Cart{

    constructor() {
         this.data = [];
    }

    populateData(){}

    getBookById(id){
        return this.data.find(Book => Book.id === id )
    }
    addItem(book){
        try{
            if (book.id){
                const existingBook = this.getBookById(book.id);
                if (!existingBook){
                    this.data.push(book)
                    prompt("Añadido maestro")
                }else {
                    throw new Error()
                }
            }
        }catch (error){
            prompt("El libro ya se encuentra en el carrito")
        }
    }
    removeItem(Id){
        try {
            if (this.getBookById(Id) === {}){
                throw new SQLException()
            }else {
                let index = this.data.findIndex(Book => Book.id === id);
                this.data.splice(index)
            }
        }catch (SQLException){
            prompt("El libro no se encuentra en el carrito")
        }

    }

}