import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sales dashboard header', () => {
  render(<App />);
  const headerElement = screen.getByText(/sales dashboard/i);
  expect(headerElement).toBeInTheDocument();
});
