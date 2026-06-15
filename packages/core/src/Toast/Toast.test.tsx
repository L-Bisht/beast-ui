import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, act } from '@testing-library/react';
import { ToastProvider, useToast } from './Toast.js';

function TestComponent() {
  const toast = useToast();
  return (
    <div>
      <button onClick={() => toast('Standard toast')}>Toast Default</button>
      <button onClick={() => toast.success('Success toast')}>Toast Success</button>
      <button onClick={() => toast.danger('Danger toast')}>Toast Danger</button>
      <button onClick={() => toast('With action', { action: <button>Undo</button> })}>Toast Action</button>
    </div>
  );
}

describe('Toast Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders a toast and auto-dismisses', async () => {
    const { getByText, queryByText } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(getByText('Toast Default'));

    expect(getByText('Standard toast')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(5000); // Default duration
    });

    // We might have an exit animation, so we advance a bit more or wait for it
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(queryByText('Standard toast')).not.toBeInTheDocument();
  });

  it('renders severities', () => {
    const { getByText } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(getByText('Toast Success'));
    const successToast = getByText('Success toast').closest('.beast-toast-success');
    expect(successToast).toBeInTheDocument();
    expect(successToast).toHaveAttribute('role', 'status');
  });

  it('renders an action button', () => {
    const { getByText } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(getByText('Toast Action'));
    expect(getByText('Undo')).toBeInTheDocument();
  });

  it('can be dismissed manually', () => {
    const { getByText, queryByText, getByRole } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(getByText('Toast Default'));
    expect(getByText('Standard toast')).toBeInTheDocument();

    const closeButton = getByRole('button', { name: /close toast/i });
    fireEvent.click(closeButton);

    act(() => {
      vi.advanceTimersByTime(1000); // wait for exit animation
    });

    expect(queryByText('Standard toast')).not.toBeInTheDocument();
  });

  it('pauses timer on hover', () => {
    const { getByText, queryByText } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(getByText('Toast Default'));
    const toastEl = getByText('Standard toast').closest('.beast-toast')!;

    // Hover
    fireEvent.mouseEnter(toastEl);

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    // Should still be visible because it's hovered
    expect(getByText('Standard toast')).toBeInTheDocument();

    // Mouse leave
    fireEvent.mouseLeave(toastEl);
    act(() => {
      vi.advanceTimersByTime(5000);
      vi.advanceTimersByTime(1000); // exit animation
    });

    expect(queryByText('Standard toast')).not.toBeInTheDocument();
  });
});
