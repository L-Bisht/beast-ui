import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton.js';
import { Card } from '../Card/Card.js';

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
    },
    lines: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    shape: 'text',
    width: 200,
  },
};

export const Circular: Story = {
  args: {
    shape: 'circular',
    width: 48,
    height: 48,
  },
};

export const Rectangular: Story = {
  args: {
    shape: 'rectangular',
    width: 300,
    height: 150,
  },
};

export const MultiLineText: Story = {
  args: {
    shape: 'text',
    lines: 4,
    width: 300,
  },
};

export const CardPlaceholder: Story = {
  render: () => (
    <Card style={{ width: '300px' }} padding="4">
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
        <Skeleton shape="circular" width={48} height={48} />
        <Skeleton shape="text" lines={2} width={150} />
      </div>
      <Skeleton shape="rectangular" height={120} style={{ marginBottom: '16px' }} />
      <Skeleton shape="text" lines={3} />
    </Card>
  ),
};

export const WaveAnimation: Story = {
  args: {
    shape: 'text',
    lines: 3,
    width: 300,
    animation: 'wave',
  },
};

export const Glassmorphism: Story = {
  render: () => (
    <div style={{ padding: '40px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '16px' }}>
      <Card variant="glass" style={{ width: '300px' }} padding="4">
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <Skeleton variant="glass" shape="circular" width={48} height={48} />
          <Skeleton variant="glass" shape="text" lines={2} width={150} />
        </div>
        <Skeleton variant="glass" shape="rectangular" height={120} style={{ marginBottom: '16px' }} />
        <Skeleton variant="glass" shape="text" lines={3} />
      </Card>
    </div>
  ),
};
