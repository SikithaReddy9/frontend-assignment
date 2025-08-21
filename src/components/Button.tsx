import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  testId?: string
}

export const Button = ({ children, onClick, testId }: ButtonProps) => {
  return (
    <button onClick={onClick} data-testid={testId}>
      {children}
    </button>
  )
}
