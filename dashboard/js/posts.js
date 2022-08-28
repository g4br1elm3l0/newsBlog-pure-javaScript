import { Post } from "./usersPosts.js";
import { Request } from "./request.js";
import { logButton } from "./logout.js";
import { AddPost } from "./addPost.js";

export class Render {
    static async renderPosts() {
        const profile = document.getElementById("profile")

        const user = document.getElementById("username")

        const list = document.querySelector(".list")

        const postDatabase = await Request.listPosts()

        const { avatarUrl, username } = await Request.searchUser(localStorage.getItem("@kenzieBlog: id"))

        profile.src = avatarUrl
        user.innerText = username

        list.innerHTML = ""

        postDatabase.forEach(({ id, content, createdAt, user }) => {
            const postCard = new Post(user.avatarUrl, user.username, content, createdAt, user.id, id)

            list.appendChild(postCard.createCard())
        });
    }
}

Render.renderPosts()
logButton.logOutTrigger()
AddPost.post()