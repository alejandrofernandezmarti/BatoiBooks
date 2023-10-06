import User from "./user.class.js";
import datos from "../../datos.js";

export default class UsersClass {
    constructor() {
        this.data = [];
    }
    populateData(datos){
        datos.forEach((item) => {
            let newUser = new User(item.id,item.email,item.nick)
            this.data.push(newUser);
        })
        return this.data;
    }
    addItem(user){
        let newUser = new User(this.calcularId(),user.email,user.nick)
        this.data.push(newUser);
        return newUser;
    }
    calcularId(){
        let maxIndex = 0;
        this.data.forEach((user) => {
            if (maxIndex < user.id){
                maxIndex = user.id
            }
        })
        return maxIndex + 1;
    }
    removeItem(id){
        let index = this.data.findIndex(User => User.id === id);
        if (index >= 0){
            this.data.splice(index)
        }else {
            throw new SQLException("No se ha encontrado el id");
        }
        return {};
    }
    getItemById(Id){
        return this.data.find((User) => User.id === Id )|| {}
    }
    getInfo(){
        return this.data.forEach((User) =>{ User.getInfo()})
    }
}