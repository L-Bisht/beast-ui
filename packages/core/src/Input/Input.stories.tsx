import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input.js';

const meta = {
  title: 'Inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters long.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    defaultValue: 'admin',
    error: 'This username is already taken.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    placeholder: 'Not allowed',
  },
};

export const Glassmorphism: Story = {
  render: () => (
    <div style={{ padding: '40px', background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', borderRadius: '16px', minWidth: '300px' }}>
      <Input variant="glass" label="Glass Input" placeholder="Type here..." />
      <Input variant="glass" label="Glass Error" placeholder="Type here..." error="Something went wrong" />
    </div>
  ),
};
