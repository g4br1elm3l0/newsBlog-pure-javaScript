export class Post{
    constructor(imgUrl, userName, post, date, userId, postId){
        this.imgUrl = imgUrl
        this.userName = userName
        this.post = post
        this.date = date
        this.userId = userId
        this.postId = postId
    }

    createCard() {

        const cardContainer = document.createElement("li")
        cardContainer.classList.add("list__card")

        const cardImg = document.createElement("img")
        cardImg.src = this.imgUrl
        cardImg.alt = "Foto do Usuário"
        cardImg.title = "Foto do Usuário"

        const cardContent = document.createElement("div")
        cardContent.classList.add("card__content")

        const cardName = document.createElement("h2")
        cardName.innerText = this.userName

        const cardPost = document.createElement("p")
        cardPost.innerText = this.post

        cardContent.append(cardName, cardPost)

        const boxBtns = document.createElement("div")
        boxBtns.classList.add("box__btns")

        const datePost = document.createElement("span")
        datePost.innerText = this.date.substring(0, 10)
    }
}