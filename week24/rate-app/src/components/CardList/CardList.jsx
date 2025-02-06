import React from "react";
import Card from "../Card/Card";

const CardList = ({ onCardSelect, selectedCard }) => {
	const cardsData = [
		{
			name: "Безлимитный 300",
			price: "300 руб/месяц",
			speed: "до 10 Мбит/сек",
			info: "Объем включенного трафика не ограничен",
		},
		{
			name: "Безлимитный 450",
			price: "450 руб/месяц",
			speed: "до 50 Мбит/сек",
			info: "Объем включенного трафика не ограничен",
		},
		{
			name: "Безлимитный 550",
			price: "550 руб/месяц",
			speed: "до 100 Мбит/сек",
			info: "Объем включенного трафика не ограничен",
		},
		{
			name: "Безлимитный 1000",
			price: "1000 руб/месяц",
			speed: "до 200 Мбит/сек",
			info: "Объем включенного трафика не ограничен",
		},
	];

	return (
		<>
			{cardsData.map((card, index) => (
				<Card
					key={index}
					{...card}
					onCardSelect={onCardSelect}
					selected={selectedCard && selectedCard.name === card.name}
				/>
			))}
		</>
	);
};

export default CardList;
