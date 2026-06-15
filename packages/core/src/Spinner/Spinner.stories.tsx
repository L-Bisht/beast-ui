import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner.js';

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 64],
    },
    color: {
      control: 'select',
      options: ['primary', 'on-surface', 'inherit'],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size={64} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Spinner color="primary" />
      <Spinner color="on-surface" />
      <div style={{ color: 'var(--beast-color-success)', display: 'inline-flex' }}>
        <Spinner color="inherit" />
      </div>
    </div>
  ),
};
