import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BeastProvider } from './BeastProvider.js';

describe('BeastProvider', () => {
  it('renders a div wrapper around children', () => {
    const { getByTestId } = render(
      <BeastProvider>
        <span data-testid="child">hello</span>
      </BeastProvider>,
    );
    expect(getByTestId('child')).toBeInTheDocument();
  });

  it('converts theme.color keys to --beast-color-* CSS variables on the wrapper', () => {
    const { container } = render(
      <BeastProvider theme={{ color: { primary: 'hsl(270 91% 55%)' } }}>
        <span />
      </BeastProvider>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.getPropertyValue('--beast-color-primary')).toBe('hsl(270 91% 55%)');
  });

  it('converts theme.space keys to --beast-space-* CSS variables', () => {
    const { container } = render(
      <BeastProvider theme={{ space: { '1': '6px' } }}>
        <span />
      </BeastProvider>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.getPropertyValue('--beast-space-1')).toBe('6px');
  });

  it('converts theme.radius keys to --beast-radius-* CSS variables', () => {
    const { container } = render(
      <BeastProvider theme={{ radius: { md: '10px' } }}>
        <span />
      </BeastProvider>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.getPropertyValue('--beast-radius-md')).toBe('10px');
  });

  it('applies .beast-dark class when colorMode="dark"', () => {
    const { container } = render(
      <BeastProvider colorMode="dark"><span /></BeastProvider>,
    );
    expect((container.firstChild as HTMLElement).classList).toContain('beast-dark');
  });

  it('applies .beast-light class when colorMode="light"', () => {
    const { container } = render(
      <BeastProvider colorMode="light"><span /></BeastProvider>,
    );
    expect((container.firstChild as HTMLElement).classList).toContain('beast-light');
  });

  it('applies no color-mode class when colorMode="system" (default)', () => {
    const { container } = render(
      <BeastProvider><span /></BeastProvider>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.classList).not.toContain('beast-dark');
    expect(el.classList).not.toContain('beast-light');
  });

  it('a nested BeastProvider scopes its CSS variables to its own subtree', () => {
    const { getByTestId } = render(
      <BeastProvider theme={{ color: { primary: 'red' } }}>
        <BeastProvider theme={{ color: { primary: 'blue' } }} data-testid="inner">
          <span data-testid="child" />
        </BeastProvider>
      </BeastProvider>,
    );
    const inner = getByTestId('inner');
    expect(inner.style.getPropertyValue('--beast-color-primary')).toBe('blue');
  });
});
