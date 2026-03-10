const userData = JSON.parse(localStorage.getItem("registeredUser"));

const fname = userData.fname;
const lname = userData.lname;

let name = (document.getElementById("name").textContent = `${fname} ${lname}`);



let result = localStorage.getItem("result");

console.log(result)

function displayResult() {
    if (result === null) {
        let scoreElement = document.getElementById("score").textContent = `0/9`
    }
    if (result >=  1) {

        let scoreElement = document.getElementById("score").textContent = `${result}/9`
    }

}
displayResult();


let logout = document.getElementById("logout");

logout.addEventListener ("click", function (){
    window.location.href = "index.html";
    localStorage.clear();

}) 