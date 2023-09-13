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
form.addEventListener('input', calculateScore)
