import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// git remote add origin https://github.com/ShashankPakhare/onlineclas.git
// git branch -M main
// git push -u origin main