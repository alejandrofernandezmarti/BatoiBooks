import User from "./user.class.js";
import datos from "../../datos.js";
import UsersRepository from "../repositories/users.repository.js";

export default class UsersClass {
    constructor() {
        this.data = [];
        this.usersRepository = new UsersRepository;
    }
    async populateData(){
        let users =  await this.usersRepository.getAllUsers();
        users.forEach((item) => {
            let newUser = new User(item.id,item.email,item.nick)
            this.data.push(newUser);
        })
        return this.data;
    }
    async addItem(user){
        let newUser = new User(await this.usersRepository.addUser(user))
        this.data.push(newUser);
        return newUser;
    }

    async removeItem(id){
        await this.usersRepository.removeUser(id)
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