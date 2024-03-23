const form = document.getElementById("form-deposit");
const messageElement = document.querySelector(".message");

const nameInput = document.getElementById("name").value;
const bankAccountInput = document.getElementById("number").value;
const valueInput = document.getElementById("value").value;

function nameValidation(nome) {
  const fullName = nome.trim().split(" ");
  return fullName.length >= 2;
}

function formatCurrency(cash) {
  const money = parseFloat(cash);
  const newCash = money.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return newCash;
}

function showMenssage(message, color) {
  messageElement.innerHTML = message;
  messageElement.style.backgroundColor = color;
  messageElement.style.display = "block";
}



form.addEventListener("submit", function (e) {
  let validateForm = false;
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const bankAccountInput = document.getElementById("number");
  const valueInput = document.getElementById("value");

  const name = nameInput.value;
  const bankAccount = bankAccountInput.value;
  const value = valueInput.value;
  const money = formatCurrency(value);

  const message = `<h1>Depósito comfirmado com sucesso </h1>
                  <p>Nome: ${name}</p>
                  <p>Numero da conta: ${bankAccount}</p>
                  <p>Valor depositado: ${money}</p>`;

  validateForm = nameValidation(name);
  nameInput.style.border = '';

  if (validateForm) {
    showMenssage(message, "green");

    nameInput.value = "";
    bankAccountInput.value = "";
    valueInput.value = "";
  } else {
    showMenssage("Digite o seu nome completo!", "red");

    nameInput.style.border = "2px solid red";
  }
});
