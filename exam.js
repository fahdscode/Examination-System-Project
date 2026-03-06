

let btnmark = document.getElementById("nav-btn-mark")
let markside = document.getElementById("mark-side")

btnmark.addEventListener("click",function(){
   markside.classList.add(".hidden")
   markside.classList.remove(".hidden")



})