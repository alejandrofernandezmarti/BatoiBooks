export default class User {
    constructor(id,email,nick) {
        this.id = id;
        this.email = email;
        this.nick = nick;
    }

    getInfo(){
        return 'Id: ' + this.id + ', Email: ' + this.email + ', Nick: ' + this.nick;
    }

}