import React from "react";
import styles from "./card.module.css";

// Функция, которая определяет цвет блока в зависимости от цены тарифа и увеличивает блок тарифа 550 рублей
function Card({ name, price, speed, info }) {
	const getCardColorClass = (price) => {
		let priceNumber = parseInt(price.replace(/\D/g, ""), 10);
		if (priceNumber >= 1000) {
			return styles.grey;
		} else if (priceNumber >= 550) {
			return styles.red;
		} else if (priceNumber >= 450) {
			return styles.green;
		} else {
			return styles.blue;
		}
	};

	return (
		<div className={`${styles.rate} ${getCardColorClass(price)}`}>
			<div className={styles.name}>{name}</div>
			<div className={styles.price}>{price}</div>
			<div className={styles.speed}>{speed}</div>
			<div className={styles.info}>{info}</div>
		</div>
	);
}

export default Card;
