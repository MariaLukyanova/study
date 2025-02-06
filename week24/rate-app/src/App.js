import "./App.css";
import React, { useState } from "react";
import CardList from "./components/CardList/CardList";
import Button from "./components/Button/Button";

function App() {
	const [selectedCard, setSelectedCard] = useState(null);

	const handleCardSelect = (card) => {
		setSelectedCard(card);
	};

	return (
		<div className="wrap">
			<CardList onCardSelect={handleCardSelect} selectedCard={selectedCard} />
			{selectedCard && <Button>Оформить тариф</Button>}
		</div>
	);
}

export default App;
