import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Frame } from './Frame.js';

describe('Frame', () => {
  it('renders a <div> by default', () => {
    const { container } = render(<Frame data-testid="frame" />);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('DIV');
  });

  it('changes the rendered element with the `as` prop', () => {
    const { container } = render(<Frame as="section" data-testid="frame" />);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('SECTION');
  });

  it('forwards standard HTML attributes', () => {
    const { container } = render(
      <Frame id="my-frame" data-foo="bar" aria-label="A frame" />
    );
    const el = container.firstChild as HTMLElement;
    expect(el.id).toBe('my-frame');
    expect(el.getAttribute('data-foo')).toBe('bar');
    expect(el.getAttribute('aria-label')).toBe('A frame');
  });

  it('merges consumer className with its own base class', () => {
    const { container } = render(<Frame className="custom-class" />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('custom-class');
    // Also should contain its own module class, e.g., styles.frame
    expect(el.className).toMatch(/_frame_/); // Assuming CSS module emits something with _frame_
  });

  it('applies padding and margin via inline styles using tokens when 1-12', () => {
    const { container } = render(<Frame padding="4" margin="8" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('padding')).toBe('var(--beast-space-4)');
    expect(el.style.getPropertyValue('margin')).toBe('var(--beast-space-8)');
  });

  it('applies raw padding and margin values when not in scale', () => {
    const { container } = render(<Frame padding="10px 20px" margin="5%" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('padding')).toBe('10px 20px');
    expect(el.style.getPropertyValue('margin')).toBe('5%');
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Frame ref={ref} id="ref-frame" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.id).toBe('ref-frame');
  });
});
