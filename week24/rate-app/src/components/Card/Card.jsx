import React from "react";
import styles from "./Card.module.css";

export default function Card({
	name,
	price,
	speed,
	info,
	onCardSelect,
	selected,
}) {
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

	const handleClick = () => {
		onCardSelect({ name, price, speed, info });
	};

	return (
		<div
			className={`${styles.rate} ${getCardColorClass(price)} ${
				selected ? styles.selected : ""
			}`}
			onClick={handleClick}
		>
			<div className={styles.name}>{name}</div>
			<div className={styles.price}>{price}</div>
			<div className={styles.speed}>{speed}</div>
			<div className={styles.info}>{info}</div>
		</div>
	);
}
