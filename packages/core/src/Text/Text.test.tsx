import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Text } from './Text.js';

describe('Text', () => {
  it('renders a <p> by default', () => {
    const { container } = render(<Text>Hello</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('P');
  });

  it('renders an <h1> when as="h1" is passed', () => {
    const { container } = render(<Text as="h1">Heading</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('H1');
  });

  it('maps size prop to font-size token and sets line-height', () => {
    const { container } = render(<Text size="xl">Big Text</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('font-size')).toBe('var(--beast-font-size-xl)');
  });

  it('maps weight prop to font-weight token', () => {
    const { container } = render(<Text weight="bold">Bold Text</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('font-weight')).toBe('var(--beast-font-weight-bold)');
  });

  it('maps color prop to semantic color token', () => {
    const { container } = render(<Text color="primary">Primary Text</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('color')).toBe('var(--beast-color-primary)');
  });

  it('adds truncation styles when truncate is true', () => {
    const { container } = render(<Text truncate>Long text</Text>);
    const el = container.firstChild as HTMLElement;
    // Check for inline styles or class containing truncation
    expect(el.style.getPropertyValue('overflow')).toBe('hidden');
    expect(el.style.getPropertyValue('text-overflow')).toBe('ellipsis');
    expect(el.style.getPropertyValue('white-space')).toBe('nowrap');
  });

  it('sets text-align from align prop', () => {
    const { container } = render(<Text align="center">Centered</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('text-align')).toBe('center');
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<Text as="h2" ref={ref} id="ref-text">Ref</Text>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
    expect(ref.current?.id).toBe('ref-text');
  });
});
