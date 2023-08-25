import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders navigation links', () => {
	render(<Header />);

	const aboutLink = screen.getByText(/About/i);
	const projectsLink = screen.getByText(/Projects/i);
	const contactLink = screen.getByText(/Contact/i);

	expect(aboutLink).toBeInTheDocument();
	expect(projectsLink).toBeInTheDocument();
	expect(contactLink).toBeInTheDocument();
});
