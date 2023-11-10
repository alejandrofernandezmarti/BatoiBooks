import Books from "../model/books.class.js";

const SERVER = import.meta.env.VITE_URL_API
export default class BooksRepository{
    constructor() {
    }

    async getAllBooks(){
        let response = await fetch(SERVER+"/books");
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return await response.json();
    }
    async getBookById(id){
        let response =  await fetch(SERVER + "/books/" + id);
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return await response.json();
    }
    async addBook(book){
        let sentencia = {"idUser": book.idUser,"idModule":book.idModule ,"publisher":book.publisher,"price": book.price, "pages": book.pages, "status": book.status, "photo": book.photo, "comments": book.comments, "soldDate": book.soldDate,"id":book.id}
        const response = await fetch(SERVER + "/books" ,{method:'POST',body: JSON.stringify(sentencia), headers:{'Content-Type': 'application/json'}});
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return await response.json();
    }

    async removeBook(id){
        const response = await fetch(SERVER + "/books/" + id,{method:'DELETE'});
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return await response.json();
    }

    async changeBook(book){
        let sentencia = {"idUser": book.idUser,"idModule":book.idModule ,"publisher":book.publisher,"price": book.price, "pages": book.pages, "status": book.status, "photo": book.photo, "comments": book.comments, "soldDate": book.soldDate,"id":book.id}
        const response = await fetch(SERVER + '/books/' + book.id,{method:'PATCH',body: JSON.stringify(sentencia), headers:{'Content-Type': 'application/json'}})
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return await response.json();
    }
    async updatePriceOfBook(id,price){
        let campos = {"price":price}
        const response = await fetch(SERVER+ '/books/' + id,{method:'PATCH',body: JSON.stringify(campos), headers:{'Content-Type': 'application/json'}
        });
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return response.json();
    }
}