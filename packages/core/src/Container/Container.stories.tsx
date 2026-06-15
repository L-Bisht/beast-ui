import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container.js';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    padding: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content = ({ label }: { label: string }) => (
  <div style={{
    background: 'var(--beast-color-primary-soft, #e6f0ff)',
    border: '1px dashed var(--beast-color-primary, #007bff)',
    borderRadius: '6px',
    padding: '16px',
    fontFamily: 'monospace',
    fontSize: '13px',
    color: 'var(--beast-color-primary-dark, #0056b3)',
    textAlign: 'center',
  }}>{label}</div>
);

export const Default: Story = {
  args: {
    maxWidth: 'lg',
  },
  render: (args) => (
    <Container {...args}>
      <Content label={`maxWidth="${args.maxWidth}" — Container auto-centers with horizontal padding`} />
    </Container>
  ),
};

export const AllPresets: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--beast-color-surface-variant, #f3f4f6)', padding: '24px 0' }}>
      {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
        <Container key={size} maxWidth={size}>
          <Content label={`maxWidth="${size}"`} />
        </Container>
      ))}
    </div>
  ),
};

export const CustomWidth: Story = {
  render: () => (
    <div style={{ background: 'var(--beast-color-surface-variant, #f3f4f6)', padding: '24px 0' }}>
      <Container maxWidth="500px">
        <Content label='maxWidth="500px" — custom pixel value' />
      </Container>
    </div>
  ),
};
