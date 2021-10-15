/** problem - tell the user whether he/she is eligible to vote
 * note: In India, after 18 years, you are aligible to vote
 * take user's age and tell him he is eligible to vote or not
 */

var yourAge = document.querySelector("#age").value;
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector("#output");

function checkVotingEligibility() {
  if (yourAge > 0 && yourAge < 150) {
    if (yourAge >= 18) {
      output.innerText = "Yay. You can vote";
    } else if (yourAge < 18) {
      output.innerText =
        "you will be eligible to vote in " + (18 - yourAge) + " years from now";
    }
  } else if (yourAge <= 0) {
    output.innerText = "Your age can not be 0 or lesser haha";
  } else if (yourAge > 150) {
    output.innerText = "Hey. Longest lived person is only 150 years";
  }
}

checkBtn.addEventListener("click", checkVotingEligibility);
