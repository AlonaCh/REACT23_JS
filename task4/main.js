const calcGasoline = () => {
    const price = document.querySelector('#price').value
const money = document.querySelector('#money').value
const answer = document.querySelector('#answer')

const amount = (money / price).toFixed(3);



amount >= 10 ? text = `You can get ${amount} liters, good, you can escape now` : text = `You can get ${amount} liters, Ups, you have to stay here`

answer.textContent = text; 

/* if (amount >= 10){
    text = `You can get ${amount} liters, good, you can escape now`;
} else {
    text = `You can get ${amount} liters, Ups, you have to stay here`;
} */

// answer.textContent = text;
}



