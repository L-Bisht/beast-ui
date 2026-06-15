import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge.js';
import { Avatar } from '../Avatar/Avatar.js';

const meta = {
  title: 'Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: '3',
    children: <Avatar fallback="U" />,
  },
};

export const Dot: Story = {
  args: {
    variant: 'dot',
    color: 'success',
    children: <Avatar fallback="U" />,
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Badge content="1" color="primary"><Avatar fallback="P" /></Badge>
      <Badge content="!" color="danger"><Avatar fallback="D" /></Badge>
      <Badge variant="dot" color="success"><Avatar fallback="S" /></Badge>
    </div>
  ),
};
