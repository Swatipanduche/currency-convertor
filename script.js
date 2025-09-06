async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await response.json();

    const rate = data.rates[to];
    const converted = (amount * rate).toFixed(2);
    document.getElementById('result').textContent = `${amount} ${from} = ${converted} ${to}`;
}
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
