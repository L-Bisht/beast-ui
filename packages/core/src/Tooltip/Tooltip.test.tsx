import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip.js';

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      vi.runAllTimers();
    });
    vi.restoreAllMocks();
  });

  it('shows tooltip on focus and hides on blur', () => {
    render(
      <Tooltip content="Help text" delay={200}>
        <button data-testid="trigger">Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    
    // Initially not visible
    expect(screen.queryByText('Help text')).not.toBeInTheDocument();

    act(() => {
      trigger.focus();
    });
    
    act(() => {
      vi.runAllTimers();
    });

    const tooltip = screen.getByText('Help text');
    expect(tooltip).toBeInTheDocument();
    
    expect(trigger.getAttribute('aria-describedby')).toBe(tooltip.id);

    act(() => {
      trigger.blur();
    });
    
    act(() => {
      vi.runAllTimers();
    });

    expect(screen.queryByText('Help text')).not.toBeInTheDocument();
  });

  it('renders arrow when arrow prop is true', () => {
    render(
      <Tooltip content="Arrow text" arrow delay={200}>
        <button data-testid="trigger">Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    
    act(() => {
      trigger.focus();
    });
    
    act(() => {
      vi.runAllTimers();
    });

    const arrow = document.querySelector('.beast-tooltip-arrow');
    expect(arrow).toBeInTheDocument();
  });

  it('passes variant="glass" to underlying Surface', () => {
    render(
      <Tooltip content="Glass tooltip" delay={0} variant="glass">
        <button data-testid="trigger">Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    
    act(() => {
      trigger.focus();
    });
    
    act(() => {
      vi.runAllTimers();
    });

    const tooltip = document.querySelector('.beast-tooltip');
    expect(tooltip).toHaveClass('beast-surface-glass');
  });
});
