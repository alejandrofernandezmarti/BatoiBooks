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
    async bookAlreadyExists(idModule, id) {
        try {
            let response =  await fetch(SERVER + "/books?idUser=" + id + "&idModule=" + idModule.idModule);
            if (!response.ok) {
                throw `Error ${response.status} de la BBDD: ${response.statusText}`;
            }
            const data = await response.json();
            return data.length > 0; // Devuelve true si hay datos, false si está vacío
        } catch (error) {
            console.error("Error al verificar si el libro existe:", error);
            return false; // En caso de error, devuelve false
        }
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