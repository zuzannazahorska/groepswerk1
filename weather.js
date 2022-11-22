// fetch van jsonplaceholder API;
// Update
let mySession = JSON.parse(sessionStorage.getItem("dataObject"));
console.log("test" + mySession);

let weather = document.getElementById("weather");
let url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
  mySession.inputcity +
  "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (data.currentConditions.conditions == "Overcast") {
      document.getElementById("myImg").src = "Images/overcast.gif";
    } else if (data.currentConditions.conditions == "Partially cloudly") {
      document.getElementById("myImg").src = "Images/overcast.gif";
    } else if (data.currentConditions.conditions == "Rain") {
      document.getElementById("myImg").src = "Images/rain.gif";
    }
    weather.innerHTML = `
  <p>Location: ${data.resolvedAddress}</p>
  <p>Temperature: ${data.currentConditions.temp}°C</p>
  <p>Current conditions: ${data.currentConditions.conditions}</p>`;
  })
  .catch((err) => {
    alert("Wrong city name");
    console.log(err);
  });
