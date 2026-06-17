import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card.js';
import { Button } from '../Button/Button.js';
import { Text } from '../Text/Text.js';

const meta = {
  title: 'Surfaces/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: '300px' },
    children: (
      <>
        <Text as="h3" size="lg" weight="bold" style={{ margin: '0 0 8px 0' }}>Card Title</Text>
        <Text color="muted">This is the card body. It contains some basic content that describes the card's purpose.</Text>
      </>
    ),
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    style: { width: '350px' },
    header: <Text as="h3" size="lg" weight="bold" style={{ margin: 0 }}>Create Project</Text>,
    children: <Text>Enter your project details here to get started with the new integration.</Text>,
    footer: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <Button variant="ghost">Cancel</Button>
        <Button variant="solid" color="primary">Create</Button>
      </div>
    ),
  },
};

export const WithMedia: Story = {
  args: {
    style: { width: '300px' },
    media: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80',
    children: (
      <>
        <Text as="h3" size="lg" weight="bold" style={{ margin: '0 0 8px 0' }}>Vibrant Backgrounds</Text>
        <Text color="muted">Explore our new collection of stunning, vibrant gradient backgrounds.</Text>
      </>
    ),
    clickable: true,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    style: { width: '300px' },
    children: <Text>An outlined card useful for subtle content grouping.</Text>,
  },
};

export const Glassmorphism: Story = {
  render: (args) => (
    <div style={{
      padding: '40px',
      background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '16px',
    }}>
      <Card {...args} />
    </div>
  ),
  args: {
    variant: 'glass',
    glaze: { frost: 'md', tint: 'light' },
    style: { width: '300px', borderColor: 'rgba(255, 255, 255, 0.2)' },
    header: <Text as="h3" size="lg" weight="bold" style={{ margin: 0, color: 'black' }}>Glass Card</Text>,
    children: <Text style={{ color: 'black' }}>This card uses the glassmorphism effect. The background blurs the gradient behind it.</Text>,
  },
};
