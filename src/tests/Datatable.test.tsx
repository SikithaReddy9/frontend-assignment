import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataTable } from '../components/DataTable'

describe('DataTable', () => {
  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
  ]

  const data = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
  ]

  test('renders headers and rows correctly', () => {
    render(<DataTable data={data} columns={columns} />)
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Age')).toBeInTheDocument()
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
  })

  test('renders empty table when data is empty', () => {
    render(<DataTable data={[]} columns={columns} />)
    expect(screen.getByText(/no data available/i)).toBeInTheDocument()
  })
})
