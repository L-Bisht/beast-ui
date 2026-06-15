import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Link } from './Link.js';

describe('Link Component', () => {
  it('renders a standard link', () => {
    const { getByRole } = render(<Link href="/about">About</Link>);
    const link = getByRole('link', { name: 'About' });
    expect(link).toHaveAttribute('href', '/about');
    expect(link.tagName).toBe('A');
  });

  it('handles external links', () => {
    const { getByRole } = render(<Link href="https://google.com" external>Google</Link>);
    const link = getByRole('link', { name: 'Google' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders disabled state', () => {
    const { getByText } = render(<Link href="/about" disabled>About</Link>);
    // When disabled, react-aria useLink might remove href and role="link"
    // or just set aria-disabled. We look for the text.
    const link = getByText('About');
    expect(link).not.toHaveAttribute('href');
    expect(link).toHaveAttribute('aria-disabled', 'true');
  });

  it('supports polymorphic rendering via as prop', () => {
    // Mock Router Link
    const RouterLink = React.forwardRef<HTMLAnchorElement, any>((props, ref) => (
      <a {...props} ref={ref} data-testid="router-link">{props.children}</a>
    ));
    RouterLink.displayName = 'RouterLink';

    const { getByTestId } = render(<Link as={RouterLink} href="/home">Home</Link>);
    const link = getByTestId('router-link');
    expect(link).toHaveAttribute('href', '/home');
    expect(link).toHaveTextContent('Home');
    expect(link).toHaveClass('beast-link');
  });

  it('applies color and underline variants', () => {
    const { getByRole } = render(<Link href="/" color="primary" underline="hover">Home</Link>);
    const link = getByRole('link');
    expect(link).toHaveClass('beast-link-color-primary');
    expect(link).toHaveClass('beast-link-underline-hover');
  });
});
