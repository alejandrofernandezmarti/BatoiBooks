import Module from "./module.class.js";
import ModulesRepository from "../repositories/modules.repository.js";
export default class Modules{
    constructor() {
        this.data = [];
        this.moduleRepository = new ModulesRepository;
    }

    async populateData(){
        let datos = await this.moduleRepository.getAllModules()
        datos.forEach((module) => {
            let newModule = new Module(module.code,module.cliteral,module.vliteral,module.idCourse)
            this.data.push(newModule);
        })
        return this.data;
    }
    async addItem(module){
        await this.moduleRepository.addModule(module)
        let newModule = new Module(module.code,module.cliteral,module.vliteral,module.idCourse)
        this.data.push(newModule);
        return newModule;
    }

    async removeItem(id){
        await this.moduleRepository.removeModule(id)
        let index = this.data.findIndex(module => module.code === id);
        if (index >= 0){
            this.data.splice(index)
        }else {
            throw new SQLException ("No se ha encontrado el id");
        }
        return {};
    }
}