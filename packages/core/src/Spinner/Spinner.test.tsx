import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Spinner } from './Spinner.js';

describe('Spinner Component', () => {
  it('renders correctly with default props', () => {
    const { getByRole } = render(<Spinner />);
    const spinner = getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveTextContent('Loading');
    expect(spinner).toHaveClass('beast-spinner');
    expect(spinner).toHaveClass('beast-spinner-md');
  });

  it('renders visually hidden label', () => {
    const { getByText } = render(<Spinner label="Processing..." />);
    const label = getByText('Processing...');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('beast-visually-hidden');
  });

  it('applies custom size via number', () => {
    const { getByRole } = render(<Spinner size={64} />);
    const spinner = getByRole('status');
    // Using string style check or inline style check
    expect(spinner.getAttribute('style')).toContain('width: 64px');
    expect(spinner.getAttribute('style')).toContain('height: 64px');
  });

  it('applies standard size class', () => {
    const { getByRole } = render(<Spinner size="lg" />);
    const spinner = getByRole('status');
    expect(spinner).toHaveClass('beast-spinner-lg');
  });

  it('applies color class', () => {
    const { getByRole } = render(<Spinner color="primary" />);
    const spinner = getByRole('status');
    expect(spinner).toHaveClass('beast-spinner-primary');
  });
});
