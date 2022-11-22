// fetch van jsonplaceholder API;
let weather = document.getElementById("weather");

let url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/brussels?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    weather.innerHTML = `
    <p>Location: ${data.resolvedAddress}</p>
    <p>Temperature: ${data.currentConditions.temp}°C</p>
    <p>Current conditions: ${data.currentConditions.conditions}</p>`;
  });
