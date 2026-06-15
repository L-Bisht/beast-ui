import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from './Skeleton.js';

describe('Skeleton Component', () => {
  it('renders default text skeleton', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass('beast-skeleton');
    expect(container.firstChild).toHaveClass('beast-skeleton-text');
    expect(container.firstChild).toHaveClass('beast-skeleton-pulse');
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders circular variant', () => {
    const { container } = render(<Skeleton variant="circular" width={40} height={40} />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton).toHaveClass('beast-skeleton-circular');
    expect(skeleton.style.width).toBe('40px');
    expect(skeleton.style.height).toBe('40px');
  });

  it('renders rectangular variant', () => {
    const { container } = render(<Skeleton variant="rectangular" height={200} />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton).toHaveClass('beast-skeleton-rectangular');
    expect(skeleton.style.height).toBe('200px');
  });

  it('renders multiple lines for text variant', () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);
    // When lines={3}, it should render a wrapper with 3 children
    expect(container.firstChild?.childNodes.length).toBe(3);
    const lastLine = container.firstChild?.lastChild as HTMLElement;
    // The last line should have width: 60%
    expect(lastLine.style.width).toBe('60%');
  });

  it('respects animation prop', () => {
    const { container: wave } = render(<Skeleton animation="wave" />);
    expect(wave.firstChild).toHaveClass('beast-skeleton-wave');

    const { container: none } = render(<Skeleton animation="none" />);
    expect(none.firstChild).toHaveClass('beast-skeleton-none');
  });
});
