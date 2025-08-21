import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../components/Button'

describe('Button', () => {
  test('renders with correct label', () => {
    render(<Button testId="label-button">Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  test('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick} testId="click-button">Click</Button>)

    const button = screen.getByTestId('click-button')
    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })
})
