import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Link } from './Link.js';
import { Text } from '../Text/Text.js';

const meta = {
  title: 'Navigation/Link',
  component: Link,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'on-surface', 'inherit', 'neutral'],
    },
    underline: {
      control: 'select',
      options: ['always', 'hover', 'none'],
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'This is a standard link',
  },
};

export const External: Story = {
  args: {
    href: 'https://github.com',
    external: true,
    children: 'Visit GitHub (opens in new tab)',
  },
};

export const Colors: Story = {
  args: {
    href: '#',
    children: 'Link',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text>
        Primary (default): <Link href="#" color="primary">Forgot password?</Link>
      </Text>
      <Text>
        On Surface: <Link href="#" color="on-surface">Terms of Service</Link>
      </Text>
      <Text>
        Neutral: <Link href="#" color="neutral">Privacy Policy</Link>
      </Text>
      <Text style={{ color: 'purple' }}>
        Inherit (Purple Parent): <Link href="#" color="inherit">Read more</Link>
      </Text>
    </div>
  ),
};

export const UnderlineModes: Story = {
  args: {
    href: '#',
    children: 'Link',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text>
        Hover (default): <Link href="#" underline="hover">Only underlines on hover</Link>
      </Text>
      <Text>
        Always: <Link href="#" underline="always">Always underlined</Link>
      </Text>
      <Text>
        None: <Link href="#" underline="none">Never underlined</Link>
      </Text>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    href: '#',
    disabled: true,
    children: 'This link is disabled',
  },
};

export const Polymorphic: Story = {
  args: {
    href: '#',
    children: 'Link',
  },
  render: () => {
    // Simulating a custom router link component like Next.js Link
    const RouterLink = React.forwardRef<HTMLAnchorElement, any>((props, ref) => (
      <a {...props} ref={ref} onClick={(e) => { e.preventDefault(); alert(`Navigated to ${props.to}`); }}>
        {props.children}
      </a>
    ));
    RouterLink.displayName = 'RouterLink';

    return (
      <Text>
        Using custom router link: <Link as={RouterLink} to="/dashboard" color="primary">Go to Dashboard</Link>
      </Text>
    );
  },
};
