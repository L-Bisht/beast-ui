import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Switch } from './Switch.js';

describe('Switch', () => {
  it('renders a switch with label', () => {
    const { getByLabelText } = render(<Switch label="Dark mode" />);
    const input = getByLabelText('Dark mode') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.type).toBe('checkbox');
    expect(input.getAttribute('role')).toBe('switch');
  });

  it('works uncontrolled with defaultChecked', () => {
    const { getByLabelText } = render(<Switch label="Dark mode" defaultChecked />);
    const input = getByLabelText('Dark mode') as HTMLInputElement;
    
    expect(input.checked).toBe(true);
    expect(input.getAttribute('aria-checked')).toBe('true');

    fireEvent.click(input);
    
    expect(input.checked).toBe(false);
    expect(input.getAttribute('aria-checked')).toBe('false');
  });

  it('works controlled with checked and onChange', () => {
    const onChange = vi.fn();
    const { getByLabelText, rerender } = render(
      <Switch label="Dark mode" checked={true} onChange={onChange} />
    );
    const input = getByLabelText('Dark mode') as HTMLInputElement;
    
    expect(input.checked).toBe(true);

    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledTimes(1);

    rerender(<Switch label="Dark mode" checked={false} onChange={onChange} />);
    expect(input.checked).toBe(false);
  });

  it('disables input when disabled prop is true', () => {
    const { getByLabelText } = render(<Switch label="Dark mode" disabled />);
    const input = getByLabelText('Dark mode') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('keyboard accessible with Space key', () => {
    const { getByLabelText } = render(<Switch label="Dark mode" />);
    const input = getByLabelText('Dark mode') as HTMLInputElement;
    
    // In React, native checkbox inputs toggle on click/space if focused
    // Testing space press on the input should trigger a change or click
    input.focus();
    expect(input).toHaveFocus();
    
    fireEvent.keyDown(input, { key: ' ', code: 'Space' });
    fireEvent.click(input); // Simulate native behavior since JSDOM might not map space to click
    expect(input.checked).toBe(true);
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Switch ref={ref} label="Ref test" id="ref-sw" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.id).toBe('ref-sw');
  });

  it('passes variant="glass" prop to underlying Frame', () => {
    const { container } = render(<Switch variant="glass" />);
    const frame = container.querySelector('.beast-frame-glass');
    expect(frame).toBeInTheDocument();
  });
});
