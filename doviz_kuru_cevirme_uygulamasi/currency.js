import API_KEY from "./config.js";

class Currency {
  constructor() {
    this.baseUrl = "https://api.freecurrencyapi.com/v1/latest?apikey=";
  }

  async exchange(amount, firstCurrency, secondCurrency) {
    const response = await fetch(
      `${this.baseUrl}${API_KEY}&base_currency=${firstCurrency}`
    );
    const result = await response.json();
    return amount * result.data[secondCurrency];
  }
}

export default Currency;
