// let local = JSON.parse(localStorage.getItem('dataObject'));
let session = JSON.parse(sessionStorage.getItem('dataObject'));


      
  


console.log('session:' + sessionStorage.getItem('dataObject'));
// console.log('local: ' + localStorage.getItem('dataObject'));

document.getElementById('name').innerHTML = session.inputname;