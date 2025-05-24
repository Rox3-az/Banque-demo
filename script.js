function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error-message");

  if (email === "roxana.lopez@bnivirtuelle.com" && password === "BNI@2025_Accès!") {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Identifiants incorrects. Veuillez réessayer.";
  }
}
