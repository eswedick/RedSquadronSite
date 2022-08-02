import { render, screen } from '@testing-library/react';
import App from './App';

test('overseerr rendered', () => {
  render(<App />);
  const headerElement = screen.getByText(/Make a request!/i);
  expect(headerElement).toBeInTheDocument();
});
