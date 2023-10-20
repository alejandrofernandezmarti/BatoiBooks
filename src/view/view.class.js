
export default class ViewClass {
    constructor() {
        this.list = document.getElementById('list')
        this.messages = document.getElementById('message')
        // this.bookForm =
    }
    renderOptionsModule(modules){
        const DOMselect = document.getElementById('id-module')

        modules.forEach((module) => {
            const DOMoption = document.createElement('option')
            DOMoption.textContent = module.cliteral
            DOMoption.value = module.code
            // DOMoption.setAttribute('value',module.code)   // equivale a la linea anterior

            DOMselect.appendChild(DOMoption)
        })
        /* modules.forEach((module) => {       Lo mismo de otra manera  (la otra es más correcta)
            DOMselect.innerHTML += `<option value=${module.code}>${module.cliteral}</option>`
        })*/
    }

    renderDeleteBook(id){
        const DOMbook = document.getElementById('book o como se llame')
        DOMbook.parentElement.removeChild(DOMbook)
    }
    renderMessage(type,message){
        const DOMnewMessage = document.createElement('div')
        DOMnewMessage.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()"> `
        DOMnewMessage.className  = type + "alert alert-danger alert-dismissible"
        // DOMnewMessage.role = "alert"
        DOMnewMessage.setAttribute('role',"alert")

        this.messages.appendChild(DOMnewMessage)
    }
}