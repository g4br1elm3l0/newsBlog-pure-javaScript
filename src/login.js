import { ApiRequests } from "./requests.js";
class LoginPage {
    static async renderizarLoginPage() {
        // let token = localStorage.getItem("@kenzieBlog:token")

        // if (token) {
        //     window.location.assign("./dashboard/dashboard.html")
        // }

        let emailInput = document.getElementById('emailInput')
        let passwordInput = document.getElementById('passwordInput')
        let btnLogin = document.getElementById('btnLogin')

        console.log(btnLogin);
        btnLogin.addEventListener("click", async () => {
            console.log("cheguei aqui");
            let data = {
                "email": emailInput.value,
                "password": passwordInput.value,
            }
            await ApiRequests.login(data)
                .then(() => {
                    window.location.assign('../dashboard/dashboard.html')
                })

        })

    }


}


LoginPage.renderizarLoginPage()
