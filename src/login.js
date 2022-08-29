import { ApiRequests } from "./requests.js";
class LoginPage {
    static async renderizarLoginPage() {

        let emailInput = document.getElementById('emailInput')
        let passwordInput = document.getElementById('passwordInput')
        let btnLogin = document.getElementById('btnLogin')

        console.log(btnLogin);
        btnLogin.addEventListener("click", async () => {
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
