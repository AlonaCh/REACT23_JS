function ageScoreCalculation() {
  let clientName = document.querySelector("#name").value.toUpperCase();
  let age = parseInt(document.querySelector("#age").value);
  // ages = document.querySelector('input[name="type=naber"]')
  const healthIssues = document.querySelectorAll("input[name='health']");
  const goodHabits = document.querySelectorAll('input[name="good_habits"]');
  const badHabits = document.querySelectorAll('input[name="bad_habits"]');
  
  let basicScore = 500;
  let scoreAge = 0;

  let amountHealthIssues=0;
  let amountGoodHabits=0;
  let amountBadHabits=0;

  /*Score depending on the user's age.Below the age of 18 years = 500 */
  if (age < 18) {
  scoreAge = 0;
  } else if (age >= 18 && age <= 25) {
    //18-25 -> + 10%
    scoreAge = basicScore * 0.1;
  } else if (age >= 26 && age <= 35) {
    scoreAge = basicScore * 0.3; //26-35 -> + 30%
  } else if (age >= 36 && age <= 45) {
    scoreAge = basicScore * 0.6; //36-45 -> +60%
  } else if (age >= 46 && age <= 55) {
    scoreAge = basicScore * 1; //46-55 -> +100%
  } else if (age >= 56 && age <= 65) {
    scoreAge = basicScore * 1.5; //56-65 -> +150%
  } else if (age >= 66){
    scoreAge = basicScore * 2.1; //66+ -> +210%
  } else {
    scoreAge = 0;
  }
  console.log(scoreAge);
  // Current health issue. Each health condition will Increase of 1% per score.

  for (const issue of healthIssues) {
    if (issue.checked) {
      amountHealthIssues++;
    }
  }
  for (const habit of goodHabits) {
    if (habit.checked) {
      amountGoodHabits++;
    }
  }
  for (const habitBad of badHabits) {
    if (habitBad.checked) {
      amountBadHabits++;
    }
  }
  console.log(amountHealthIssues, amountGoodHabits, amountBadHabits);

  const calculateIssues = (amountOfIssues, persentage) => {
    switch (amountOfIssues) {
      case 1:
        return 1 * (basicScore * persentage);
        break;
      case 2:
        return 2 * (basicScore * persentage);
        break;
      case 3:
        return 3 * (basicScore * persentage);
        break;
      default:
        return 0;
    } 
  } 
  // calc good first and then pass as persentage 
  const calculateGoodHabits = (amountOfGoodHabits, persentageGhabits) => {
    switch (amountOfGoodHabits) {
      case 1:
        return 1 *  (basicScore * persentageGhabits);
        break;
        case 2:
          return 2 *  (basicScore * persentageGhabits);
        break;
        case 3:
          return 3 * (basicScore * persentageGhabits);
        break;
        default:
        return 0;
    }
  }
// Calc bad habits
const calculateBadHabits = (amountOfBadHabits, persentageBhabits) => {
switch (amountOfBadHabits) {
  case 1:
    return (basicScore * persentageBhabits);
    break;
    case 2:
    return 2 * (basicScore * persentageBhabits);
    break;
    case 3:
    return 3 * (basicScore * persentageBhabits);
    break;
    default:
      return 0;
}
}
  let scoreHealthIssues = calculateIssues(amountHealthIssues, 0.1);
  let scoreGoodHabits = calculateGoodHabits(amountGoodHabits, 0.05);
  let scoreBadHabits = calculateBadHabits(amountBadHabits, 0.05); 

console.log(scoreHealthIssues, scoreGoodHabits, scoreBadHabits);

let totalScore = basicScore + scoreAge + scoreHealthIssues + scoreBadHabits - scoreGoodHabits;
document.querySelector("#output").textContent = `Hello ${clientName}! According to your data your risk score is: ${totalScore} €`;
}

