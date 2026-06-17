import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button.js';

const meta = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'soft', 'ghost'],
    },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'warning', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Button',
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    color: 'primary',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'solid',
    color: 'danger',
    children: 'Delete',
  },
};

export const Success: Story = {
  args: {
    variant: 'solid',
    color: 'success',
    children: 'Save Changes',
  },
};

export const Loading: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    loading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    disabled: true,
    children: 'Disabled',
  },
};

export const Glassmorphism: Story = {
  render: (_args) => (
    <div style={{
      padding: '40px',
      background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      borderRadius: '16px',
    }}>
      <Button variant="glass" color="primary">Primary Glass</Button>
      <Button variant="glass" color="danger">Danger Glass</Button>
      <Button variant="glass" color="success">Success Glass</Button>
    </div>
  ),
};
