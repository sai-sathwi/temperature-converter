let temperatureValue = '';

function appendNumber(number) {
  temperatureValue += number;
  document.getElementById('temperatureInput').value = temperatureValue;
}

function clearDisplay() {
  temperatureValue = '';
  document.getElementById('temperatureInput').value = temperatureValue;
}
function appendDecimal() {
  if (!temperatureValue.includes('.')) {
      temperatureValue += '.';
      document.getElementById('temperatureInput').value = temperatureValue;
  }
  function clearResult() {
    document.getElementById('result').textContent = '';
    clearResult(); 
  }
}
function convertTemperature(from, to) {
  const temperature = parseFloat(temperatureValue);
  if (!isNaN(temperature)) {
    let result;
    if (from === 'celsius' && to === 'fahrenheit') {
      result = (temperature * 9/5) + 32;
      document.getElementById('result').textContent = ${temperature.toFixed(2)}°C is ${result.toFixed(2)}°F;
    } else if (from === 'celsius' && to === 'kelvin') {
      result = temperature + 273.15;
      document.getElementById('result').textContent = ${temperature.toFixed(2)}°C is ${result.toFixed(2)} K;
    } else if (from === 'fahrenheit' && to === 'celsius') {
      result = (temperature - 32) * 5/9;
      document.getElementById('result').textContent = ${temperature.toFixed(2)}°F is ${result.toFixed(2)}°C;
    } else if (from === 'fahrenheit' && to === 'kelvin') {
      result = (temperature - 32) * 5/9 + 273.15;
      document.getElementById('result').textContent = ${temperature.toFixed(2)}°F is ${result.toFixed(2)} K;
    } else if (from === 'kelvin' && to === 'celsius') {
      result = temperature - 273.15;
      document.getElementById('result').textContent = ${temperature.toFixed(2)} K is ${result.toFixed(2)}°C;
    } else if (from === 'kelvin' && to === 'fahrenheit') {
      result = (temperature - 273.15) * 9/5 + 32;
      document.getElementById('result').textContent = ${temperature.toFixed(2)} K is ${result.toFixed(2)}°F;
    }
  } else {
    document.getElementById('result').textContent = "Please enter a valid temperature.";
  }
  }