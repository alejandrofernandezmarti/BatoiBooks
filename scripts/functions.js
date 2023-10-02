

function booksFromUser(books, number){
    return books.filter(books => books.idUser === number)
}
// recibe el array de libros y la id de un usuario y devuelve el array con todos los libros de dicho usuario
function booksFromModule(books, codigo){
    return books.filter(books => books.idModule === codigo)
} // : array: recibe el array de libros y el código de un módulo y devuelve el array con todos los libros de dicho módulo

function booksCheeperThan(books, price){
    return books.filter(books => books.price <= price)
}// : array: recibe el array de libros y un valor y devuelve el array con todos los libros cuyo precio es inferior o igual al valor pasado

function booksWithStatus(books, estado){
    return books.filter(books => books.status === estado)
} // : array: recibe el array de libros y un estado ("new", "good", ...) y devuelve el array con todos los libros de dicho estado

function averagePriceOfBooks(books){
    if (books.length < 1){return '0 €'}
    let media = books.reduce((total, array) => total += array.price, 0);
    media = media / books.length;
    return media.toFixed(2) + " €";
} //: string: recibe el array de libros y devuelve el precio medio de los mismos, con 2 decimales y el símbolo del € (ej.: "23.40 €")

function booksOfTypeNote(books){
    return books.filter(books => books.publisher === "Apunts")
} //: array: recibe el array de libros y devuelve un array con todos los que son apuntes

function booksNotOfTypeNote(books){
    return books.filter(books => books.publisher !== "Apunts")
} //: array: como el anterior pero devuelve los que NO son apuntes

function booksNotSold(books){
    return books.filter(books => books.soldDate === "")
} //: array: recibe el array de libros y devuelve un array con todos los que NO se han vendido aún

function incrementPriceOfbooks(books, number){
    books.map(array =>
    array.price = array.price + (array.price * number))
    return books;
} //: undefined: recibe el array de libros y el porcentaje a incrementar (ej. 0,1 == 10%) e incrementa su precio (no devuelve nada)

function getUserById(usuarios, number){
     if (usuarios.filter(usuarios => usuarios.id === number).length > 0){
         let coincidencias = usuarios.filter(usuarios => usuarios.id === number);
         return coincidencias[0];
     }else return {};

} //: object: recibe el array de usuarios y una id y devuelve el usuario con dicha id

function getUserIndexById(usuarios, id){
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === id){
            return i;
        }
    }
    return -1;
} //: object: igual pero devuelve la posición del usuario dentro del array users

function getUserByNickName(usuarios, nick){
    if (usuarios.filter(usuarios => usuarios.nick === nick).length > 0){
        let coincidencias = usuarios.filter(usuarios => usuarios.nick === nick);
        return coincidencias[0];
    }else return {};
} //: object: recibe el array de usuarios y un nombre de usuario (nick) y devuelve el usuario con dicho nick

function getModuleByCode(modulos, code){
    if (modulos.filter(modulos => modulos.code === code).length > 0){
        let coincidencias = modulos.filter(modulos => modulos.code === code);
        return coincidencias[0];
    }else return {};
} //: object: recibe el array de módulos y un código y devuelve el módulo con dicho código (campo code)

function getModuleIndexByCode(modulos, code){
    for (let i = 0; i < modulos.length; i++) {
        if (modulos[i].code === code){
            return i;
        }
    }
    return -1;
} //: object: igual pero devuelve la posición del módulo dentro del array modules

export  {
    booksFromUser,
    booksFromModule,
    booksCheeperThan,
    booksWithStatus,
    averagePriceOfBooks,
    booksOfTypeNote,
    booksNotOfTypeNote,
    booksNotSold,
    incrementPriceOfbooks,
    getUserById,
    getUserIndexById,
    getUserByNickName,
    getModuleByCode,
    getModuleIndexByCode
}