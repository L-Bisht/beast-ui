import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs.js';
import { Text } from '../Text/Text.js';
import { Card } from '../Card/Card.js';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['underline', 'filled', 'outlined'],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <div style={{ maxWidth: '600px' }}>
      <Tabs {...args} defaultSelectedKey="account">
        <Tabs.List aria-label="Settings">
          <Tabs.Tab id="account">Account</Tabs.Tab>
          <Tabs.Tab id="notifications">Notifications</Tabs.Tab>
          <Tabs.Tab id="security">Security</Tabs.Tab>
          <Tabs.Tab id="billing" disabled>Billing (Disabled)</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="account">
          <Card padding="4">
            <Text weight="semibold">Account Settings</Text>
            <Text color="muted">Update your account information here.</Text>
          </Card>
        </Tabs.Panel>
        <Tabs.Panel id="notifications">
          <Card padding="4">
            <Text weight="semibold">Notification Preferences</Text>
            <Text color="muted">Choose what we notify you about.</Text>
          </Card>
        </Tabs.Panel>
        <Tabs.Panel id="security">
          <Card padding="4">
            <Text weight="semibold">Security</Text>
            <Text color="muted">Manage your password and 2FA settings.</Text>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </div>
  ),
};

export const Variants: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
      <div>
        <Text weight="bold" style={{ marginBottom: '8px' }}>Underline (Default)</Text>
        <Tabs defaultSelectedKey="1" variant="underline">
          <Tabs.List aria-label="Underline variant">
            <Tabs.Tab id="1">First</Tabs.Tab>
            <Tabs.Tab id="2">Second</Tabs.Tab>
            <Tabs.Tab id="3">Third</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>

      <div>
        <Text weight="bold" style={{ marginBottom: '8px' }}>Filled</Text>
        <Tabs defaultSelectedKey="1" variant="filled">
          <Tabs.List aria-label="Filled variant">
            <Tabs.Tab id="1">First</Tabs.Tab>
            <Tabs.Tab id="2">Second</Tabs.Tab>
            <Tabs.Tab id="3">Third</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>

      <div>
        <Text weight="bold" style={{ marginBottom: '8px' }}>Outlined</Text>
        <Tabs defaultSelectedKey="1" variant="outlined">
          <Tabs.List aria-label="Outlined variant">
            <Tabs.Tab id="1">First</Tabs.Tab>
            <Tabs.Tab id="2">Second</Tabs.Tab>
            <Tabs.Tab id="3">Third</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div style={{ maxWidth: '800px', height: '300px' }}>
      <Tabs defaultSelectedKey="profile" orientation="vertical" variant="outlined">
        <Tabs.List aria-label="Vertical tabs">
          <Tabs.Tab id="profile">Profile</Tabs.Tab>
          <Tabs.Tab id="settings">Settings</Tabs.Tab>
          <Tabs.Tab id="messages">Messages</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="profile">
          <Card style={{ height: '100%' }}>
            <Text weight="semibold">Profile Panel</Text>
          </Card>
        </Tabs.Panel>
        <Tabs.Panel id="settings">
          <Card style={{ height: '100%' }}>
            <Text weight="semibold">Settings Panel</Text>
          </Card>
        </Tabs.Panel>
        <Tabs.Panel id="messages">
          <Card style={{ height: '100%' }}>
            <Text weight="semibold">Messages Panel</Text>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </div>
  ),
};

export const Controlled: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [selected, setSelected] = useState('tab1');
    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <Text>Currently Selected: {selected}</Text>
        </div>
        <Tabs selectedKey={selected} onSelectionChange={setSelected}>
          <Tabs.List aria-label="Controlled Tabs">
            <Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel id="tab2">Content 2</Tabs.Panel>
          <Tabs.Panel id="tab3">Content 3</Tabs.Panel>
        </Tabs>
      </div>
    );
  },
};
