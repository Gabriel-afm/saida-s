document.getElementById("addProduct").addEventListener("click", () => {
  const productNameInput = document.getElementById("productName");
  const quantityInput = document.getElementById("quantity");
  const conversionValueInput = document.getElementById("conversionValue");

  let productName = productNameInput.value.trim();
  let productCode = productName ? "0000" : "";
  let quantity = parseFloat(quantityInput.value);
  let conversionValue = parseFloat(conversionValueInput.value);
  let convertedValue = quantity * conversionValue;

  if (!productName || isNaN(quantity) || isNaN(conversionValue)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  const tableBody = document.querySelector("#productTable tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${productName}</td>
    <td>${quantity}</td>
    <td>${convertedValue}</td>
  `;

  tableBody.appendChild(newRow);

  productNameInput.value = "";
  quantityInput.value = "";
  conversionValueInput.value = "";
});

document.getElementById("generateWhatsApp").addEventListener("click", () => {
  const rows = document.querySelectorAll("#productTable tbody tr");
  if (rows.length === 0) {
    alert("Adicione produtos à lista antes de gerar a mensagem!");
    return;
  }

  let message = "Lista de Produtos:\n\n";

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    message += `- **${cells[0].textContent}**\n`;
    message += `  Quantidade: ${cells[1].textContent}\n`;
    message += `  **Valor Convertido**: ${cells[2].textContent}\n\n`;
  });

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/5531984400112?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
});
