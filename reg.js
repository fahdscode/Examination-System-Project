let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repass = document.getElementById("repass");
let btnregister = document.getElementById("btnregister")
let form = document.getElementById("regist");

export function validationInputs() {

    let regex = {
        fname: /^[A-Za-z]{2,}$/,
        lname: /^[A-Za-z]{2,}$/,
        email: /^[A-Za-z0-9]+([._-][\w]+)*\@[\w]+[\-]?[\w]\.[A-Za-z]{2,6}$/,
        password: /^[\w]{8,}$/,
        repassword: /^[\w]{8,}$/
    }

    if (!regex.fname.test(fname.value) || fname.value.trim() === "") {
        fname.classList.add('is-invalid')
        fname.classList.remove('is-valid')
    } else {
        fname.classList.add('is-valid')
        fname.classList.remove('is-invalid')
    }

    if (!regex.lname.test(lname.value) || lname.value.trim() === "") {
        lname.classList.add('is-invalid')
        lname.classList.remove('is-valid')
    } else {
        lname.classList.add('is-valid')
        lname.classList.remove('is-invalid')
    }

    if (!regex.email.test(email.value)) {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
    } else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }

    if (!regex.password.test(password.value)) {
        password.classList.add('is-invalid')
        password.classList.remove('is-valid')
    } else {
        password.classList.add('is-valid')
        password.classList.remove('is-invalid')
    }
    if (!regex.repassword.test(repass.value) || repass.value!==password.value) {
        repass.classList.add('is-invalid')
        repass.classList.remove('is-valid')
    } else {
        repass.classList.add('is-valid')
        repass.classList.remove('is-invalid')
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validationInputs();

})

btnregister.addEventListener("click",function(){
    let valided = fname.classList.contains("is-valid")&&
    lname.classList.contains("is-valid")&&
    email.classList.contains("is-valid")&&
    password.classList.contains("is-valid")&&
    repass.classList.contains("is-valid");

    if(valided){
        window.location.href = "login.html"
    }

})