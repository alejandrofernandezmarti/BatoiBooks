import User from "./user.class.js";
import Module from "./module.class.js";

export default class Modules{
    constructor() {
        this.data = [];
    }

    populateData(datos){
        datos.forEach((module) => {
            let newModule = new Module(module.code,module.cliteral,module.vliteral,module.idCourse)
            this.data.push(newModule);
        })
        return this.data;
    }
    addItem(module){
        let newModule = new Module(module.code,module.cliteral,module.vliteral,module.idCourse)
        this.data.push(newModule);
        return newModule;
    }

    removeItem(id){
        let index = this.data.findIndex(module => module.code === id);
        if (index >= 0){
            this.data.splice(index)
        }else {
            throw new SQLException("No se ha encontrado el id");
        }
        return {};
    }
}