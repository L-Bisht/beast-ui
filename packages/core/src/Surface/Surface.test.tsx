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
});
