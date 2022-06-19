// Utilización de FETCH para traer datos de API de registros de tarjetas de crédito

const button = document.getElementById("button");
button.addEventListener('click', () => {
    fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=1")
    .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
    .then((res) => res.json())
    .then((res) => console.log(res));
});





