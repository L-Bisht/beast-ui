import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Tag } from './Tag.js';

describe('Tag', () => {
  it('renders children correctly', () => {
    const { container } = render(<Tag>My Tag</Tag>);
    const el = container.firstChild as HTMLElement;
    expect(el.textContent).toBe('My Tag');
  });

  it('applies variant and color classes', () => {
    const { container } = render(<Tag variant="outlined" color="danger">Danger</Tag>);
    const el = container.firstChild as HTMLElement;
    // We expect CSS custom properties or classes to reflect these
    expect(el.className).toContain('beast-tag-outlined');
    expect(el.className).toContain('beast-tag-danger');
  });

  it('renders an icon when provided', () => {
    const { container } = render(<Tag icon={<span data-testid="icon">icon</span>}>With Icon</Tag>);
    const icon = container.querySelector('[data-testid="icon"]');
    expect(icon).toBeInTheDocument();
  });

  it('renders delete button and calls onDelete', () => {
    const onDelete = vi.fn();
    const { getByRole } = render(<Tag onDelete={onDelete}>Removable</Tag>);
    
    // There should be a button to delete
    const deleteBtn = getByRole('button', { name: /remove/i });
    expect(deleteBtn).toBeInTheDocument();

    fireEvent.click(deleteBtn);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it('makes tag clickable and sets role=button', () => {
    const onClick = vi.fn();
    const { container } = render(<Tag clickable onClick={onClick}>Clickable</Tag>);
    const el = container.firstChild as HTMLElement;
    
    expect(el.getAttribute('role')).toBe('button');
    expect(el.tabIndex).toBe(0); // keyboard focusable

    fireEvent.click(el);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('allows keyboard interaction when clickable', () => {
    const onClick = vi.fn();
    const { container } = render(<Tag clickable onClick={onClick}>Clickable</Tag>);
    const el = container.firstChild as HTMLElement;
    
    fireEvent.keyDown(el, { key: 'Enter', code: 'Enter' });
    expect(onClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(el, { key: ' ', code: 'Space' });
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('sets size appropriately', () => {
    const { container } = render(<Tag size="sm">Small</Tag>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('beast-tag-sm');
  });
});
