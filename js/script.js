let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");


amountElement.addEventListener("input", () => {
    console.log(`Current amount: ${amountElement.value}`);
})

currencyElement.addEventListener("input", () => {
    console.log(`Current currency: ${currencyElement.value}`);
})

formElement.addEventListener("reset", () => {
    console.log(`The form has been reset.`);
}) //resetowanie formularza


formElement.addEventListener("submit", () => {
    console.log(`The form has been sent.`);
}) //wysyłanie formularza


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let EUR = 4.8000;
    let USD = 4.4000;
    let GBP = 5.6000;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "GBP":
            result = amount / GBP;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;

});
