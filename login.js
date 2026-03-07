// login.js
const form = document.getElementById("regist");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailRegex = /^[A-Za-z0-9]+([._-][\w]+)*\@[\w]+[\-]?[\w]\.[A-Za-z]{2,6}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();

  const emailValid = emailRegex.test(email);
  const passwordValid = password.length >= 8;

  emailInput.classList.toggle("is-valid", emailValid);
  emailInput.classList.toggle("is-invalid", !emailValid);

  passwordInput.classList.toggle("is-valid", passwordValid);
  passwordInput.classList.toggle("is-invalid", !passwordValid);

  if (!emailValid || !passwordValid) return;

  const savedUser = JSON.parse(
    localStorage.getItem("registeredUser") || "null",
  );

  const savedEmail = savedUser?.email
    ? String(savedUser.email).trim().toLowerCase()
    : "";

  if (!savedUser || savedEmail !== email) {
    alert("Account not found");
    return;
  }

  if (savedUser.password !== password) {
    alert("Wrong password");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "examPage.html";
});
