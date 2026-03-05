let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repass = document.getElementById("repass");

function validationInputs(input) {
    let regex ={ 
        fname: /^[A-Za-z]$/,
        lname: /^[A-Za-z]$/,
        email: /^[A-Za-z0-9]+([._-][\w]+)*\@[\w]+[\-]?[\w]\.[A-Za-z]{2,6}$/,
        password:/[\w]{8,}$/
    }

    if (!regex[input.id].test(input.value)) {
        throw new Error(`Invalid ${input.id}`);
    }
}