let total = 0;
let transactionCount = 0;

function addExpense() {

    let expenseName = document.getElementById("expenseName").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;

    if (expenseName === "" || amount === "" || date === "") {
        alert("Please fill all fields");
        return;
    }

    total += Number(amount);
    transactionCount++;

    document.getElementById("total").innerText = total;

    let countElement = document.getElementById("count");
    if (countElement) {
        countElement.innerText = transactionCount;
    }

    let list = document.getElementById("expenseList");

    let li = document.createElement("li");

    li.innerHTML = `
        <strong>${expenseName}</strong><br>
        ${category} | ₹${amount} | ${date}
        <br><br>
        <button onclick="deleteExpense(this, ${amount})">
            Delete
        </button>
    `;

    list.appendChild(li);

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
}

function deleteExpense(button, amount) {

    total -= Number(amount);
    transactionCount--;

    document.getElementById("total").innerText = total;

    let countElement = document.getElementById("count");
    if (countElement) {
        countElement.innerText = transactionCount;
    }

    button.parentElement.remove();
}
function toggleTheme() {

    document.body.classList.toggle("light-mode");

    let btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("light-mode")) {
        btn.innerHTML = "☀️ Light Mode";
    } else {
        btn.innerHTML = "🌙 Dark Mode";
    }
}
