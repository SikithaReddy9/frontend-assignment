import React from 'react'

export type DataTableProps<T> = {
  data: T[]
  columns: { key: keyof T; header: string }[]
}

export function DataTable<T extends { id: string | number }>({ data, columns }: DataTableProps<T>) {
  if (!data.length) {
    return <div>No data available</div>
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={String(col.key)}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            {columns.map(col => (
              <td key={String(col.key)}>{String(row[col.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
