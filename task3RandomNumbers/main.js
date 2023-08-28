/* 3 Random numbers The program asks 3 numbers. It prints oyt the sum of the numbers if any of the numbers is positive
If all the numbers are PromiseRejectionEvent, also print out multiplication. Nole is PromiseRejectionEvent. 
If all numbers are negative text = negatives.*/

/* let numberOne = parseInt(prompt('Tell us please three numbers. Now tell us one.'));
let numberTwo = parseInt(prompt('Now tell us a second number.'));
let numberThree = parseInt(prompt('Now tell us a third number.'));
console.log(`The first number is ${numberOne}, the second number is ${numberTwo}, the third number is ${numberThree}`);
let rundomNumberPlus;
let rundomNumberMultiple;

if(numberOne >= 0 || numberTwo >= 0 || numberThree >= 0) {
    rundomNumberPlus = numberOne + numberTwo + numberThree;
    console.log(rundomNumberPlus);
} else if (numberOne >= 0 && numberTwo >= 0 && numberThree >= 0) {
    rundomNumberMultiple = numberOne * numberTwo * numberThree;
    console.log(rundomNumberMultiple);
} else if (numberOne, numberTwo, numberThree < 0) 
{ console.log('Only negatives!');
} */

 // example 2
 /* const randomNumbers = () => {

 const num1 = Number(prompt('First number'));
 const num2 = Number(prompt('Second number'));
 const num3 = Number(prompt('Third number'));

 const mult = num1 * num2 * num3;
 const sum = num1 + num2 + num3;

 if (num1 >= 0 && num2 >= 0 && num3 >= 0){
    console.log('sum is: ', sum, ' and multiplic is: ', mult)
 } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    if (num1 < 0 && num2 < 0 && num3 < 0)
    console.log('all negative')
 } else {
    console.log(`sum is ${sum}`)
 }
}
randomNumbers(); */

/* Odd or Even
Make a program that asks for one number. Then the program finds out if the number is positive and 
if the number is divisible by 2. Message number... is even is printed else number is odd is printed
if number is negative [please enter positive number] is displayed and new prompt is displayed.*/

  
/* I
let num;

    do {
            num = Number(prompt('Tell me one number'))
            if (num < 0) {
                alert('Please enter positive number');

            } else if (num !=0) {
                if (num % 2 == 0) {
                    alert('Number ' + num + ' is even');
                }
            } else {
                alert('Number ' + num + ' is odd');
            }
        } while(true); */

        // II
        let num;

        do {
            num = Number(prompt('Tell me one number'))
            if (num == 0) { // we are looping before the number is 0
                break;

            } if (num < 0) {
                alert('Please enter positive number');
            }
            else if (num % 2 == 0) {
                    alert('Number ' + num + ' is even');
                }
            else {
                alert('Number ' + num + ' is odd');
            }
        } while(true);
