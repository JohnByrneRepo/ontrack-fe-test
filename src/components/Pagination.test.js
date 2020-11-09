import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pagination from './Pagination';

test('renders pagination links', () => {
  render(<Router><Pagination page={1} count={20} /></Router>);
  const linkElement = screen.getByText(/1/i);
  expect(linkElement).toBeInTheDocument();
});
