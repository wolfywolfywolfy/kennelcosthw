function CalculateStay() {
    let dogSize = document.getElementById("dogSize").value;
    let days = document.getElementById("days").value;

    let price1 = parseInt(dogSize) * days;
    let tax1 = 1.047 * price1;
    let total1 = price1 + tax1;

    let secretProfit1 = (1.0485 * price1) - tax1;

    document.getElementById("price").textContent = `Cost: $${price1.toFixed(2)}`;
    document.getElementById("tax").textContent = `Tax: $${tax1.toFixed(2)}`;
    document.getElementById("total").textContent = `Total: $${total1.toFixed(2)}`;

    document.getElementById("secretProfit").textContent = `OUR Secret Profit: $${secretProfit1.toFixed(2)}`;
}