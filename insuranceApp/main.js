
//Score depending on the user's age (number)
function ageScoreCalculation(){
  let clientName = document.querySelector("#name").value.toUpperCase();
  //let userName = document.getElementById("name").value;
  let age = parseInt(document.querySelector('#age').value);
  // ages = document.querySelector('input[name="type=naber"]')
  const healthIssues = document.querySelectorAll('input[name="health"]');
  const habits = document.querySelectorAll('input[name="habits"]');
  // const riskscoreResult = document.querySelector('#riskscore');
  let score = 500;

  if(age < 18){
score = 500;
  } else if(age >= 18 && age <=25) {
    //score *= 1.1; //18-25 -> + 10%
    score += score * 0.1;
  } else if(age >= 26 && age <=35) {
    score *= 1.3; //26-35 -> + 30%
} else if(age >= 36 && age <=45) {
  score *= 1.6 //36-45 -> +60%
} else if(age >= 46 && age <=55) {
  score *= 2//46-55 -> +100%
} else if(age >= 56 && age <=65){
  score *= 2.5//56-65 -> +150%
} else {
  score += score * 2.1; //66+ -> +210%
}

// Current health issue. Each healt condition will Increase of 1% per score.
healthIssues.forEach((issue) => {
  if(issue.checked) {
    score *= 1.01;
  }
});
/*Checkboxes for Habits Options. Good habits -> Reduce 5% for every good habit.
Bad habits -> Increase 5% for every bad habit.*/
/*habits.forEach((habitUnit) =>{
  //let habitOption = delivery.options[delivery.selectedIndex].value
  if(habitUnit.checked) {
  if(checkbox.value === "exercise" || 
  checkbox.value === "diet" ||
  checkbox.value === "nonSmoking"
  ) {
    score = score - (score * 0.05) 
  } else {
    score = score + (score * 0.05)
  }
  }
  });*/

document.querySelector("#output").textContent =`Hello ${clientName} ! Your Risk Score is: ${Math.round(score)}`;
}
// Client's name
/*const welcome = () => {
// let text = document.querySelector('#wlcomeText');
welcomeText.textContent = //`Hello + ${clientName}, we are happy that you choose our insurance company!`//
console.log(clientName);
}
clientName.addEventListener('change', welcome);*/
/*
// Calculates the base score according to the user's age (number)
const calcBaseScore = (num) => {
  let baseScore = 500;

  if (num < 18) {
    baseScore *= 1;
  } else if (num < 26) {
    baseScore *= 1.1;
  } else if (num < 36) {
    baseScore *= 1.3;
  } else if (num < 46) {
    baseScore *= 1.6;
  } else if (num < 56) {
    baseScore *= 2;
  } else if (num < 66) {
    baseScore *= 2.5;
  } else {
    baseScore *= 3.1;
  }

  return baseScore;
}; */

/*const calculateScore = () => {
   
    let ageResult = ''
    let healthIssuesResult = []
    let habitsResult = []

    ages.forEach((age) => {
        if (age) {
          ageResult = age.id
        }
      })
      switch (ageResult) {
        case 'age18_25':
          price += 7.50;
          break;
        case 'size4':
          price += 10.50;
          break;
        case 'size6':
          price += 12.50;
          break;
        case 'size8':
          price += 15.50;
          break;
      };

}
form.addEventListener('input', calculateScore) */
