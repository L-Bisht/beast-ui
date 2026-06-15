import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip.js';

const meta = {
  title: 'Display/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button>Hover me</button>,
  },
};

export const Placements: Story = {
  args: {
    content: '',
    children: <button />,
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tooltip content="Top" position="top"><button>Top</button></Tooltip>
      <Tooltip content="Bottom" position="bottom"><button>Bottom</button></Tooltip>
      <Tooltip content="Left" position="left"><button>Left</button></Tooltip>
      <Tooltip content="Right" position="right"><button>Right</button></Tooltip>
    </div>
  ),
};
