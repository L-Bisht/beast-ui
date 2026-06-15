import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Container } from './Container.js';

describe('Container', () => {
  it('renders a centered container by default', () => {
    const { container } = render(<Container data-testid="container" />);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('DIV');
    expect(el.style.getPropertyValue('margin-left')).toBe('auto');
    expect(el.style.getPropertyValue('margin-right')).toBe('auto');
    // Default max-width could be full, but margin: 0 auto is what centers it.
  });

  it('maps predefined maxWidth values to correct px', () => {
    const breakpoints = {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      full: '100%',
    } as const;

    for (const [key, value] of Object.entries(breakpoints)) {
      const { container } = render(
        <Container maxWidth={key as keyof typeof breakpoints} />
      );
      const el = container.firstChild as HTMLElement;
      expect(el.style.getPropertyValue('max-width')).toBe(value);
    }
  });

  it('accepts custom string/number for maxWidth', () => {
    const { container } = render(<Container maxWidth="500px" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('max-width')).toBe('500px');
  });

  it('applies default padding', () => {
    const { container } = render(<Container />);
    const el = container.firstChild as HTMLElement;
    // Default padding should be present
    expect(el.style.getPropertyValue('padding-left')).toBe('var(--beast-space-4)');
    expect(el.style.getPropertyValue('padding-right')).toBe('var(--beast-space-4)');
  });

  it('allows overriding padding', () => {
    const { container } = render(<Container padding="8" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('padding')).toBe('var(--beast-space-8)');
  });

  it('supports polymorphic as prop and forwards ref', () => {
    const ref = createRef<HTMLElement>();
    const { container } = render(<Container as="main" ref={ref} id="main-container" />);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('MAIN');
    expect(ref.current?.id).toBe('main-container');
  });
});
