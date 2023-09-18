
function ageScoreCalculation(){
  let clientName = document.querySelector("#name").value.toUpperCase();
  let age = parseInt(document.querySelector('#age').value);
  // ages = document.querySelector('input[name="type=naber"]')
  const healthIssues = document.querySelectorAll("input[name='health']");
  const habits = document.querySelectorAll('input[name="habits"]');
  // const riskscoreResult = document.querySelector('#riskscore');
  let basicScore = 500;
  let scoreAge = 0;
  let scoreHealthIssues = 0;
  let scoreGoodHabits = 0;
  let scoreBadHabits = 0;
/*Score depending on the user's age.Below the age of 18 years = 500 */
  if(age < 18){
let scoreAge = basicScore;
  } else if(age >= 18 && age <=25) {
    //18-25 -> + 10%
    scoreAge = scoreAge + (basicScore * 0.1);
  } else if(age >= 26 && age <=35) {
    scoreAge = scoreAge + (basicScore * 0.3);; //26-35 -> + 30%
} else if(age >= 36 && age <=45) {
  scoreAge = scoreAge + (basicScore * 0.6);//36-45 -> +60%
} else if(age >= 46 && age <=55) {
  scoreAge = scoreAge + (basicScore * 1);//46-55 -> +100%
} else if(age >= 56 && age <=65){
  scoreAge = scoreAge + (basicScore * 1.5); //56-65 -> +150%
} else {
  scoreAge = scoreAge + (basicScore * 2.1); //66+ -> +210%
}
// Current health issue. Each healt condition will Increase of 1% per score.
healthIssues.forEach((issue) => {
  issue.addEventListener("input", () => {
    let quantityIssues = 0;
    for (let i = 0; i < healthIssues.length; i++) {
      if (healthIssues[i].checked) {
        quantityIssues++;
      }
    }
  if (quantityIssues === 1) {
    scoreHealthIssues = 1 * (basicScore * 0.01);
  } else if (quantityIssues === 2){
    scoreHealthIssues = 2 * (basicScore * 0.01);
  } else if (quantityIssues === 3){
    scoreHealthIssues = 3 * (basicScore * 0.01);
  } else {
    scoreHealthIssues = 0;
    
  }
});
});

/*Checkboxes for Habits Options. Good habits -> Reduce 5% for every good habit. Bad habits -> Increase 5% for every bad habit.*/
/*
habits.forEach((habitUnit) => {
  //let habitOption = delivery.options[delivery.selectedIndex].value
  if(habitUnit.checked) {
  if(habitUnit.value === "exercise" || 
  habitUnit.value === "diet" ||
  habitUnit.value === "nonSmoking"
  ) {
    score *= 0.95 //score = score - (score * 0.05) 
  } else {
    score *= 1.05 //score = score + (score * 0.05)
  }
  }
  });
*/
document.querySelector("#output").textContent =`Hello ${clientName}! According to your data your risk score is: ${Math.round(basicScore + scoreAge + scoreHealthIssues - scoreGoodHabits + scoreBadHabits)}`;
}




