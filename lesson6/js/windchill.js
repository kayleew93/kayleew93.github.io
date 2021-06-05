/* ------ CALCULATE WINDCHILL ------ 
let tempF = document.querySelector(".tempF").innerHTML;
let windSpeed = document.querySelector(".windspeed").innerHTML;

function windChill(tempF, windSpeed) {
  let output =
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * tempF * Math.pow(windSpeed, 0.16);

  document.querySelector("#windchill").innerHTML =
    output.toFixed(1) + "&#176;F";
}

let wind_chill =
  tempF <= 50 && windSpeed >= 3
    ? windChill(tempF, windSpeed)
    : (document.querySelector("#windchill").innerHTML = "N/A");

  */


let tempF = parseFloat(document.querySelector(".tempF").innerText);
let windSpeed = parseFloat(document.querySelector(".windspeed").innerText);

function windChill(tempF, windSpeed) {
  let output =
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * tempF * Math.pow(windSpeed, 0.16);

  document.querySelector("#windchill").innerHTML =
    output.toFixed(1) + "&#176;F";
}

let wind_chill =
  tempF <= 50 && windSpeed >= 3
    ? windChill(tempF, windSpeed)
    : (document.querySelector("#windchill").innerHTML = "N/A");