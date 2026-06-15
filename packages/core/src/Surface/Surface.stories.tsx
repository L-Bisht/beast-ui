import type { Meta, StoryObj } from '@storybook/react';
import { Surface } from './Surface.js';

const meta = {
  title: 'Surfaces/Surface',
  component: Surface,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: 'select',
      options: [0, 1, 2, 3, 4],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    padding: {
      control: 'text',
    },
    border: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Surface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    padding: '4',
    children: 'This is a basic surface container.',
  },
};

export const Elevations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Surface elevation={0} padding="4">Elevation 0</Surface>
      <Surface elevation={1} padding="4">Elevation 1</Surface>
      <Surface elevation={2} padding="4">Elevation 2</Surface>
      <Surface elevation={3} padding="4">Elevation 3</Surface>
      <Surface elevation={4} padding="4">Elevation 4</Surface>
    </div>
  ),
};

export const Bordered: Story = {
  args: {
    border: true,
    padding: '4',
    children: 'Bordered Surface',
  },
};
