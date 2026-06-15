import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu.js';
import { Button } from '../Button/Button.js';

const meta = {
  title: 'Overlays/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Actions</Button>,
    children: null,
  },
  render: (args) => (
    <Menu {...args} trigger={<Button>Actions</Button>} onAction={(key) => { alert(`Clicked ${String(key)}`); }}>
      <Menu.Item key="edit" shortcut="⌘E">Edit</Menu.Item>
      <Menu.Item key="duplicate" shortcut="⌘D">Duplicate</Menu.Item>
      <Menu.Separator key="sep1" />
      <Menu.Item key="archive" shortcut="⌘A">Archive</Menu.Item>
      <Menu.Item key="delete" shortcut="⌘⌫" disabled>Delete</Menu.Item>
    </Menu>
  ),
};

export const WithGroups: Story = {
  args: {
    trigger: <Button>New Document</Button>,
    children: null,
  },
  render: (args) => (
    <Menu {...args} trigger={<Button>New Document</Button>}>
      <Menu.Group title="Create">
        <Menu.Item key="text">Text Document</Menu.Item>
        <Menu.Item key="spreadsheet">Spreadsheet</Menu.Item>
        <Menu.Item key="presentation">Presentation</Menu.Item>
      </Menu.Group>
      <Menu.Group title="Templates">
        <Menu.Item key="blank">Blank Template</Menu.Item>
        <Menu.Item key="invoice">Invoice</Menu.Item>
      </Menu.Group>
    </Menu>
  ),
};

export const Placements: Story = {
  args: {
    trigger: <Button>Top</Button>,
    children: null,
  },
  render: () => (
    <div style={{ display: 'flex', gap: '32px' }}>
      <Menu trigger={<Button>Top</Button>} placement="top">
        <Menu.Item key="1">One</Menu.Item>
        <Menu.Item key="2">Two</Menu.Item>
      </Menu>
      
      <Menu trigger={<Button>Bottom</Button>} placement="bottom">
        <Menu.Item key="1">One</Menu.Item>
        <Menu.Item key="2">Two</Menu.Item>
      </Menu>
      
      <Menu trigger={<Button>Right</Button>} placement="right">
        <Menu.Item key="1">One</Menu.Item>
        <Menu.Item key="2">Two</Menu.Item>
      </Menu>
    </div>
  ),
};
