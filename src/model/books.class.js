import Book from "./book.class";
import BooksRepository from "../repositories/books.repository"
export default class Books {

    constructor() {
        this.data = []
        this.bookRepository = new BooksRepository();
    }
    async populateData(){
        let books = await this.bookRepository.getAllBooks()
        books.forEach((book) => {
            let newBook = new Book(book)
            this.data.push(newBook);
        })
        return this.data;
    }
    async addItem(book){
        let newBook = await this.bookRepository.addBook(book)
        this.data.push(newBook);
        return newBook;
    }



    async removeItem(id){
        await this.bookRepository.removeBook(id)
        let index = this.data.findIndex(Book => Book.id == id);
        if (index >= 0){
            this.data.splice(index)
        }else {
            throw new Error("No se ha encontrado el id");
        }
        return {};
    }
    async getItemById(Id){
        return await this.bookRepository.getBookById(Id)

    }

    getInfo(){
        return this.data.forEach((Book) =>{ Book.getInfo()})
    }
    incrementPriceOfbooks(number){
        this.data.map(async (book) => {
            let newBook = await this.bookRepository.updatePriceOfBook(book.id, book.price + book.price * number )
            book.price = newBook.price
        })
    }
    booksFromUser(idUsuario){
        const filteredData = new Books();
        filteredData.data = this.data.filter((libros) => libros.idUser === idUsuario);
        return filteredData;
    }
    booksFromModule(module){
        const filteredData = new Books();
        filteredData.data = this.data.filter((books) => books.idModule === module);
        return filteredData;
    }
    booksCheeperThan(price){
        const filteredData = new Books();
        filteredData.data = this.data.filter(books => books.price <= price);
        return filteredData;
    }
    booksWithStatus( estado){
        const filteredData = new Books();
        filteredData.data = this.data.filter(books => books.status === estado);
        return filteredData;
    }
    averagePriceOfBooks(){
        if (this.data.length < 1){return '0 €'}
        let media = this.data.reduce((total, array) => total += array.price, 0);
        media = media / this.data.length;
        return media.toFixed(2) + " €";
    }
    booksOfTypeNote(){
        const filteredData = new Books();
        filteredData.data =  this.data.filter(books => books.publisher === "Apunts");
        return filteredData;
    }
    booksNotOfTypeNote(){
        const filteredData = new Books();
        filteredData.data = this.data.filter(books => books.publisher !== "Apunts");
        return filteredData;
    }





}