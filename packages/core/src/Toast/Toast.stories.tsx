import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './Toast.js';
import { Button } from '../Button/Button.js';

const meta = {
  title: 'Feedback/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center'],
    },
  },
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastDemo = () => {
  const toast = useToast();

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', maxWidth: '600px' }}>
      <Button onClick={() => toast('This is a default toast message')}>Default</Button>
      <Button color="primary" onClick={() => toast.info('New feature available!')}>Info</Button>
      <Button color="success" onClick={() => toast.success('Your changes have been saved successfully.')}>Success</Button>
      <Button color="warning" onClick={() => toast.warning('Your session is about to expire in 2 minutes.')}>Warning</Button>
      <Button color="danger" onClick={() => toast.danger('Failed to delete the document. Please try again.')}>Danger</Button>
      
      <div style={{ width: '100%', margin: '16px 0' }} />
      
      <Button variant="outlined" onClick={() => toast('Item moved to trash', {
        action: <Button variant="soft" size="sm">Undo</Button>,
        duration: 8000
      })}>
        With Action
      </Button>
      
      <Button variant="outlined" onClick={() => toast.info('This will stay until you close it.', {
        duration: 0,
        closable: true
      })}>
        Persistent
      </Button>
    </div>
  );
};

export const Default: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <ToastProvider {...args}>
      <ToastDemo />
    </ToastProvider>
  ),
};

export const Positions: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <p>Change position via Storybook controls on the Default story to see it in action.</p>
    </div>
  ),
};
