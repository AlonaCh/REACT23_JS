let salary = parseInt(prompt('What is you hourly salary?'));
let hours = parseInt(prompt('How many hours did you work in a day?'));

let percentage = 50;
let extraOneHour = salary + (salary * (percentage / 100));
let extraTwoHours = extraOneHour * 2;
let nineHours = sevenSalary + extraTwoHours;
let hoursAfterNine = hours - 9;
let restHours = hoursAfterNine * (salary * 2);

if(hours <= 7){
    console.log(sevenSalary);
} else if (hours = 8){
    console.log(sevenSalary + extraOneHour);
} else if (hours = 9) {
    console.log(sevenSalary + extraTwoHours);
} else if (hours > 9) {
    console.log(nineHours + restHours);
}

// 1

let someone = prompt('What is your name?');

if (someone === 'Hellen'){
    console.log('Hi!');
} else {
    console.log('I do not know you!');
}
  // 2
let temp = parseInt(prompt('What is the temperature now?'));

if (temp <= 15 ) {
    console.log('Please put on a jacket');
    } else if (temp >= 20) {
        console.log('Put on t-short');
    } else {
        console.log('Stay home!');
    } 
    // 3
    let season = prompt('What is your favorite seasone?').toLowerCase() 
     console.log(season);

     switch (season) {
        case 'spring':
            console.log('you like spring');
            break;
        case 'summer':
            console.log('you like summer');
            break;
        case 'fall':
            console.log('you like fall');    
            break;
        default:
            console.log('No season?');
            break;
     }




