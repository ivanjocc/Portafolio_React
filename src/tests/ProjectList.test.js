import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectList from '../components/ProjectList';

test('renders project list', async () => {
  render(<ProjectList />);
  
  const projects = await screen.findAllByTestId('project');
  
  expect(projects).toHaveLength(6);
});
