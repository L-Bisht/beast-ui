import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select.js';

const meta = {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PropsAPI: Story = {
  args: {
    label: 'Country',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'mx', label: 'Mexico' },
    ],
  },
};

export const CompoundAPI = () => (
  <Select.Root label="Fruit">
    <Select.Trigger>
      <Select.Value placeholder="Select a fruit" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group label="Citrus">
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="lemon">Lemon</Select.Item>
      </Select.Group>
      <Select.Separator />
      <Select.Group label="Berries">
        <Select.Item value="strawberry">Strawberry</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select.Root>
);
