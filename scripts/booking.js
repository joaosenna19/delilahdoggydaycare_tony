/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let dailyRate = 35;
let calculatedCost = document.querySelector("#calculated-cost");
let halfDayButton = document.querySelector("#half");
let fullDayButton = document.querySelector("#full");
let dayBtns = Array.from(
  document.querySelector(".day-selector").getElementsByTagName("li")
);
let clearButton = document.querySelector("#clear-button");
// let monBtn = document.querySelector('#monday');
// let tueBtn = document.querySelector('#tuesday');
// let wedBtn = document.querySelector('#wednesday');
// let thuBtn = document.querySelector('#thursday');
// let friBtn = document.querySelector('#friday');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayBtns.forEach((btn) => {
  if (!btn.classList.contains("clicked")) {
    btn.addEventListener("click", () => btn.classList.add("clicked"));
    btn.addEventListener("click", calculate);
  }
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function reset() {
  calculatedCost.innerHTML = 0;
  dayBtns.forEach((btn) => {
    if (btn.classList.contains("clicked")) {
      btn.classList.remove('clicked');
    }
  });
  
}

clearButton.addEventListener("click", reset);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDayCalculation() {
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  dailyRate = 20;

  calculatedCost.innerHTML = 0;
  dayBtns.forEach((btn) => {
    if (btn.classList.contains("clicked")) {
      calculatedCost.innerHTML = parseInt(calculatedCost.innerHTML) + dailyRate;
    }
  });
}

halfDayButton.addEventListener("click", halfDayCalculation);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDayCalculation() {
  halfDayButton.classList.remove("clicked");
  fullDayButton.classList.add("clicked");
  dailyRate = 35;

  calculatedCost.innerHTML = 0;
  dayBtns.forEach((btn) => {
    if (btn.classList.contains("clicked")) {
      calculatedCost.innerHTML = parseInt(calculatedCost.innerHTML) + dailyRate;
    }
  });
}

fullDayButton.addEventListener("click", fullDayCalculation);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
  if (fullDayButton.classList.contains("clicked")) {
    fullDayCalculation();
  } else {
    halfDayCalculation();
  }
}
