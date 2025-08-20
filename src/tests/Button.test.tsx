import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../components/Button'

test('renders button text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText(/click me/i)).toBeInTheDocument()
})

test('calls onClick when clicked', async () => {
  const handleClick = vi.fn()
  render(<Button onClick={handleClick}>Click</Button>)
  await userEvent.click(screen.getByText(/click/i))
  expect(handleClick).toHaveBeenCalled()
})

test('is disabled when disabled prop is true', () => {
  render(<Button disabled>Disabled</Button>)
  expect(screen.getByText(/disabled/i)).toBeDisabled()
})