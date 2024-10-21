// Создаем пустой массив
let numbers = [];

// Заполняем массив числами от -10 до 10
for (let i = -10; i <= 10; i++) {
	numbers.push(i);
}

// Удаляем все отрицательные числа
numbers = numbers.filter((num) => num >= 0);

// Возводим каждое число в квадрат
numbers = numbers.map((num) => num ** 2);

// Сортируем числа в порядке убывания
numbers.sort((a, b) => b - a);

// Выводим массив в консоль
console.log(numbers);
