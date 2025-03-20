const convertToCelsius = function(a) {
  let tempInCelsius = (a - 32) * (5/9);
  return Number( tempInCelsius.toFixed(1) );
};

const convertToFahrenheit = function(b) {
  let tempInFahrenheit = (b * 9 / 5) + 32;
  return Number( tempInFahrenheit.toFixed(1) );
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
