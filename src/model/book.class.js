
export default class Book{
    constructor(id,idUser,idModule,publisher,price,pages,status,soldDate) {
        this.id = id;
        this.idUser = idUser;
        this.idModule = idModule;
        this.publisher = publisher;
        this.price = price;
        this.pages = pages;
        this.status = status;
        this.soldDate = soldDate;
    }
    getInfo(){
        return 'Id libro: ' + this.id + 'Id user: ' +  this.idUser + 'Id ModuleClass:' + this.idModule + 'Publisher: '   + this.publisher
            + 'Price: ' + this.price + 'Pages: ' + this.pages + 'Status: ' +  this.status +
            'Photo: ' + this.photo + 'Comments: ' + this.comments + 'Sold date: ' + this.soldDate;
    }
}