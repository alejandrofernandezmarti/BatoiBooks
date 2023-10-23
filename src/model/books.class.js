import Book from "./book.class.js";
const server = " http://localhost:3000";
export default class Books {

    constructor() {
        this.data = []
    }
    addItem(book){
        let newBook =new Book(this.calcularId(),book.idUser,book.idModule,book.publisher,book.price,book.pages,book.status,book.soldDate)
        this.data.push(newBook);
        return newBook;
    }
    removeItem(id){
        let index = this.data.findIndex(Book => Book.id === id);
        if (index >= 0){
            this.data.splice(index)
        }else {
            throw new SQLException("No se ha encontrado el id");
        }
        return {};
    }
    populateData(datos){
        datos.forEach((book) => {
            let newBook = new Book(book.id,book.idUser,book.idModule,book.publisher,book.price,book.pages,book.status,book.soldDate)
            this.data.push(newBook);
        })
        return this.data;
    }
    async getBooks(){
        return  await fetch(server);
    }
    calcularId(){
        let maxIndex = 0;
        this.data.forEach((book) => {
            if (maxIndex <= book.id){
                maxIndex = book.id
            }
        })
        return maxIndex + 1;
    }


    getItemById(Id){
        return this.data.find((Book) => Book.id === Id )|| {}
    }
    getInfo(){
        return this.data.forEach((Book) =>{ Book.getInfo()})
    }
    incrementPriceOfbooks(number){
        this.data.map(array =>
            array.price = array.price + (array.price * number))
        return this.data;
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