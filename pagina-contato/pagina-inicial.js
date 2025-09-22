document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && email && mensagem) {
    alert("Mensagem enviada com sucesso! Retornaremos em breve.");
    this.reset();
  } else {
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
});

document.getElementById("telefone").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  e.target.value = value;
});
