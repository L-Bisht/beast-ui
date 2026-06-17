import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Surface } from './Surface.js';

describe('Surface Component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Surface>Content</Surface>);
    const surface = container.firstChild as HTMLElement;
    
    expect(surface).toHaveTextContent('Content');
    expect(surface).toHaveClass('beast-surface');
  });

  it('applies elevation class correctly', () => {
    const { container: c1 } = render(<Surface elevation={0}>E0</Surface>);
    expect(c1.firstChild).toHaveClass('beast-surface-elevation-0');

    const { container: c2 } = render(<Surface elevation={3}>E3</Surface>);
    expect(c2.firstChild).toHaveClass('beast-surface-elevation-3');
  });

  it('applies radius class correctly', () => {
    const { container } = render(<Surface radius="lg">Radius</Surface>);
    expect(container.firstChild).toHaveClass('beast-surface-radius-lg');
  });

  it('applies padding correctly', () => {
    const { container } = render(<Surface padding="4">Padding</Surface>);
    expect(container.firstChild).toHaveAttribute('style', expect.stringContaining('padding: var(--beast-space-4)'));
  });

  it('renders with border when border prop is true', () => {
    const { container } = render(<Surface border>Border</Surface>);
    expect(container.firstChild).toHaveClass('beast-surface-bordered');
  });

  it('renders as a different HTML element when polymorphic "as" prop is provided', () => {
    const { container } = render(<Surface as="section">Section</Surface>);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('section');
  });

  it('applies glass class correctly when variant="glass"', () => {
    const { container } = render(<Surface variant="glass">Glass</Surface>);
    expect(container.firstChild).toHaveClass('beast-surface-glass');
  });

  it('does not apply glass class when variant="solid" or undefined', () => {
    const { container: c1 } = render(<Surface variant="solid">Solid</Surface>);
    expect(c1.firstChild).not.toHaveClass('beast-surface-glass');

    const { container: c2 } = render(<Surface>Default</Surface>);
    expect(c2.firstChild).not.toHaveClass('beast-surface-glass');
  });

  it('applies inline styles for glaze prop only when variant="glass"', () => {
    const { container } = render(<Surface variant="glass" glaze={{ frost: 'lg', tint: 'dark' }}>Glass with glaze</Surface>);
    const surface = container.firstChild as HTMLElement;
    expect(surface).toHaveAttribute('style', expect.stringContaining('--beast-glass-frost: var(--beast-glass-frost-lg)'));
    expect(surface).toHaveAttribute('style', expect.stringContaining('--beast-glass-tint: var(--beast-glass-tint-dark)'));
  });
});
