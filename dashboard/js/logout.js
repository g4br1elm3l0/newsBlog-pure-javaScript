class logButton{
    static logOutTrigger() {
        const logout = document.getElementById("logOut")
        logout.addEventListener("click",() => {        
            localStorage.removeItem("@kenzieBlog: token")
            localStorage.removeItem("@kenzieBlog: id")
            window.location.assign("/index.html")
        })
    }
}
export {logButton}