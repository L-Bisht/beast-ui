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
    variant: {
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
    variant: 'text',
    width: 200,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 48,
    height: 48,
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 300,
    height: 150,
  },
};

export const MultiLineText: Story = {
  args: {
    variant: 'text',
    lines: 4,
    width: 300,
  },
};

export const CardPlaceholder: Story = {
  render: () => (
    <Card style={{ width: '300px' }} padding="4">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
        <Skeleton variant="circular" width={48} height={48} />
        <Skeleton variant="text" lines={2} width={150} />
      </div>
      <Skeleton variant="rectangular" height={120} style={{ marginBottom: '16px' }} />
      <Skeleton variant="text" lines={3} />
    </Card>
  ),
};

export const WaveAnimation: Story = {
  args: {
    variant: 'text',
    lines: 3,
    width: 300,
    animation: 'wave',
  },
};
