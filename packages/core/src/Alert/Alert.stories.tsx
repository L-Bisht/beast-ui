import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert.js';

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    variant: {
      control: 'select',
      options: ['soft', 'filled', 'outlined'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    severity: 'info',
    title: 'Update Available',
    children: 'A new version of Beast UI is available. Please update to the latest version.',
    closable: true,
  },
};

export const Severities: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Alert severity="info" title="Information">This is an info alert.</Alert>
      <Alert severity="success" title="Success">Your action was completed successfully.</Alert>
      <Alert severity="warning" title="Warning">Please be careful before proceeding.</Alert>
      <Alert severity="danger" title="Error">A critical error occurred.</Alert>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Alert severity="success" variant="soft" title="Soft Variant">This is a soft alert.</Alert>
      <Alert severity="success" variant="solid" title="Solid Variant">This is a solid alert.</Alert>
      <Alert severity="success" variant="outlined" title="Outlined Variant">This is an outlined alert.</Alert>
    </div>
  ),
};

export const Glassmorphism: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', padding: '40px', background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', borderRadius: '16px' }}>
      <Alert severity="info" variant="glass" title="Glass Info">This is a glass info alert.</Alert>
      <Alert severity="success" variant="glass" title="Glass Success">This is a glass success alert.</Alert>
      <Alert severity="warning" variant="glass" title="Glass Warning">This is a glass warning alert.</Alert>
      <Alert severity="danger" variant="glass" title="Glass Error">This is a glass error alert.</Alert>
    </div>
  ),
};
