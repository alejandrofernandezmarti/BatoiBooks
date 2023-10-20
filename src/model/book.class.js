
export default class Book{
    constructor(book) {
        this.id = book.id;
        this.idUser = book.idUser;
        this.idModule = book.idModule;
        this.publisher = book.publisher;
        this.price = book.price;
        this.pages = book.pages;
        this.status = book.status;
        this.soldDate = book.soldDate || "";
    }
    getInfo(){
        return 'Id libro: ' + this.id + 'Id user: ' +  this.idUser + 'Id ModuleClass:' + this.idModule + 'Publisher: '   + this.publisher
            + 'Price: ' + this.price + 'Pages: ' + this.pages + 'Status: ' +  this.status +
            'Photo: ' + this.photo + 'Comments: ' + this.comments + 'Sold date: ' + this.soldDate;
    }
}