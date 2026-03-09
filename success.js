const userData = JSON.parse(localStorage.getItem("registeredUser"));

const fname = userData.fname;
const lname = userData.lname;

let name = (document.getElementById("name").textContent = `${fname} ${lname}`);



let result = localStorage.getItem("result");

console.log(result)

let scoreElement = document.getElementById("score").textContent = `${result}/9`

let logout = document.getElementById("logout");

logout.addEventListener ("click", function (){
    window.location.href = "index.html";
    localStorage.clear();

}) 