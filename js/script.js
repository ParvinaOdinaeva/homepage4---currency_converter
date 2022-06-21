{
  const calculateResult = (amount, currency) => {
    const EUR = 4.8000;
    const USD = 4.4000;
    const GBP = 5.6000;

    switch (currency) {
      case "EUR":
        return amount / EUR;

      case "USD":
        return amount / USD;

      case "GBP":
        return amount / GBP;
    }
  }

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(amount, currency);
    updateResultText(amount, result, currency);
  }

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  }

  init();
}