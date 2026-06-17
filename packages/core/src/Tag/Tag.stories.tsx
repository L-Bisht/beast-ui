import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag.js';

const meta = {
  title: 'Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'New Feature',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'success',
    children: 'Completed',
  },
};

export const Deletable: Story = {
  args: {
    variant: 'soft',
    color: 'danger',
    children: 'Removable',
    onDelete: () => { alert('Tag deleted!'); },
  },
};

export const Glassmorphism: Story = {
  render: () => (
    <div style={{ padding: '40px', background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', borderRadius: '16px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Tag variant="glass" color="primary">Primary</Tag>
        <Tag variant="glass" color="success">Success</Tag>
        <Tag variant="glass" color="warning">Warning</Tag>
        <Tag variant="glass" color="danger" onDelete={() => undefined}>Danger</Tag>
      </div>
    </div>
  ),
};
