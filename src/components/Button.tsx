import React from 'react'

export interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  label?: string
}

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  label,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant} ${size}`}
    >
      {children ?? label}
    </button>
  )
}
