import React from 'react';
import '../styles/BreedCard.css';

function BreedCard(props) {
	const { name, description, image, onClick } = props;

	return (
		<div className="breed-card" onClick={onClick}>
			<img src={image} alt={name} className="breed-image" />
			<div className="breed-details">
				<h3 className="breed-name">{name}</h3>
				<p className="breed-description">{description}</p>
			</div>
		</div>
	);
}

export default BreedCard;
