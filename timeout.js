

const userData = JSON.parse(localStorage.getItem("registeredUser"));

const fname = userData.fname;
const lname = userData.lname;


let name = document.getElementById("name").textContent = `${fname} ${lname}`;

let logout = document.getElementById("logout");

logout.addEventListener ("click", function (){
    localStorage.clear();
    window.location.href = "index.html";
}) 