import User from "./user.class.js";

export default class Module {
    constructor(code,cliteral,vliteral,idCourse) {
        this.code = code;
        this.cliteral = cliteral
        this.vliteral = vliteral
        this.idCourse = idCourse;
    }
    getInfo(){
        return 'Code: ' + this.code + ', Cliteral: ' +this.cliteral + ', Vliteral: ' + this.vliteral + ', IdCourse: ' + this.idCourse;
    }

}