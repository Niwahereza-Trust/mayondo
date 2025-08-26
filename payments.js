document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("paymentForm");
  const tableBody = document.querySelector("#paymentTable tbody");

  // store payments in an array (later you can save to DB or localStorage)
  let payments = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // get form values
    const payment = {
      customer: document.getElementById("customerName").value,
      product: document.getElementById("productName").value,
      amount: parseFloat(document.getElementById("amount").value),
      type: document.getElementById("paymentType").value,
      date: document.getElementById("paymentDate").value,
    };

    // save payment
    payments.push(payment);

    // update table
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${payment.customer}</td>
      <td>${payment.product}</td>
      <td>${payment.amount.toFixed(2)}</td>
      <td>${payment.type}</td>
      <td>${payment.date}</td>
    `;
    tableBody.appendChild(row);

    // clear form
    form.reset();
  });
});
