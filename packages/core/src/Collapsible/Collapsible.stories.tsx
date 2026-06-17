import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Collapsible } from './Collapsible.js';
import { Button } from '../Button/Button.js';
import { Surface } from '../Surface/Surface.js';

const meta = {
  title: 'Surfaces/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Toggle Content</Button>,
    children: (
      <Surface padding="4" border style={{ marginTop: '8px' }}>
        <p style={{ margin: 0 }}>This is the hidden content that gets revealed.</p>
      </Surface>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    trigger: <Button disabled>Cannot Toggle</Button>,
    children: (
      <Surface padding="4" border style={{ marginTop: '8px' }}>
        <p style={{ margin: 0 }}>This content is trapped forever.</p>
      </Surface>
    ),
  },
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={{ width: '300px' }}>
      <Collapsible 
        open={isOpen} 
        onOpenChange={setIsOpen}
        trigger={<Button fullWidth variant={isOpen ? 'soft' : 'solid'}>{isOpen ? 'Close' : 'Open'} Settings</Button>}
      >
        <Surface padding="4" border style={{ marginTop: '8px' }}>
          <p style={{ margin: 0 }}>You have opened the settings panel.</p>
        </Surface>
      </Collapsible>
    </div>
  );
};

export const Glassmorphism = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={{ padding: '40px', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', borderRadius: '16px', width: '300px' }}>
      <Collapsible 
        variant="glass"
        open={isOpen} 
        onOpenChange={setIsOpen}
        trigger={<Button variant="glass" fullWidth>{isOpen ? 'Close' : 'Open'} Glass Settings</Button>}
      >
        <Surface variant="glass" padding="4" style={{ marginTop: '8px' }}>
          <p style={{ margin: 0, color: 'black' }}>This is the hidden glass content.</p>
        </Surface>
      </Collapsible>
    </div>
  );
};
