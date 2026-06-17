import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip.js';
import { Button } from '../Button/Button.js';

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
    children: <Button variant="outlined">Hover me</Button>,
  },
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tooltip content="Top" position="top"><Button>Top</Button></Tooltip>
      <Tooltip content="Bottom" position="bottom"><Button>Bottom</Button></Tooltip>
      <Tooltip content="Left" position="left"><Button>Left</Button></Tooltip>
      <Tooltip content="Right" position="right"><Button>Right</Button></Tooltip>
    </div>
  ),
};

export const Glass: Story = {
  render: () => (
    <div style={{ padding: '40px', background: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)', borderRadius: '8px' }}>
      <Tooltip content="Glass Tooltip" position="top" variant="glass">
        <Button variant="glass" color="primary">Hover for Glass Tooltip</Button>
      </Tooltip>
    </div>
  ),
};
