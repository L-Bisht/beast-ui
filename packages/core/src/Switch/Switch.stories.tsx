import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch.js';

const meta = {
  title: 'Inputs/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Dark mode',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Switch',
    disabled: true,
  },
};

export const Glassmorphism: Story = {
  render: () => (
    <div style={{ padding: '40px', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', borderRadius: '16px' }}>
      <Switch variant="glass" label="Glass Switch" defaultChecked />
    </div>
  ),
};
