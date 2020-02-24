import React from 'react';
import { render } from '@testing-library/react';
import MenuView from './MenuView';

test('renders learn react link', () => {
  const { getByText } = render(<MenuView />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
