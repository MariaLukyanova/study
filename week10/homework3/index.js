function calculateTotalPrice(quantity = 2, price = 15000000) {
	return quantity * price;
}

let result = calculateTotalPrice();
let resultStr = result.toLocaleString("ru-RU");
let price = "Стоимость покупки: " + resultStr + " рублей";
