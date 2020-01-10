import React from 'react';
import ReactDOM from 'react-dom';
import './card.css';
import wave from './wave.jpg';
import food from './food.jpg';

const Card = (props) =>
{
	return (

	<div className="style" >
		<img src={food}  alt="web" />
		<h3 className="center"> {props.name} </h3>
		<p><button className="button"> Menu </button> </p>
	
	</div>
	
	)
}

export default Card;