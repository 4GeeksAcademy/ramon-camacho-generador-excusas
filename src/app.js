import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let excuse = document.getElementById('excuse');
  let button = document.getElementById("generate");

  function generateExcuse() {

    let randWho = Math.floor(Math.random()*who.length);
    let randAction = Math.floor(Math.random()*action.length);
    let randWhat = Math.floor(Math.random()*what.length);
    let randwhen = Math.floor(Math.random()*when.length);

    return who[randWho] + ' ' + action[randAction] + ' ' + what[randWhat] + ' ' + when[randwhen];
  }

  excuse.innerHTML = generateExcuse()

  button.addEventListener("click", () => {
    excuse.innerHTML = generateExcuse();
  });
};
