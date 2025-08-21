import React from 'react'

export type InputFieldProps = {
  label: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  helperText?: string
  error?: string
  disabled?: boolean
  invalid?: boolean
  loading?: boolean
  variant?: 'filled' | 'outlined' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  helperText,
  error,
  disabled = false,
  invalid = false,
  loading = false,
  variant = 'outlined',
  size = 'md',
}: InputFieldProps): JSX.Element {
  const id = React.useId()

  const sizeStyles = {
    sm: 'text-sm px-2 py-1.5',
    md: 'text-base px-4 py-2.5',
    lg: 'text-lg px-5 py-3',
  }

  const variantStyles = {
    filled: 'bg-gray-100 border border-gray-300',
    outlined: 'bg-white border border-gray-300',
    ghost: 'bg-transparent border-b border-gray-300',
  }

  const inputClass = `
    w-full rounded-lg outline-none placeholder-gray-400 transition
    disabled:opacity-60 disabled:cursor-not-allowed
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${invalid ? 'border-red-500 focus:ring-2 focus:ring-red-500' : 'focus:ring-2 focus:ring-blue-500'}
    ${loading ? 'animate-pulse' : ''}
  `

  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          aria-describedby={
            helperText && !invalid
              ? `${id}-helper`
              : invalid && error
              ? `${id}-error`
              : undefined
          }
          className={inputClass}
        />
      </div>

      {helperText && !invalid && (
        <p id={`${id}-helper`} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {error && invalid && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
