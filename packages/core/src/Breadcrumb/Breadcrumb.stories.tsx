import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb.js';
import { Text } from '../Text/Text.js';

const meta = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/components">Components</Breadcrumb.Item>
      <Breadcrumb.Item href="/components/navigation">Navigation</Breadcrumb.Item>
      <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const CustomSeparator: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Text weight="bold" style={{ marginBottom: '8px' }}>Slash Separator</Text>
        <Breadcrumb separator="/">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Item>Shoes</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <Text weight="bold" style={{ marginBottom: '8px' }}>Arrow Separator</Text>
        <Breadcrumb separator="→">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
          <Breadcrumb.Item>API</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <Text weight="bold" style={{ marginBottom: '8px' }}>Dash Separator</Text>
        <Breadcrumb separator={<span style={{ color: 'red' }}>-</span>}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
          <Breadcrumb.Item>Article</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const MaxItems: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Text weight="bold" style={{ marginBottom: '8px' }}>Max Items = 3</Text>
        <Breadcrumb maxItems={3}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/store">Store</Breadcrumb.Item>
          <Breadcrumb.Item href="/store/electronics">Electronics</Breadcrumb.Item>
          <Breadcrumb.Item href="/store/electronics/phones">Phones</Breadcrumb.Item>
          <Breadcrumb.Item>Smartphones</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <Text weight="bold" style={{ marginBottom: '8px' }}>Max Items = 4</Text>
        <Breadcrumb maxItems={4}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/store">Store</Breadcrumb.Item>
          <Breadcrumb.Item href="/store/electronics">Electronics</Breadcrumb.Item>
          <Breadcrumb.Item href="/store/electronics/phones">Phones</Breadcrumb.Item>
          <Breadcrumb.Item>Smartphones</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  ),
};
