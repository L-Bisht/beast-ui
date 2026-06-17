import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Progress } from './Progress.js';

describe('Progress Component', () => {
  it('renders determinate progress correctly', () => {
    const { getByRole } = render(<Progress value={60} />);
    const progress = getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '60');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
    
    // Check if the inner bar has the correct width
    const bar = progress.querySelector('.beast-progress-bar') as HTMLElement;
    expect(bar.style.transform).toBe('translateX(-40%)'); // 60% progress = -40% transform
  });

  it('renders indeterminate progress correctly', () => {
    const { getByRole } = render(<Progress value={undefined} />);
    const progress = getByRole('progressbar');
    expect(progress).not.toHaveAttribute('aria-valuenow');
    const bar = progress.querySelector('.beast-progress-bar');
    expect(bar).toHaveClass('beast-progress-indeterminate');
  });

  it('applies label prop', () => {
    const { getByRole } = render(<Progress label="Loading data" />);
    const progress = getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-label', 'Loading data');
  });

  it('shows value text when showValue is true', () => {
    const { getByText } = render(<Progress value={45} showValue />);
    expect(getByText('45%')).toBeInTheDocument();
  });

  it('applies size class', () => {
    const { container } = render(<Progress size="lg" />);
    expect(container.firstChild).toHaveClass('beast-progress-lg');
  });

  it('applies color class', () => {
    const { container } = render(<Progress color="success" />);
    expect(container.firstChild).toHaveClass('beast-progress-success');
  });

  it('passes variant="glass" prop to underlying Frame track', () => {
    const { container } = render(<Progress variant="glass" />);
    const frame = container.querySelector('.beast-frame-glass');
    expect(frame).toBeInTheDocument();
  });
});
