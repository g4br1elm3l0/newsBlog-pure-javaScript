
export class Request {

    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@kenzieBlog: token")
    static header = {
        "Content-type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async listPosts() {
        const list = await fetch(`${this.baseUrl}/posts?page=1`, {
            method: "GET",
            headers: this.header

        })
            .then(resp => resp.json())
            .then(resp => resp.data)
            .catch(err => console.log(err))

        return list
    }

    static async addPost(content) {
        const post = await fetch(`${this.baseUrl}/posts`, {
            method: "POST",
            headers: this.header,
            body: JSON.stringify(content)
        })
            .then(resp => resp.json())
            .catch(err => err)

        return post
    }

    static async searchUser(id) {
        const user = await fetch(`${this.baseUrl}/users/${id}`, {
            headers: this.header
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => err)

        return user
    }

}