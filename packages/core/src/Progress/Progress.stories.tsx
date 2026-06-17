import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Progress } from './Progress.js';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    label: 'Uploading files...',
    showValue: true,
  },
};

export const Indeterminate: Story = {
  args: {
    value: undefined,
    label: 'Processing...',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Progress value={40} color="primary" label="Primary" />
      <Progress value={60} color="success" label="Success" />
      <Progress value={80} color="warning" label="Warning" />
      <Progress value={90} color="danger" label="Danger" />
    </div>
  ),
};

export const Animated = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 1000);
    return () => { clearInterval(timer); };
  }, []);

  return <Progress value={value} label="Animated Progress" showValue />;
};

export const Glassmorphism: Story = {
  render: () => (
    <div style={{ padding: '40px', background: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)', borderRadius: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Progress value={40} variant="glass" color="primary" label="Glass Primary" />
        <Progress value={60} variant="glass" color="success" label="Glass Success" />
        <Progress value={80} variant="glass" color="warning" label="Glass Warning" />
        <Progress value={90} variant="glass" color="danger" label="Glass Danger" />
        <Progress variant="glass" color="primary" label="Glass Indeterminate" />
      </div>
    </div>
  ),
};
