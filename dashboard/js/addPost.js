import { Request } from "./request.js"
import { Render } from "./posts.js"

export class AddPost{
    static post() {
        const postField = document.getElementById("post")
        const submitBtns = document.querySelectorAll("#postBtn")

        submitBtns.forEach(btn => {
            btn.addEventListener("click", async (e) => {
                e.preventDefault()
    
                const post = {
                    content: postField.value
                }
    
                const request = await Request.addPost(post)
    
                Render.renderPosts()
    
                postField.value = ""
            })
            
        });
    }
}