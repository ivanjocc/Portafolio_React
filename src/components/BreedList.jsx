import React, { useState } from 'react';
import BreedCard from './BreedCard';
import BreedDetails from './BreedDetails';
import '../styles/BreedList.css';

const breedData = [
	{
		id: 1,
		name: 'Siamese',
		origin: 'Thailand',
		temperament: 'Active, Affectionate, Social',
		description: 'The Siamese cat is known for its striking blue eyes and distinctive color points.',
		image: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/04/siames-scaled.jpg?fit=1200%2C800&quality=50&strip=all&ssl=1',
	},
	{
		id: 2,
		name: 'Maine Coon',
		origin: 'United States',
		temperament: 'Gentle, Intelligent, Friendly',
		description: 'The Maine Coon is one of the largest domesticated cat breeds with a distinctive physical appearance.',
		image: 'https://mymodernmet.com/wp/wp-content/uploads/2022/01/kiefer-maine-coon-cat-3.jpeg',
	},
	{
		id: 3,
		name: 'Persian',
		origin: 'Iran (formerly Persia)',
		temperament: 'Quiet, Sweet, Calm',
		description: 'The Persian cat is known for its long fur and distinctive flat face.',
		image: 'https://www.vetstreet.com/wp-content/uploads/2022/09/view-pet-portrait-cat-mammal-close-843475-pxhere.com-1.jpg',
	},
	{
		id: 4,
		name: 'Bengal',
		origin: 'United States',
		temperament: 'Playful, Energetic, Intelligent',
		description: 'The Bengal cat has a distinctive spotted or marbled coat reminiscent of a wild leopard.',
		image: 'https://visitseaquest.com/wp-content/uploads/2022/11/unnamed-4.jpg',
	},
	{
		id: 5,
		name: 'Angora',
		origin: 'Turkey (formerly Anatolia)',
		temperament: 'Playful, Social, Curious',
		description: 'The Angora cat is known for its long, silky fur and playful personality.',
		image: 'https://blog.felinus.cl/wp-content/uploads/2023/03/gato-angora-3-1024x576.png',
	},
	{
		id: 6,
		name: 'Scottish Fold',
		origin: 'Scotland',
		temperament: 'Sweet, Loving, Playful',
		description: 'The Scottish Fold is known for its distinctive folded ears and adorable appearance.',
		image: 'https://www.hepper.com/wp-content/uploads/2022/01/red-scottish-fold-cat-on-a-dark-background_Alexander-Sobol_Shutterstock.jpg',
	},
];

function BreedList() {
	const [selectedBreed, setSelectedBreed] = useState(null);

	const handleBreedClick = breed => {
		setSelectedBreed(breed);
	};

	return (
		<div className="breed-list-container">
			<h2 className="cat-heading">Favorite cats</h2>
			<p className="click-instructions">Click on an image to learn more!</p>

			<div className="breed-list">
				{breedData.map(breed => (
					<BreedCard
						key={breed.id}
						name={breed.name}
						description={breed.description}
						image={breed.image}
						onClick={() => handleBreedClick(breed)}
					/>
				))}
			</div>
			<div className="breed-details-container">
				{selectedBreed && <BreedDetails breed={selectedBreed} />}
			</div>
		</div>
	);
}

export default BreedList;
