const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

let number = 0;
let clicked = false;

function showNumber() {
  if (!clicked) {
    document.getElementById("p_main").classList.add("big-number");
  }
}

decreaseBtn.onclick = function () {
  number -= 1;
  document.getElementById("p_main").textContent = number;
  if (clicked == false) {
    showNumber();
  }
  clicked = true;
};

increaseBtn.onclick = function () {
  number += 1;
  document.getElementById("p_main").textContent = number;
  if (clicked == false) {
    showNumber();
  }
  clicked = true;
};

resetBtn.onclick = function () {
  number = 0;
  document.getElementById("p_main").textContent = number;
  if (clicked == false) {
    showNumber();
  }
  clicked = true;
};

/*TYPE CONVERSION
     let age = window.prompt("How old are you?");
     age = Number(age);
     age += 1; //liczba   

     mozliwośći to:
     Number(x);
     Boolean(x);
     String(x);
     zeby wypisc typ:

     console.log(typeof x);
*/
