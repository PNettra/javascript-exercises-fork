const convertToCelsius = (degreesFahrenheit) => {
  let C = (degreesFahrenheit - 32) * (5/9);
  let roundedC = C.toFixed(1);
  
  if (parseInt(C) === C) {
      return C;
  } else {
    return Number(roundedC);
  }
};

const convertToFahrenheit = (degreesCelsius) => {
  let F = degreesCelsius * (9/5) + 32;
  let roundedF = F.toFixed(1);
  
  if (parseInt(F) === F) {  // return F if F is an integer (no tenth place and no rounding needed) 
      return F;
  } else {
    return Number(roundedF); // roundedF is a string due to toFixed returning strings
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
