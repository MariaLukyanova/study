// 1. Создаём пустой массив с именем grades и заполняем его случайными оценками от 1 до 100 для 12 студентов
let grades = Array.from(
	{ length: 12 },
	() => Math.floor(Math.random() * 100) + 1
);
console.log("Оценки студентов:", grades);

// 2. Рассчитаем и выведем средний балл студентов
let averageGrade =
	grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("Средний балл студентов:", averageGrade.toFixed(2));

// 3. Найдем и выведем максимальный балл среди студентов
let maxGrade = Math.max(...grades);
console.log("Максимальный балл среди студентов:", maxGrade);

// 4. Найдем и выведем минимальный балл среди студентов
let minGrade = Math.min(...grades);
console.log("Минимальный балл среди студентов:", minGrade);

// 5. Посчитаем и выведем количество студентов с положительной оценкой (балл >= 60)
let positiveGrades = grades.filter((grade) => grade >= 60);
console.log(
	"Количество студентов с положительной оценкой (>= 60):",
	positiveGrades.length
);

// 6. Посчитаем и выведем количество студентов с отрицательной оценкой (балл < 60)
let negativeGrades = grades.filter((grade) => grade < 60);
console.log(
	"Количество студентов с отрицательной оценкой (< 60):",
	negativeGrades.length
);

// 7. Преобразуем числовые оценки в буквенные (A/B/C/D/E)
let letterGrades = grades.map((grade) => {
	if (grade >= 80) return "A";
	else if (grade >= 60) return "B";
	else if (grade >= 40) return "C";
	else if (grade >= 20) return "D";
	else return "E";
});
console.log("Буквенные оценки студентов:", letterGrades);
