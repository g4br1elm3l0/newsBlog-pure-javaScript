import { ApiRequests } from "./requests.js"

class Signup {

    static pegandoElemento() {
        let buttonCadastrar = document.querySelector("#cadastrar--button")
        let inputNome = document.getElementById("nomeCadastro")
        let inputEmail = document.getElementById("emailCadastro")
        let inputFoto = document.getElementById("fotoCadastro")
        let inputSenha = document.getElementById("senhaCadastro")


        buttonCadastrar.addEventListener("click", async (event) => {
            event.preventDefault()

            let body = {
                "id": this.id,
                "token": this.token,
                "username": inputNome.value,
                "email": inputEmail.value,
                "avatarUrl": inputFoto.value,
                "password": inputSenha.value
            }
            await ApiRequests.createUser(body)
        })
    }
}
Signup.pegandoElemento()






