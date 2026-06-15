import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider.js';

const meta = {
  title: 'Display/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <p>Above</p>
      <Divider />
      <p>Below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '50px', alignItems: 'center' }}>
      <p>Left</p>
      <Divider orientation="vertical" style={{ height: '100%' }} />
      <p>Right</p>
    </div>
  ),
};
