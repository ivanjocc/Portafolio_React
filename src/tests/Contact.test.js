import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

test('renders contact information', () => {
	render(<Contact />);

	const emailLink = screen.getByText(/Email/i);
	const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
	const githubLink = screen.getByRole('link', { name: /GitHub/i });

	expect(emailLink).toBeInTheDocument();
	expect(linkedInLink).toBeInTheDocument();
	expect(githubLink).toBeInTheDocument();
});
