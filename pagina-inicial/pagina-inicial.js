// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  fetch("navBar.html")
    .then((response) => response.text())
    .then((data) => {
      navbarContainer.innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar a navbar:", error));
});
