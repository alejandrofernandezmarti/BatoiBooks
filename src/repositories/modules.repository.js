const SERVER = import.meta.env.VITE_URL_API


export default class ModulesRepository{
    async getAllModules(){
        let response = await fetch(SERVER+"/modules");
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return await response.json();
    }
    async getModuleById(id){
        let response =  await fetch(SERVER + "/modules/" + id);
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return await response.json();
    }
    async addModule(module){
        let sentencia = {"code":module.code,"cliteral": module.cliteral,"vliteral":module.vliteral ,"idCourse": module.idCourse}
        const response = await fetch(SERVER + "/modules" ,{method:'POST',body: JSON.stringify(sentencia), headers:{'Content-Type': 'application/json'}});
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return await response.json();
    }

    async removeModule(id){
        const response = await fetch(SERVER + "/modules/" + id,{method:'DELETE'});
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return await response.json();
    }

    async changeModule(module){
        let sentencia = {"code":module.code,"cliteral": module.cliteral,"vliteral":module.vliteral ,"idCourse": module.idCourse}
        const response = await fetch(SERVER + "/modules/"+module.id,{method:'PUT',body: JSON.stringify(sentencia), headers:{'Content-Type': 'application/json'}})
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        return await response.json();
    }
}