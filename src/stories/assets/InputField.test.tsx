import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputField from '../InputField'

test('adds numbers correctly', () => {
  expect(1 + 2).toBe(3)   // ✅ basic test
})

test('renders a label and allows typing', async () => {
  render(<InputField label="Name" helperText="Enter your name" />)
  const input = screen.getByLabelText(/name/i)
  await userEvent.type(input, 'Alice')
  expect(input).toHaveValue('Alice')
})

test('shows helper text', () => {
  render(<InputField label="Email" helperText="Enter a valid email" />)
  expect(screen.getByText(/enter a valid email/i)).toBeInTheDocument()
})

test('shows error message when invalid', () => {
  render(<InputField label="Password" error="Required field" />)
  expect(screen.getByText(/required field/i)).toBeInTheDocument()
})