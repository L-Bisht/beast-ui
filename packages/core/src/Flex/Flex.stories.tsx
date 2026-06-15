import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Flex } from './Flex.js';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    gap: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    align: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ children, w, h }: { children: React.ReactNode; w?: string; h?: string }) => (
  <div style={{
    background: 'var(--beast-color-primary-soft, #e6f0ff)',
    border: '1px solid var(--beast-color-primary, #007bff)',
    borderRadius: '6px',
    padding: '12px 16px',
    fontFamily: 'system-ui, sans-serif',
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--beast-color-primary-dark, #0056b3)',
    width: w,
    height: h,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>{children}</div>
);

export const Default: Story = {
  args: {
    gap: 3,
    direction: 'row',
  },
  render: (args) => (
    <Flex {...args}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Flex>
  ),
};

export const Directions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['row', 'column', 'row-reverse', 'column-reverse'] as const).map((dir) => (
        <div key={dir}>
          <p style={{ fontFamily: 'monospace', marginBottom: '8px', fontSize: '13px' }}>direction="{dir}"</p>
          <Flex direction={dir} gap={3} style={{ border: '1px dashed #ccc', padding: '16px', borderRadius: '8px' }}>
            <Item>A</Item>
            <Item>B</Item>
            <Item>C</Item>
          </Flex>
        </div>
      ))}
    </div>
  ),
};

export const AlignAndJustify: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ fontFamily: 'monospace', marginBottom: '8px', fontSize: '13px' }}>justify="space-between", align="center"</p>
        <Flex justify="space-between" align="center" gap={3} style={{ background: 'var(--beast-color-surface-variant, #f3f4f6)', padding: '16px', borderRadius: '8px' }}>
          <Item h="40px">Short</Item>
          <Item h="80px">Tall</Item>
          <Item h="60px">Medium</Item>
        </Flex>
      </div>
      <div>
        <p style={{ fontFamily: 'monospace', marginBottom: '8px', fontSize: '13px' }}>justify="center", align="flex-end"</p>
        <Flex justify="center" align="flex-end" gap={3} style={{ background: 'var(--beast-color-surface-variant, #f3f4f6)', padding: '16px', borderRadius: '8px', height: '120px' }}>
          <Item>A</Item>
          <Item>B</Item>
          <Item>C</Item>
        </Flex>
      </div>
    </div>
  ),
};

export const Wrapping: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <p style={{ fontFamily: 'monospace', marginBottom: '8px', fontSize: '13px' }}>wrap="wrap", constrained to 400px</p>
      <Flex wrap="wrap" gap={3}>
        {Array.from({ length: 8 }, (_, i) => (
          <Item key={i} w="120px">Item {i + 1}</Item>
        ))}
      </Flex>
    </div>
  ),
};
