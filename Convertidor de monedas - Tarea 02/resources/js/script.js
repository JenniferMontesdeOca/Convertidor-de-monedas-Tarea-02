function convertTemp() {
    // Obtiene el valor del dinero ingresado y la convierte a un número de punto flotante
    const inputMoney = parseFloat(document.getElementById('inputMoney').value);
    // Obtiene la moneda seleccionada
    const inputCurrency = document.getElementById('inputCurrency').value;

    // Variables para almacenar las monedas 
    let rublo, yuan, dolar;
    // Convierte la temperatura según la unidad seleccionada
    if (inputCurrency === 'R') {
        rublo = inputMoney;
        yuan = inputMoney * 0.072;
        dolar = inputMoney * 0.0099;
    } else if (inputCurrency === 'Y') {
        rublo = inputMoney * 13.89;
        yuan = inputMoney;
        dolar = inputMoney * 0.14;
    } else if (inputCurrency === 'D') {
        rublo = inputMoney * 100.70;
        yuan = inputMoney * 7.25;
        dolar = inputMoney;
    }
    
    // Actualiza los elementos del DOM 
    document.getElementById('rubloValue').innerText = `${rublo.toFixed(2)} ₽`;
    document.getElementById('yuanValue').innerText = `${yuan.toFixed(2)} ¥`;
    document.getElementById('dolarValue').innerText = `${dolar.toFixed(2)} $`;
    // Actualiza la altura del mercurio en los termómetros
    updateThermometer('rubloR', rublo, -30, 50);
    updateThermometer('yuanY', yuan, -22, 122);
    updateThermometer('dolarD', dolar, 243.15, 323.15);
}

document.addEventListener("DOMContentLoaded", function () {
    const coins = document.querySelectorAll(".coin");
    coins.forEach(coin => {
        setInterval(() => {
            coin.style.transform = `translateY(${Math.random() * -20}px)`;
            setTimeout(() => {
                coin.style.transform = "translateY(0px)";
            }, 300);
        }, 1000);
    });
});