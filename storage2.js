// let local = JSON.parse(localStorage.getItem('dataObject'));
let session = JSON.parse(sessionStorage.getItem('dataObject'));


      

console.log('session:' + sessionStorage.getItem('dataObject'));
// console.log('local: ' + localStorage.getItem('dataObject'));

document.getElementById('name').innerHTML = session.inputname;

let currentYear = new Date().getFullYear()  // returns the current year
let age = currentYear - session.inputdate
document.getElementById('age').innerHTML = age;
