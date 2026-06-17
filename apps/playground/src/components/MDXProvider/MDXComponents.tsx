import type { ReactNode } from 'react';
import { Text, Divider } from '@beast-ui/core';

export const mdxComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <Text as="h1" size="2xl" weight="bold" style={{ marginBottom: 'var(--beast-space-4)' }}>
      {children}
    </Text>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <Text as="h2" size="xl" weight="semibold" style={{ marginTop: 'var(--beast-space-8)', marginBottom: 'var(--beast-space-4)' }}>
      {children}
    </Text>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <Text as="h3" size="lg" weight="medium" style={{ marginTop: 'var(--beast-space-6)', marginBottom: 'var(--beast-space-2)' }}>
      {children}
    </Text>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <Text as="p" style={{ marginBottom: 'var(--beast-space-4)', lineHeight: 1.6 }}>
      {children}
    </Text>
  ),
  hr: () => <Divider style={{ margin: 'var(--beast-space-8) 0' }} />,
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a href={href} style={{ color: 'var(--beast-color-primary)', textDecoration: 'underline' }}>
      {children}
    </a>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code style={{ 
      backgroundColor: 'var(--beast-color-background-muted)', 
      padding: 'var(--beast-space-1) var(--beast-space-2)', 
      borderRadius: 'var(--beast-radius-sm)',
      fontFamily: 'monospace' 
    }}>
      {children}
    </code>
  ),
};
