import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Badge } from './Badge.js';

describe('Badge', () => {
  it('renders children with badge content overlay', () => {
    const { container } = render(<Badge content={5}><div data-testid="child">Child</div></Badge>);
    const child = container.querySelector('[data-testid="child"]');
    const badge = container.querySelector('.beast-badge');
    
    expect(child).toBeInTheDocument();
    expect(badge).toBeInTheDocument();
    expect(badge?.textContent).toBe('5');
  });

  it('renders a dot when variant is "dot"', () => {
    const { container } = render(<Badge variant="dot"><div /></Badge>);
    const badge = container.querySelector('.beast-badge');
    expect(badge?.textContent).toBe('');
    // Typically dots have specific dimensions and border-radius
    expect(badge?.className).toContain('beast-badge-dot');
  });

  it('applies standard variants (solid, outlined, soft) and defaults to solid', () => {
    const { container: container1 } = render(<Badge content={5}><div /></Badge>);
    expect(container1.querySelector('.beast-badge')).toHaveClass('beast-badge-solid');

    const { container: container2 } = render(<Badge variant={"outlined" as any} content={5}><div /></Badge>);
    expect(container2.querySelector('.beast-badge')).toHaveClass('beast-badge-outlined');

    const { container: container3 } = render(<Badge variant={"soft" as any} content={5}><div /></Badge>);
    expect(container3.querySelector('.beast-badge')).toHaveClass('beast-badge-soft');
  });

  it('caps content based on max prop', () => {
    const { container } = render(<Badge content={150} max={99}><div /></Badge>);
    const badge = container.querySelector('.beast-badge');
    expect(badge?.textContent).toBe('99+');
  });

  it('does not cap content if below max', () => {
    const { container } = render(<Badge content={50} max={99}><div /></Badge>);
    const badge = container.querySelector('.beast-badge');
    expect(badge?.textContent).toBe('50');
  });

  it('hides badge when invisible is true', () => {
    const { container } = render(<Badge content={5} invisible><div data-testid="child">Child</div></Badge>);
    const badge = container.querySelector('.beast-badge');
    expect(badge).not.toBeInTheDocument(); // or has display: none, let's assume it doesn't render it
  });

  it('applies color token to badge', () => {
    const { container } = render(<Badge content={5} color="danger"><div /></Badge>);
    const badge = container.querySelector('.beast-badge')!;
    expect(badge.style.getPropertyValue('background-color')).toBe('var(--beast-color-danger)');
  });

  it('positions badge correctly (top-right by default)', () => {
    const { container } = render(<Badge content={5}><div /></Badge>);
    const badge = container.querySelector('.beast-badge')!;
    expect(badge.style.getPropertyValue('top')).toBe('0px');
    expect(badge.style.getPropertyValue('right')).toBe('0px');
  });

  it('positions badge bottom-left', () => {
    const { container } = render(<Badge content={5} position="bottom-left"><div /></Badge>);
    const badge = container.querySelector('.beast-badge')!;
    expect(badge.style.getPropertyValue('bottom')).toBe('0px');
    expect(badge.style.getPropertyValue('left')).toBe('0px');
  });

  it('passes variant="glass" prop to underlying Frame', () => {
    const { container } = render(<Badge variant="glass" content={5}><div /></Badge>);
    const badge = container.querySelector('.beast-badge')!;
    expect(badge).toHaveClass('beast-frame-glass');
  });

  it('passes glaze prop to underlying Frame', () => {
    const { container } = render(<Badge variant="glass" glaze={{ frost: 'lg', tint: 'dark' }} content={5}><div /></Badge>);
    const badge = container.querySelector('.beast-badge')!;
    expect(badge.getAttribute('style')).toContain('--beast-glass-frost: var(--beast-glass-frost-lg)');
  });
});
