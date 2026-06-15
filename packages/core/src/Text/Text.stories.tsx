import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text.js';

const meta = {
  title: 'Display/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'on-surface', 'muted'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    truncate: { control: 'boolean' },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    size: 'md',
    weight: 'normal',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
        <Text key={size} size={size}>
          size="{size}" — The quick brown fox jumps over the lazy dog.
        </Text>
      ))}
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['normal', 'medium', 'semibold', 'bold'] as const).map((weight) => (
        <Text key={weight} weight={weight} size="lg">
          weight="{weight}" — Typography matters.
        </Text>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'on-surface', 'muted'] as const).map((color) => (
        <Text key={color} color={color} weight="medium">
          color="{color}" — Semantic color mapping
        </Text>
      ))}
    </div>
  ),
};

export const Truncation: Story = {
  render: () => (
    <div style={{ maxWidth: '300px', border: '1px dashed #ccc', padding: '16px', borderRadius: '8px' }}>
      <Text truncate>
        This is a very long piece of text that will be truncated with an ellipsis because the container is too narrow to display it all.
      </Text>
    </div>
  ),
};

export const SemanticElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text as="h1" size="2xl" weight="bold">Heading 1 (h1)</Text>
      <Text as="h2" size="xl" weight="semibold">Heading 2 (h2)</Text>
      <Text as="h3" size="lg" weight="semibold">Heading 3 (h3)</Text>
      <Text as="span" size="sm" color="muted">Inline span element</Text>
      <Text as="small" size="xs" color="muted">Small text element</Text>
      <Text as="blockquote" size="md" color="primary" style={{ borderLeft: '3px solid var(--beast-color-primary)', paddingLeft: '16px', fontStyle: 'italic' }}>
        "Design is not just what it looks like, design is how it works." — Steve Jobs
      </Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {(['left', 'center', 'right', 'justify'] as const).map((alignment) => (
        <div key={alignment} style={{ border: '1px dashed #ccc', padding: '16px', borderRadius: '8px' }}>
          <Text align={alignment}>
            align="{alignment}" — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
      ))}
    </div>
  ),
};
