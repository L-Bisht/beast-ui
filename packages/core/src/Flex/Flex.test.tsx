import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Flex } from './Flex.js';

describe('Flex', () => {
  it('renders a flex container by default', () => {
    const { container } = render(<Flex data-testid="flex" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('display')).toBe('flex');
    expect(el.tagName).toBe('DIV');
  });

  it('sets flex-direction based on direction prop', () => {
    const { container } = render(<Flex direction="column" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('flex-direction')).toBe('column');
  });

  it('maps gap token to CSS custom property', () => {
    const { container } = render(<Flex gap="4" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('gap')).toBe('var(--beast-space-4)');
  });

  it('accepts raw gap value if not in scale', () => {
    const { container } = render(<Flex gap="1rem" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('gap')).toBe('1rem');
  });

  it('maps align and justify props', () => {
    const { container } = render(<Flex align="center" justify="space-between" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('align-items')).toBe('center');
    expect(el.style.getPropertyValue('justify-content')).toBe('space-between');
  });

  it('applies flex-wrap when wrap prop is provided', () => {
    const { container } = render(<Flex wrap="wrap" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('flex-wrap')).toBe('wrap');
  });

  it('supports polymorphic as prop', () => {
    const { container } = render(<Flex as="ul" />);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('UL');
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Flex ref={ref} id="ref-flex" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.id).toBe('ref-flex');
  });
});
