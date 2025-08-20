import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import InputField from './InputField'

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof InputField>

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    value: '',
    onChange: () => {}, // Ensures controlled input doesn't throw
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: 'We’ll never share your email.',
    value: '',
    onChange: () => {},
  },
}

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    errorMessage: 'Username is required',
    invalid: true,
    value: '',
    onChange: () => {},
  },
}

export const Disabled: Story = {
  args: {
    label: 'Phone',
    placeholder: 'Enter phone number',
    disabled: true,
    value: '',
    onChange: () => {},
  },
}

export const Loading: Story = {
  args: {
    label: 'Search',
    placeholder: 'Searching...',
    loading: true,
    value: '',
    onChange: () => {},
  },
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Outlined" variant="outlined" placeholder="Outlined" value="" onChange={() => {}} />
      <InputField label="Filled" variant="filled" placeholder="Filled" value="" onChange={() => {}} />
      <InputField label="Ghost" variant="ghost" placeholder="Ghost" value="" onChange={() => {}} />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Small" size="sm" placeholder="Small size" value="" onChange={() => {}} />
      <InputField label="Medium" size="md" placeholder="Medium size" value="" onChange={() => {}} />
      <InputField label="Large" size="lg" placeholder="Large size" value="" onChange={() => {}} />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <InputField
        label="Controlled Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
    )
  },
}
