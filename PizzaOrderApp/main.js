/* Welcome part
function name {
    return name.value
} */

//Price depending on size

let pizzaPrice = 0;
let pizzaToppingValue = 0;
let pizzaDeliveryValue = 0;

const pizzaSizePrices = document.querySelectorAll("input[type=radio ]");
console.log(pizzaSizePrices);

pizzaSizePrices.forEach((pizzaSize) => {
  pizzaSize.addEventListener("click", () => {
    if (pizzaSize.value === "twoServings") {
        pizzaSizeValue = 7;
      pizzaPrice =
      Number(pizzaSizeValue) +
      Number(pizzaToppingValue) +
      Number(pizzaDeliveryValue);
    } else if (pizzaSize.value === "fourServings") {
        pizzaSizeValue = 10;
      pizzaPrice =
      Number(pizzaSizeValue) +
      Number(pizzaToppingValue) +
      Number(pizzaDeliveryValue);
    } else if (pizzaSize.value === "sixServings") {
        pizzaSizeValue = 12;
      pizzaPrice =
      Number(pizzaSizeValue) +
      Number(pizzaToppingValue) +
      Number(pizzaDeliveryValue);
    } else if (pizzaSize.value === "eightServings") {
        pizzaSizeValue = 16;
      pizzaPrice =
        Number(pizzaSizeValue) +
        Number(pizzaToppingValue) +
        Number(pizzaDeliveryValue);
    }
    document.querySelector("#showPrice").textContent = pizzaPrice;
  });
});
// Price depending on the topping

    const toppingsOption = document.querySelectorAll("input[name='addTop']");
  
    toppingsOption.forEach((topping) => {
        
        topping.addEventListener('click', () => {
            let quantityTopping = 0;
            for (let i = 0; i < toppingsOption.length; i++) {
            if (toppingsOption[i].checked) {
                quantityTopping++;
              } }
              if (quantityTopping >= 4) {
                pizzaToppingValue = (quantityTopping - 4) * 0.5;
    
        document.querySelector("#showPrice").textContent =
        pizzaSizeValue + pizzaToppingValue + pizzaDeliveryValue;
        } else {
            document.querySelector("#showPrice").textContent =
            pizzaSizeValue + pizzaToppingValue + pizzaDeliveryValue;
        }
    })
});
        // Delivery price
        const deliveryPrice = document.querySelector('#delivery');
function newPizzaPrice(){
    if (deliveryPrice.value === "deliveryHome") {
        pizzaDeliveryValue = 5
        document.querySelector("#showPrice").textContent = 
        pizzaSizeValue + pizzaToppingValue + pizzaDeliveryValue;
    } else {
        pizzaDeliveryValue = 0
        document.querySelector("#showPrice").textContent = 
        pizzaSizeValue + pizzaToppingValue + pizzaDeliveryValue;
    }
}
        deliveryPrice.addEventListener('click', newPizzaPrice);

