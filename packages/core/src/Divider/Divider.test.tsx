import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Divider } from './Divider.js';

describe('Divider', () => {
  it('renders a horizontal <hr> by default', () => {
    const { container } = render(<Divider data-testid="divider" />);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('HR');
    expect(el.getAttribute('aria-orientation')).toBe('horizontal');
    expect(el.getAttribute('role')).toBe('separator');
  });

  it('renders a vertical divider', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const el = container.firstChild as HTMLElement;
    // vertical usually uses div instead of hr, or hr with specific styles.
    // Spec says 'orientation="vertical" renders a vertical divider'.
    expect(el.getAttribute('aria-orientation')).toBe('vertical');
    // Usually vertical dividers are display: inline-block or have specific width/height
    expect(el.style.getPropertyValue('height')).not.toBe('');
  });

  it('sets border variant', () => {
    const { container } = render(<Divider variant="dashed" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('border-style')).toBe('dashed');
  });

  it('sets color from token', () => {
    const { container } = render(<Divider color="danger" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('border-color')).toBe('var(--beast-color-danger)');
  });

  it('adds spacing on both sides', () => {
    const { container } = render(<Divider spacing="4" />);
    const el = container.firstChild as HTMLElement;
    // For horizontal, margin-top and margin-bottom should be set
    expect(el.style.getPropertyValue('margin-top')).toBe('var(--beast-space-4)');
    expect(el.style.getPropertyValue('margin-bottom')).toBe('var(--beast-space-4)');
  });

  it('adds spacing for vertical on left and right', () => {
    const { container } = render(<Divider orientation="vertical" spacing="4" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('margin-left')).toBe('var(--beast-space-4)');
    expect(el.style.getPropertyValue('margin-right')).toBe('var(--beast-space-4)');
  });
});
