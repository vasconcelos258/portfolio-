var lista = document.querySelectorAll("#navBar #lista li")
var navBar = document.querySelector("#navBar")
var aboutText = document.querySelector("#about .text")
var closeBar = document.querySelector("#navBar .close")
var btnMenu = document.querySelector(".btnMenu")


lista.forEach(li => {
  li.addEventListener("click", ()=> {
    navBar.classList.remove("active")
    if (li.className == "aboutPage") {
      aboutText.classList.add("active")
    }else if(li.className=="homePage"){
      aboutText.classList.remove("active")
      
    } else {}
  })
})

btnMenu.addEventListener("click", function () {
  navBar.classList.add("active")

})
closeBar.addEventListener("click", function () {
  navBar.classList.remove("active")

})