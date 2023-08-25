import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from '../components/AboutMe';

test('renders about me content', () => {
	render(<AboutMe />);

	const helloText = screen.getByText(/Hello, I'm Iván/i);
	const guitarText = screen.getByText(/When I'm not immersed in code/i);
	const journeyText = screen.getByText(/My journey into web development began during college/i);

	expect(helloText).toBeInTheDocument();
	expect(guitarText).toBeInTheDocument();
	expect(journeyText).toBeInTheDocument();
});
