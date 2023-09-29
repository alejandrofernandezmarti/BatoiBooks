

function booksFromUser(array, number){
    return array.filter(array => array.idUser === number)
}
// recibe el array de libros y la id de un usuario y devuelve el array con todos los libros de dicho usuario
function booksFromModule(array, string){
    return array.filter(array => array.idModule === string)
} // : array: recibe el array de libros y el código de un módulo y devuelve el array con todos los libros de dicho módulo

function booksCheeperThan(array, number){
    return array.filter(array => array.price <= number)
}// : array: recibe el array de libros y un valor y devuelve el array con todos los libros cuyo precio es inferior o igual al valor pasado

function booksWithStatus(array, string){
    return array.filter(array => array.status === string)
} // : array: recibe el array de libros y un estado ("new", "good", ...) y devuelve el array con todos los libros de dicho estado

function averagePriceOfBooks(array){
    if (array.length < 1){return '0 €'}
    let media = array.reduce((total, array) => total += array.price, 0);
    media = media / array.length;
    return media.toFixed(2) + " €";
} //: string: recibe el array de libros y devuelve el precio medio de los mismos, con 2 decimales y el símbolo del € (ej.: "23.40 €")

function booksOfTypeNote(array){
    return array.filter(array => array.publisher === "Apunts")
} //: array: recibe el array de libros y devuelve un array con todos los que son apuntes

function booksNotOfTypeNote(array){
    return array.filter(array => array.publisher !== "Apunts")
} //: array: como el anterior pero devuelve los que NO son apuntes

function booksNotSold(array){
    return array.filter(array => array.soldDate === "")
} //: array: recibe el array de libros y devuelve un array con todos los que NO se han vendido aún

function incrementPriceOfbooks(array, number){
    array.map(array =>
    array.price = array.price + (array.price * number))
    return array;
} //: undefined: recibe el array de libros y el porcentaje a incrementar (ej. 0,1 == 10%) e incrementa su precio (no devuelve nada)

function getUserById(array, number){
    return array.filter(array => array.id === number)
} //: object: recibe el array de usuarios y una id y devuelve el usuario con dicha id

function getUserIndexById(array, number){

} //: object: igual pero devuelve la posición del usuario dentro del array users

function getUserByNickName(array, string){

} //: object: recibe el array de usuarios y un nombre de usuario (nick) y devuelve el usuario con dicho nick

function getModuleByCode(array, string){

} //: object: recibe el array de módulos y un código y devuelve el módulo con dicho código (campo code)

function getModuleIndexByCode(array, string){

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