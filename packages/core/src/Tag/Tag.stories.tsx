import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag.js';

const meta = {
  title: 'Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'New Feature',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'success',
    children: 'Completed',
  },
};

export const Deletable: Story = {
  args: {
    variant: 'soft',
    color: 'danger',
    children: 'Removable',
    onDelete: () => { alert('Tag deleted!'); },
  },
};
