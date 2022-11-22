//atatch submit button to a variable
let submitbtn = document.getElementById("submitbtn");

//assign an event listener to the submit button
submitbtn.addEventListener("click", function () {
  //retrieve values from the input fields and attach them to variables
  let inputname = document.getElementById("inputname").value;
  let inputdate = document.getElementById("inputdate").value;
  let inputcity = document.getElementById("inputcity").value;

  console.log(inputname, inputdate, inputcity);
  //create new object
  let dataObject = {
    inputname: inputname,
    inputdate: inputdate,
    inputcity: inputcity,
  };

  //check if all input fields are valid

  if (
    dataObject.inputname == "" ||
    dataObject.inputdate == "" ||
    dataObject.inputcity == ""
  ) {
    //display error message
    alert("Please fill all the fields");
  } else {
    // localStorage.setItem('dataObject', JSON.stringify(dataObject));
    sessionStorage.setItem("dataObject", JSON.stringify(dataObject));

    window.location.href = "result.html";
  }
});

// let local = JSON.parse(localStorage.getItem('dataObject'));
let session = JSON.parse(sessionStorage.getItem('dataObject'));


      

console.log('session:' + sessionStorage.getItem('dataObject'));
// console.log('local: ' + localStorage.getItem('dataObject'));

document.getElementById('name').innerHTML = session.inputname;

let currentYear = new Date().getFullYear()  // returns the current year
let age = currentYear - session.inputdate
document.getElementById('age').innerHTML = age;
