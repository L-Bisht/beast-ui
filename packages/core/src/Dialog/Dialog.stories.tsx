import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog } from './Dialog.js';
import { Button } from '../Button/Button.js';
import { Text } from '../Text/Text.js';

const meta = {
  title: 'Overlays/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'fullscreen'],
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => { setOpen(true); }}>Open Dialog</Button>
        <Dialog 
          {...args} 
          open={open} 
          onClose={() => { setOpen(false); }}
          title="Confirm Action"
          description="Are you sure you want to proceed? This action cannot be undone."
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <Button variant="outlined" onClick={() => { setOpen(false); }}>Cancel</Button>
            <Button color="danger" onClick={() => { setOpen(false); }}>Confirm</Button>
          </div>
        </Dialog>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'fullscreen' | null>(null);
    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button onClick={() => { setSize('sm'); }}>Small</Button>
        <Button onClick={() => { setSize('md'); }}>Medium</Button>
        <Button onClick={() => { setSize('lg'); }}>Large</Button>
        <Button onClick={() => { setSize('fullscreen'); }}>Fullscreen</Button>
        
        <Dialog 
          open={!!size} 
          onClose={() => { setSize(null); }}
          title={`${size?.toUpperCase()} Dialog`}
          size={size || 'md'}
        >
          <Text>This is a {size} sized dialog.</Text>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <Button onClick={() => { setSize(null); }}>Close</Button>
          </div>
        </Dialog>
      </div>
    );
  },
};

export const NonDismissable: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => { setOpen(true); }}>Force Action</Button>
        <Dialog 
          open={open} 
          onClose={() => { setOpen(false); }}
          title="Required Action"
          closeOnEscape={false}
          closeOnOverlayClick={false}
        >
          <Text>You must click the button below. Escape and overlay clicks are disabled.</Text>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <Button color="primary" onClick={() => { setOpen(false); }}>I Understand</Button>
          </div>
        </Dialog>
      </>
    );
  },
};

export const Glassmorphism: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{
        padding: '100px',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '16px',
      }}>
        <Button onClick={() => { setOpen(true); }} variant="glass" glaze={{ frost: 'md', tint: 'light' }}>Open Glass Dialog</Button>
        <Dialog 
          {...args} 
          open={open} 
          onClose={() => { setOpen(false); }}
          title={<span style={{ color: 'white' }}>Glass Dialog</span>}
          description={<span style={{ color: 'rgba(255,255,255,0.8)' }}>This dialog uses the glassmorphism effect. The background behind the modal is blurred.</span>}
          variant="glass"
          glaze={{ frost: 'lg', tint: 'dark' }}
          style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <Button variant="glass" glaze={{ frost: 'md', tint: 'light' }} onClick={() => { setOpen(false); }}>Close</Button>
          </div>
        </Dialog>
      </div>
    );
  },
};
