import React from "react";

function Card(props) {
	return (
		<div className="heroe">
			<h2 className="heroe-name">{props.name}</h2>
			<div className="heroe-universe">Вселенная: {props.universe}</div>
			<div className="alterego">Альтер-эго: {props.alterego}</div>
			<div className="occupation">Род деятельности: {props.occupation}</div>
			<div className="friends">Друзья: {props.friends}</div>
			<div className="superpower">Суперсилы: {props.superpowers}</div>
			<img src={props.url} alt={props.name} />
			<div className="info">{props.info}</div>
		</div>
	);
}

export default Card;
