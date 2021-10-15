var monthInput = document.querySelector("#month-input");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector("#output");

checkBtn.addEventListener("click", checkSeasonHandler);

function checkSeasonHandler() {
  if (monthInput.value) {
    if (
      monthInput.value === "September" ||
      monthInput.value === "October" ||
      monthInput.value === "November"
    ) {
      console.log("autumn");
      output.innerText = "it is autumn";
    } else if (
      monthInput.value === "December" ||
      monthInput.value === "January" ||
      monthInput.value === "February"
    ) {
      output.innerText = "it is winter";
    } else if (
      monthInput.value === "March" ||
      monthInput.value === "April" ||
      monthInput.value === "May"
    ) {
      output.innerText = "it is spring";
    } else if (
      monthInput.value === "June" ||
      monthInput.value === "July" ||
      monthInput.value === "August"
    ) {
      output.innerText = "it is summer";
    }
  } else {
    output.innerText = "Enter valid input pls";
  }
}
