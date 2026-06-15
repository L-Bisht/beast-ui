import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Lattice } from './Lattice.js';

const meta = {
  title: 'Layout/Lattice',
  component: Lattice,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'number' },
    gap: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
  },
} satisfies Meta<typeof Lattice>;

export default meta;
type Story = StoryObj<typeof meta>;

const Cell = ({ children, area }: { children: React.ReactNode; area?: string }) => (
  <div style={{
    background: 'var(--beast-color-primary-soft, #e6f0ff)',
    border: '1px solid var(--beast-color-primary, #007bff)',
    borderRadius: '6px',
    padding: '16px',
    fontFamily: 'system-ui, sans-serif',
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--beast-color-primary-dark, #0056b3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(area && { gridArea: area }),
  }}>{children}</div>
);

export const Default: Story = {
  args: {
    columns: 3,
    gap: 4,
  },
  render: (args) => (
    <Lattice {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <Cell key={i}>Cell {i + 1}</Cell>
      ))}
    </Lattice>
  ),
};

export const ColumnCounts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {[2, 3, 4, 6].map((cols) => (
        <div key={cols}>
          <p style={{ fontFamily: 'monospace', marginBottom: '8px', fontSize: '13px' }}>columns={cols}</p>
          <Lattice columns={cols} gap={3}>
            {Array.from({ length: cols * 2 }, (_, i) => (
              <Cell key={i}>{i + 1}</Cell>
            ))}
          </Lattice>
        </div>
      ))}
    </div>
  ),
};

export const CustomTemplate: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ fontFamily: 'monospace', marginBottom: '8px', fontSize: '13px' }}>columns="1fr 2fr 1fr"</p>
        <Lattice columns="1fr 2fr 1fr" gap={4}>
          <Cell>Sidebar</Cell>
          <Cell>Main Content</Cell>
          <Cell>Aside</Cell>
        </Lattice>
      </div>

      <div>
        <p style={{ fontFamily: 'monospace', marginBottom: '8px', fontSize: '13px' }}>columns="200px auto 200px"</p>
        <Lattice columns="200px auto 200px" gap={4}>
          <Cell>Fixed</Cell>
          <Cell>Fluid</Cell>
          <Cell>Fixed</Cell>
        </Lattice>
      </div>
    </div>
  ),
};

export const NamedAreas: Story = {
  render: () => (
    <Lattice
      columns="1fr 2fr 1fr"
      rows="auto 1fr auto"
      areas={`"header header header" "nav main aside" "footer footer footer"`}
      gap={4}
      style={{ minHeight: '300px' }}
    >
      <Cell area="header">Header</Cell>
      <Cell area="nav">Nav</Cell>
      <Cell area="main">Main Content</Cell>
      <Cell area="aside">Aside</Cell>
      <Cell area="footer">Footer</Cell>
    </Lattice>
  ),
};

export const GapVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ fontFamily: 'monospace', marginBottom: '8px', fontSize: '13px' }}>columnGap=6, rowGap=2</p>
        <Lattice columns={3} columnGap={6} rowGap={2}>
          {Array.from({ length: 6 }, (_, i) => (
            <Cell key={i}>{i + 1}</Cell>
          ))}
        </Lattice>
      </div>
    </div>
  ),
};
