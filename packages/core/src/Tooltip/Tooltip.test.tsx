import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, act, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip.js';

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows tooltip on mouse enter and hides on mouse leave', async () => {
    render(
      <Tooltip content="Help text">
        <button data-testid="trigger">Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    
    // Initially not visible
    expect(screen.queryByText('Help text')).not.toBeInTheDocument();

    fireEvent.mouseEnter(trigger);
    
    // Wait for delay
    act(() => {
      vi.advanceTimersByTime(200);
    });

    const tooltip = screen.getByText('Help text');
    expect(tooltip).toBeInTheDocument();
    
    // ARIA check
    expect(trigger.getAttribute('aria-describedby')).toBe(tooltip.id);

    fireEvent.mouseLeave(trigger);
    
    // Wait for hide delay (if any, usually immediate)
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.queryByText('Help text')).not.toBeInTheDocument();
  });

  it('shows tooltip on focus and hides on blur', () => {
    render(
      <Tooltip content="Focus text">
        <button data-testid="trigger">Focus me</button>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    
    fireEvent.focus(trigger);
    
    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(screen.getByText('Focus text')).toBeInTheDocument();

    fireEvent.blur(trigger);

    expect(screen.queryByText('Focus text')).not.toBeInTheDocument();
  });

  it('renders arrow when arrow prop is true', () => {
    render(
      <Tooltip content="Arrow text" arrow>
        <button data-testid="trigger">Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    fireEvent.mouseEnter(trigger);
    act(() => {
      vi.advanceTimersByTime(200);
    });

    const arrow = document.querySelector('.beast-tooltip-arrow');
    expect(arrow).toBeInTheDocument();
  });

  it('respects custom delay', () => {
    render(
      <Tooltip content="Delayed text" delay={500}>
        <button data-testid="trigger">Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    fireEvent.mouseEnter(trigger);
    
    act(() => {
      vi.advanceTimersByTime(200);
    });
    
    // Not visible yet
    expect(screen.queryByText('Delayed text')).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Visible now
    expect(screen.getByText('Delayed text')).toBeInTheDocument();
  });
});
