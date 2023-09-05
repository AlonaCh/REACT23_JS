let priceTwo = 7;
let priceFour = 10;
let priceSix = 12;
let priceEight = 14;

function priceDefinedTwo() {
const showPrice = document.querySelector("#showPrice");
showPrice.textContent = priceTwo;
}
function priceDefinedFour() {
    const showPrice = document.querySelector("#showPrice");
    showPrice.textContent = priceFour;  
}
function priceDefinedSix() {
    const showPrice = document.querySelector("#showPrice");
    showPrice.textContent = priceSix;  
}
function priceDefinedEight() {
    const showPrice = document.querySelector("#showPrice");
    showPrice.textContent = priceEight;  
}

let priceForTwo = document.querySelector("#two").addEventListener("click", priceDefinedTwo);

let priceForFour = document.querySelector("#four");
priceForFour.addEventListener("click", priceDefinedFour);

let priceForSix = document.querySelector("#six");
priceForSix.addEventListener("click", priceDefinedSix);

let priceForEight = document.querySelector("#eight");
priceForEight.addEventListener("click", priceDefinedEight);