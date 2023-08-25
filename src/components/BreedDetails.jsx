import React from 'react';
import '../styles/BreedDetails.css';

function BreedDetails(props) {
	const { breed } = props;

	if (!breed) {
		return null;
	}

	const { name, origin, temperament, description } = breed;

	return (
		<div className="breed-details">
			<h2>{name}</h2>
			<p><strong>Origin:</strong> {origin}</p>
			<p><strong>Temperament:</strong> {temperament}</p>
			<p>{description}</p>
		</div>
	);
}

export default BreedDetails;
