import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Button } from './Button.js';

describe('Button', () => {
  it('renders a button by default', () => {
    const { container } = render(<Button>Click me</Button>);
    const btn = container.firstChild as HTMLButtonElement;
    expect(btn.tagName).toBe('BUTTON');
    expect(btn.textContent).toBe('Click me');
  });

  it('renders as an anchor when as="a" is passed', () => {
    const { container } = render(<Button as="a" href="#test">Link</Button>);
    const a = container.firstChild as HTMLAnchorElement;
    expect(a.tagName).toBe('A');
    expect(a.href).toContain('#test');
  });

  it('renders icon-only with specific class when no children', () => {
    const { container } = render(<Button icon={<span data-testid="icon">icon</span>} />);
    const btn = container.firstChild as HTMLButtonElement;
    expect(btn.className).toContain('beast-button-icon-only');
    expect(container.querySelector('[data-testid="icon"]')).toBeInTheDocument();
  });

  it('renders icon and children', () => {
    const { container } = render(<Button icon={<span data-testid="icon">icon</span>}>Search</Button>);
    const btn = container.firstChild as HTMLButtonElement;
    expect(btn.textContent).toContain('Search');
    expect(container.querySelector('[data-testid="icon"]')).toBeInTheDocument();
  });

  it('shows loading state and disables button', () => {
    const onClick = vi.fn();
    const { container } = render(<Button loading onClick={onClick}>Submit</Button>);
    const btn = container.firstChild as HTMLButtonElement;
    
    expect(btn.getAttribute('aria-busy')).toBe('true');
    expect(btn.disabled).toBe(true);
    
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
    // Expect some loading indicator class or element
    expect(btn.querySelector('.beast-spinner')).toBeInTheDocument();
  });

  it('disables button when disabled prop is true', () => {
    const onClick = vi.fn();
    const { container } = render(<Button disabled onClick={onClick}>Submit</Button>);
    const btn = container.firstChild as HTMLButtonElement;
    
    expect(btn.disabled).toBe(true);
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies fullWidth class', () => {
    const { container } = render(<Button fullWidth>Full</Button>);
    const btn = container.firstChild as HTMLButtonElement;
    expect(btn.className).toContain('beast-button-full-width');
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref} id="ref-btn">Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.id).toBe('ref-btn');
  });
});
