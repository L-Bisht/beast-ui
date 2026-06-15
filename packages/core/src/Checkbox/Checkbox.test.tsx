import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Checkbox } from './Checkbox.js';

describe('Checkbox', () => {
  it('renders a checkbox with a label', () => {
    const { getByLabelText } = render(<Checkbox label="Agree" />);
    const input = getByLabelText('Agree') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.type).toBe('checkbox');
  });

  it('works uncontrolled with defaultChecked', () => {
    const { getByLabelText } = render(<Checkbox label="Agree" defaultChecked />);
    const input = getByLabelText('Agree') as HTMLInputElement;
    expect(input.checked).toBe(true);

    fireEvent.click(input);
    expect(input.checked).toBe(false);
  });

  it('works controlled with checked and onChange', () => {
    const onChange = vi.fn();
    const { getByLabelText, rerender } = render(<Checkbox label="Agree" checked={true} onChange={onChange} />);
    const input = getByLabelText('Agree') as HTMLInputElement;
    expect(input.checked).toBe(true);

    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledTimes(1);

    // Controlled component, shouldn't change internal state if not rerendered
    // But JSDOM fires click which updates checked briefly, though React resets it
    rerender(<Checkbox label="Agree" checked={false} onChange={onChange} />);
    expect(input.checked).toBe(false);
  });

  it('sets indeterminate property on input', () => {
    const { getByLabelText } = render(<Checkbox label="Agree" indeterminate />);
    const input = getByLabelText('Agree') as HTMLInputElement;
    expect(input.indeterminate).toBe(true);
  });

  it('disables input when disabled prop is true', () => {
    const { getByLabelText } = render(<Checkbox label="Agree" disabled />);
    const input = getByLabelText('Agree') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('sets aria-invalid and error state', () => {
    const { getByLabelText } = render(<Checkbox label="Agree" error="Required" />);
    const input = getByLabelText('Agree') as HTMLInputElement;
    expect(input.getAttribute('aria-invalid')).toBe('true');
    // Assuming wrapper class contains error
    const wrapper = input.closest('.beast-checkbox-wrapper');
    expect(wrapper?.className).toContain('beast-checkbox-error');
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} label="Agree" id="ref-cb" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.id).toBe('ref-cb');
  });
});
