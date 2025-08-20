import { render, screen } from '@testing-library/react';
import { DataTable } from '../components/DataTable'


describe('DataTable', () => {
  test('renders headers and rows correctly', () => {
    const mockData = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
    ];

    render(<DataTable data={mockData} />);

    // Check headers
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('age')).toBeInTheDocument();

    // Check rows
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  test('renders empty table when data is empty', () => {
    render(<DataTable data={[]} />);
    const rowgroups = screen.getAllByRole('rowgroup');
    const tbody = rowgroups[1]; // second rowgroup is <tbody>
    expect(tbody.childElementCount).toBe(0);
  });

  test('handles missing data prop gracefully', () => {
    render(<DataTable />);
    const rowgroups = screen.getAllByRole('rowgroup');
    const tbody = rowgroups[1]; // second rowgroup is <tbody>
    expect(tbody.childElementCount).toBe(0);
  });
});
