// src/components/DataTable.tsx
import React from 'react';

type Column<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
};

type Props<T> = {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onSelect?: (selected: T[]) => void;
};

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onSelect,
}: Props<T>) {
  const [selectedIds, setSelectedIds] = React.useState<(string | number)[]>([]);
  const [sortKey, setSortKey] = React.useState<keyof T | null>(null);
  const [sortAsc, setSortAsc] = React.useState(true);

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      return sortAsc
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [data, sortKey, sortAsc]);

  const toggleSelect = (id: string | number) => {
    const updated = selectedIds.includes(id)
      ? selectedIds.filter((i) => i !== id)
      : [...selectedIds, id];
    setSelectedIds(updated);
    onSelect?.(data.filter((row) => updated.includes(row.id)));
  };

  if (loading) return <div className="p-4 text-gray-500">Loading...</div>;
  if (data.length === 0) return <div className="p-4 text-gray-500">No data available.</div>;

  return (
    <table className="w-full border border-gray-300">
      <thead>
        <tr>
          {selectable && <th />}
          {columns.map((col) => (
            <th
              key={String(col.key)}
              onClick={() => {
                if (col.sortable) {
                  setSortKey(col.key);
                  setSortAsc((prev) => (sortKey === col.key ? !prev : true));
                }
              }}
              className={col.sortable ? 'cursor-pointer' : ''}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id}>
            {selectable && (
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(row.id)}
                  onChange={() => toggleSelect(row.id)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={String(col.key)}>{String(row[col.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
