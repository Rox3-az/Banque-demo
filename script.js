function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (email === "user@demo.com" && password === "1234") {
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Email ou mot de passe incorrect";
  }
}
