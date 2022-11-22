// fetch van jsonplaceholder API;

let mySession = JSON.parse(sessionStorage.getItem("dataObject"));
console.log(mySession);

let weather = document.getElementById("weather");
let url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
  mySession.inputcity +
  "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    weather.innerHTML = `
  <p>Location: ${data.resolvedAddress}</p>
  <p>Temperature: ${data.currentConditions.temp}°C</p>
  <p>Current conditions: ${data.currentConditions.conditions}</p>`;
  })
  .catch((err) => {
    alert("Wrong city name");
    console.log(err);
  });
