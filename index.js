function calculateIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    var imc = weight / (height * height);
    var message;

    if (imc < 18.5) {
        message = 'Abaixo do peso';
    } else if (imc < 25) {
        message = 'Peso normal';
    } else if (imc < 30) {
        message = 'Sobrepeso';
    } else {
        message = 'Obesidade';
    }

    document.getElementById('result').innerText = 'Seu IMC é ' + imc.toFixed(2) + '. ' + message + '.';
}
