const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const resetBtn = document.querySelector(".reset");
const error = document.querySelector(".error");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach((val) => val.addEventListener("click", handleClick));
tipCustom.addEventListener("input", tipInputFun);
resetBtn.addEventListener("click", reset);

billInput.value = "1";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 1;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFun() {
  billValue = parseFloat(billInput.value);
  if (billValue < 1 || isNaN(billValue)) {
    billValue = 1;
    billInput.value = "1";
  }
  calculateTip();
}

function peopleInputFun() {
  peopleValue = parseInt(peopleInput.value);
  if (peopleValue < 1 || isNaN(peopleValue)) {
    error.style.display = "flex";
    peopleInput.style.border = "thick solid red";
    peopleInput.value = "1";
    peopleValue = 1;
  } else {
    error.style.display = "none";
    peopleInput.style.border = "none";
    calculateTip();
  }
}

function tipInputFun() {
  tipValue = parseFloat(tipCustom.value) / 100 || 0;

  tips.forEach((val) => val.classList.remove("active-tip"));
  calculateTip();
}

function handleClick(event) {
  tips.forEach((val) => {
    val.classList.remove("active-tip");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tip");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue * (1 + tipValue)) / peopleValue;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}

function reset() {
  billInput.value = "1";
  peopleInput.value = "1";
  tipCustom.value = "";
  billValue = 1;
  peopleValue = 1;
  tipValue = 0.15;

  tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
  totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

  tips.forEach((val) => val.classList.remove("active-tip"));

  error.style.display = "none";
  peopleInput.style.border = "none";
}
