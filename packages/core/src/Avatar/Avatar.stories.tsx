import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar.js';

const meta = {
  title: 'Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallback: 'JD',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    alt: 'User profile',
    fallback: 'US',
  },
};

export const Square: Story = {
  args: {
    fallback: 'SQ',
    shape: 'rounded',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
    </div>
  ),
};

export const Glassmorphism: Story = {
  render: () => (
    <div style={{ padding: '40px', background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)', borderRadius: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Avatar variant="glass" color="primary" fallback="PR" />
        <Avatar variant="glass" color="success" fallback="SU" />
        <Avatar variant="glass" color="warning" fallback="WA" />
        <Avatar variant="glass" color="danger" fallback="DA" />
      </div>
    </div>
  ),
};
