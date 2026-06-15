import type { Meta, StoryObj } from '@storybook/react';
import { Frame } from './Frame.js';

const meta = {
  title: 'Layout/Frame',
  component: Frame,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    margin: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    display: {
      control: 'select',
      options: ['block', 'inline-block', 'flex', 'grid', 'none'],
    },
    overflow: {
      control: 'select',
      options: ['visible', 'hidden', 'scroll', 'auto'],
    },
  },
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children, ...props }: any) => (
  <div style={{
    background: 'var(--beast-color-primary-soft, #e6f0ff)',
    border: '1px dashed var(--beast-color-primary, #007bff)',
    borderRadius: '4px',
    padding: '8px',
    fontSize: '13px',
    fontFamily: 'monospace',
    color: 'var(--beast-color-primary-dark, #0056b3)',
  }} {...props}>{children}</div>
);

export const Default: Story = {
  args: {
    padding: 4,
    children: <Box>Frame with padding=4</Box>,
  },
};

export const PaddingScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((p) => (
        <Frame key={p} padding={p} style={{ background: 'var(--beast-color-surface-variant, #f3f4f6)', borderRadius: '4px' }}>
          <Box>padding={p}</Box>
        </Frame>
      ))}
    </div>
  ),
};

export const MarginScale: Story = {
  render: () => (
    <div style={{ background: 'var(--beast-color-surface-variant, #f3f4f6)', borderRadius: '8px' }}>
      {[1, 2, 4, 6, 8].map((m) => (
        <Frame key={m} margin={m}>
          <Box>margin={m}</Box>
        </Frame>
      ))}
    </div>
  ),
};

export const PolymorphicAs: Story = {
  name: 'Polymorphic (as prop)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Frame as="section" padding={4} style={{ background: 'var(--beast-color-surface-variant, #f3f4f6)', borderRadius: '8px' }}>
        <Box>Rendered as &lt;section&gt;</Box>
      </Frame>
      <Frame as="article" padding={4} style={{ background: 'var(--beast-color-surface-variant, #f3f4f6)', borderRadius: '8px' }}>
        <Box>Rendered as &lt;article&gt;</Box>
      </Frame>
      <Frame as="main" padding={4} style={{ background: 'var(--beast-color-surface-variant, #f3f4f6)', borderRadius: '8px' }}>
        <Box>Rendered as &lt;main&gt;</Box>
      </Frame>
    </div>
  ),
};
