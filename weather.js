// fetch van jsonplaceholder API;
// Update
let mySession = JSON.parse(sessionStorage.getItem("dataObject"));
console.log("test" + mySession);

let weather = document.getElementById("weather");
let url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
  mySession.inputcity +
  "?unitGroup=metric&include=current&key=JN5WK3U2N95ZKUL2QSK3D8R2P&contentType=json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (data.currentConditions.conditions == "Overcast") {
      document.getElementById("myImg").src = "Images/overcast.gif";
    } else if (data.currentConditions.conditions == "Partially cloudy") {
      document.getElementById("myImg").src = "Images/overcast.gif";
    } else if (data.currentConditions.conditions == "Rain") {
      document.getElementById("myImg").src = "Images/rain.gif";
    } else if (data.currentConditions.conditions == "Clear") {
      document.getElementById("myImg").src = "Images/4lQ5.gif";
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
