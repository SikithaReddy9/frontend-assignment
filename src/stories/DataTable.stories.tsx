import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'City'],
    rows: [
      ['Alice', '25', 'New York'],
      ['Bob', '30', 'London'],
      ['Charlie', '28', 'Paris'],
    ],
  },
};