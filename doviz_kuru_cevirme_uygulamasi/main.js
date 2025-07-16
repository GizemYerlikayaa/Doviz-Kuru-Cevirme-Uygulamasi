const amount = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");
import Currency from "./currency.js"; // doğru dosya adını ve uzantısını yaz
const currency = new Currency();

runEventListeners();

function runEventListeners() {
  amount.addEventListener("input", exchange);
}

function exchange() {
  const amountElement = Number(amount.value.trim());
  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;

  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;

  currency
    .exchange(amountElement, firstOptionValue, secondOptionValue)
    .then((result) => {
      resultInput.value = result.toFixed(3);
    });
}
