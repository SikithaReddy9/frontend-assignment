import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('renders Card with title and description', () => {
  render(<Card title="Test Card" description="This is a test" />);
  expect(screen.getByText(/Test Card/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a test/i)).toBeInTheDocument();
});