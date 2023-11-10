import data from "../../datos.js";
import Book from "./book.class.js";


export default class Cart{

    constructor() {
         this.data = [];
    }

    populateData(){}

    getBookById(id){
        return this.data.find(Book => Book.id === id )
    }
    addItem(book){
        const existingBook = this.getBookById(book.id);
        if (!existingBook){
            let newBook = new Book(book);
            this.data.push(newBook)
        }else {
            throw new Error("El libro ya se encuentra en el carrito")
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