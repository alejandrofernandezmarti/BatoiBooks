export default class User {
    constructor(id,email,nick,password) {
        this.id = id;
        this.email = email;
        this.nick = nick;
        this.password = password;
    }

    getInfo(){
        return 'Id: ' + this.id + ', Email: ' + this.email + ', Nick: ' + this.nick;
    }

}