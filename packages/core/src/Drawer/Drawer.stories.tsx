import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer } from './Drawer.js';
import { Button } from '../Button/Button.js';
import { Text } from '../Text/Text.js';

const meta = {
  title: 'Overlays/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    anchor: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => { setOpen(true); }}>Open Drawer</Button>
        <Drawer 
          {...args} 
          open={open} 
          onClose={() => { setOpen(false); }}
          title="Navigation Menu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
            <Button variant="soft" fullWidth style={{ justifyContent: 'flex-start' }}>Dashboard</Button>
            <Button variant="soft" fullWidth style={{ justifyContent: 'flex-start' }}>Profile</Button>
            <Button variant="soft" fullWidth style={{ justifyContent: 'flex-start' }}>Settings</Button>
          </div>
        </Drawer>
      </>
    );
  },
};

export const Anchors: Story = {
  render: () => {
    const [anchor, setAnchor] = useState<'left' | 'right' | 'top' | 'bottom' | null>(null);
    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button onClick={() => { setAnchor('left'); }}>Left</Button>
        <Button onClick={() => { setAnchor('right'); }}>Right</Button>
        <Button onClick={() => { setAnchor('top'); }}>Top</Button>
        <Button onClick={() => { setAnchor('bottom'); }}>Bottom</Button>
        
        <Drawer 
          open={!!anchor} 
          onClose={() => { setAnchor(null); }}
          anchor={anchor || 'right'}
          title={`${anchor?.toUpperCase()} Drawer`}
        >
          <Text>Drawer sliding in from the {anchor}.</Text>
        </Drawer>
      </div>
    );
  },
};

export const CustomSize: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => { setOpen(true); }}>Open Custom Size (800px)</Button>
        <Drawer 
          open={open} 
          onClose={() => { setOpen(false); }}
          title="Wide Panel"
          size={800}
        >
          <Text>This drawer has a custom width of 800px.</Text>
        </Drawer>
      </>
    );
  },
};

export const Glassmorphism: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '40px', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', borderRadius: '16px' }}>
        <Button variant="glass" glaze={{ frost: 'md', tint: 'light' }} onClick={() => { setOpen(true); }}>Open Glass Drawer</Button>
        <Drawer 
          open={open} 
          onClose={() => { setOpen(false); }}
          title="Glass Drawer"
          variant="glass"
          glaze={{ frost: 'lg', tint: 'light' }}
        >
          <Text style={{ color: 'black' }}>This drawer uses the glassmorphism effect.</Text>
        </Drawer>
      </div>
    );
  },
};
