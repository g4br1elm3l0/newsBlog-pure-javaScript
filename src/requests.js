export class ApiRequests {
    static baseUrl = "https://blog-m2.herokuapp.com/"
    static token = localStorage.getItem("@kenzieBlog:token") || ""
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }
    static header_noAut = {
        "Content-Type": "application/json",
    }
    static async createUser(body) {
        await fetch(`${this.baseUrl}users/register`, {
            method: "POST",
            headers: this.header_noAut,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })

            .catch(err => console.log(err))
    }

    static async login(body) {
        let response = false
        await fetch(`${this.baseUrl}users/login`, {
            method: "POST",
            headers: this.header_noAut,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                localStorage.setItem("@kenzieBlog:token", res.token)
                localStorage.setItem("@kenzieBlog:User_id", res.userId)
                localStorage.setItem("@kenzieBlog:User_id", res.userId)
                localStorage.setItem("@kenzieBlog:User_id", res.userId)
                response = true
            })
            .catch(err => {
                console.log(err)

            })
        return response
    }
}