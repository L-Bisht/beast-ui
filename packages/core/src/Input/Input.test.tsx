import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Input } from './Input.js';

describe('Input', () => {
  it('renders input with label and links them via id', () => {
    const { container, getByLabelText } = render(<Input label="Email" />);
    const input = getByLabelText('Email') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
    const label = container.querySelector('label');
    expect(label?.htmlFor).toBe(input.id);
  });

  it('renders helper text and links via aria-describedby', () => {
    const { getByLabelText, getByText } = render(<Input label="Email" helperText="We never share your email" />);
    const input = getByLabelText('Email') as HTMLInputElement;
    const helper = getByText('We never share your email');
    
    expect(input.getAttribute('aria-describedby')).toBe(helper.id);
  });

  it('renders error state, replacing helper text, and sets aria-errormessage', () => {
    const { getByLabelText, getByText, queryByText } = render(
      <Input label="Email" helperText="Helper" error="Invalid email format" />
    );
    const input = getByLabelText('Email') as HTMLInputElement;
    const error = getByText('Invalid email format');
    
    expect(queryByText('Helper')).not.toBeInTheDocument();
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.getAttribute('aria-errormessage')).toBe(error.id);
  });

  it('renders start and end adornments', () => {
    const { getByTestId } = render(
      <Input
        label="Amount"
        startAdornment={<span data-testid="start">$</span>}
        endAdornment={<span data-testid="end">.00</span>}
      />
    );
    expect(getByTestId('start')).toBeInTheDocument();
    expect(getByTestId('end')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    const { getByLabelText } = render(<Input label="Disabled" disabled />);
    const input = getByLabelText('Disabled') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('shows required indicator', () => {
    const { container } = render(<Input label="Required Field" required />);
    const indicator = container.querySelector('.beast-input-required-asterisk');
    expect(indicator).toBeInTheDocument();
  });

  it('forwards native input props', () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" type="password" onChange={onChange} />
    );
    const input = getByPlaceholderText('Enter text') as HTMLInputElement;
    
    expect(input.type).toBe('password');
    fireEvent.change(input, { target: { value: 'secret' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} label="Ref" id="ref-input" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.id).toBe('ref-input');
  });

  it('passes variant="glass" prop to underlying Surface', () => {
    const { container } = render(<Input variant="glass" />);
    const surface = container.querySelector('.beast-surface-glass');
    expect(surface).toBeInTheDocument();
  });
});
