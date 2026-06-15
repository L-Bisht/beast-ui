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
    variant: 'filled',
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
    variant: 'filled',
    color: 'danger',
    children: 'Delete',
  },
};

export const Success: Story = {
  args: {
    variant: 'filled',
    color: 'success',
    children: 'Save Changes',
  },
};

export const Loading: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    loading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    disabled: true,
    children: 'Disabled',
  },
};
