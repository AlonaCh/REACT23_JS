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
        let scoreAge = basicScore;
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
      } else {
        scoreAge = basicScore * 2.1; //66+ -> +210%
      }

      //Score depending on the issues.
    let count =0;
    let scoreHealthIssues =0;
      healthIssues.forEach((issue) => {
      if (issue.checked) {
        count++;}
        }
        if (count === 1){
            additionalHealthIssues = basicScore * 0.01;
        } else if (count === 2){
            additionalHealthIssues = 2 * (basicScore * 0.01);
        } else if (count === 3) {
            additionalHealthIssues = 3 * (basicScore * 0.01); 
        }else {
            additionalHealthIssues = 0;
        }
        score = ageScore + extraForHealth - goodHabit + badHabit;
        score.textContent = text + scoreCurrentHealth;


    let totalScore = scoreAge + scoreHealthIssues + scoreBadHabits - scoreGoodHabits;
    document.querySelector("#output").textContent = `Hello ${clientName}! According to your data your risk score is: ${totalScore}`;

    }
