import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Avatar } from './Avatar.js';

describe('Avatar', () => {
  it('renders an img when src is provided', () => {
    const { container } = render(<Avatar src="https://example.com/avatar.jpg" alt="User" />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img?.src).toBe('https://example.com/avatar.jpg');
    expect(img?.alt).toBe('User');
  });

  it('displays initials when name is provided and src is missing', () => {
    const { container } = render(<Avatar name="John Doe" />);
    const fallback = container.querySelector('.beast-avatar-fallback');
    expect(fallback).toBeInTheDocument();
    expect(fallback?.textContent).toBe('JD');
  });

  it('displays initials from a single word name', () => {
    const { container } = render(<Avatar name="Alice" />);
    const fallback = container.querySelector('.beast-avatar-fallback');
    expect(fallback?.textContent).toBe('A');
  });

  it('displays default person icon when no src and no name', () => {
    const { container } = render(<Avatar />);
    const fallback = container.querySelector('.beast-avatar-fallback');
    expect(fallback).toBeInTheDocument();
    // Assuming an SVG is rendered
    expect(fallback?.querySelector('svg')).toBeInTheDocument();
  });

  it('falls back to initials when image fails to load', () => {
    const { container } = render(<Avatar src="broken.jpg" name="Jane Doe" />);
    const img = container.querySelector('img');
    
    // Simulate error
    fireEvent.error(img!);

    const fallback = container.querySelector('.beast-avatar-fallback');
    expect(fallback).toBeInTheDocument();
    expect(fallback?.textContent).toBe('JD');
  });

  it('renders custom fallback when provided', () => {
    const { container } = render(<Avatar fallback={<span data-testid="custom">Custom</span>} />);
    const custom = container.querySelector('[data-testid="custom"]');
    expect(custom).toBeInTheDocument();
  });

  it('applies correct dimensions based on size prop', () => {
    const sizes = {
      sm: '32px',
      md: '40px',
      lg: '48px',
      xl: '64px',
    } as const;

    for (const [size, px] of Object.entries(sizes)) {
      const { container } = render(<Avatar size={size as keyof typeof sizes} />);
      const el = container.firstChild as HTMLElement;
      expect(el.style.getPropertyValue('width')).toBe(px);
      expect(el.style.getPropertyValue('height')).toBe(px);
    }
  });

  it('applies border-radius based on variant', () => {
    const { container: circularContainer } = render(<Avatar variant="circular" />);
    const circular = circularContainer.firstChild as HTMLElement;
    expect(circular.style.getPropertyValue('border-radius')).toBe('50%');

    const { container: roundedContainer } = render(<Avatar variant="rounded" />);
    const rounded = roundedContainer.firstChild as HTMLElement;
    expect(rounded.style.getPropertyValue('border-radius')).toBe('var(--beast-radius-md)');
  });
});
