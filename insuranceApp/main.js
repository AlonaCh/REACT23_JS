const name = document.querySelector("#clientName");
const ages = document.querySelectorAll('input[name="age"]');
const healthIssues = document.querySelectorAll('input[name="health"]');
const habits = document.querySelectorAll('input[name="habits"]');
const riskscore = document.querySelector('#riskscore');
const baseScore = 500;

const calculateScore = () => {
   
    let ageResult = ''
    let healthIssuesResult = []
    let habitsResult = []

    ages.forEach(age => {
        if (age.checked) {
          ageResult = age.id
        }
      })

}
form.addEventListener('input', calculateScore)
