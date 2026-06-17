import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Dialog } from './Dialog.js';

describe('Dialog Component', () => {
  it('does not render when open is false', () => {
    const { queryByRole } = render(
      <Dialog open={false} title="Dialog Title">
        Content
      </Dialog>
    );
    expect(queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders dialog when open is true', () => {
    const { getByRole, getByText } = render(
      <Dialog open={true} title="Dialog Title">
        Content
      </Dialog>
    );
    const dialog = getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(getByText('Dialog Title')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('handles onClose when Escape is pressed', () => {
    const onClose = vi.fn();
    const { getByRole } = render(
      <Dialog open={true} onClose={onClose} title="Dialog" closeOnEscape={true}>
        Content
      </Dialog>
    );
    const dialog = getByRole('dialog');
    fireEvent.keyDown(dialog, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('applies size class', () => {
    const { getByRole } = render(
      <Dialog open={true} size="lg" title="Large Dialog">
        Content
      </Dialog>
    );
    const dialog = getByRole('dialog');
    expect(dialog).toHaveClass('beast-dialog-lg');
  });

  it('has aria attributes from title and description', () => {
    const { getByRole, getByText } = render(
      <Dialog open={true} title="Dialog Title" description="A helpful description">
        Content
      </Dialog>
    );
    const dialog = getByRole('dialog');
    // react-aria might not output aria-modal natively to the element if focus scope handles it, or maybe it does. 
    // We will ensure it in the component if needed. Let's just check the title/desc ids.
    const title = getByText('Dialog Title');
    const desc = getByText('A helpful description');
    expect(dialog.getAttribute('aria-labelledby')).toBe(title.id);
    expect(dialog.getAttribute('aria-describedby')).toBe(desc.id);
  });

  it('passes variant="glass" prop down to the underlying Surface', () => {
    const { getByRole } = render(
      <Dialog open={true} title="Dialog" variant="glass">
        Glass Dialog
      </Dialog>
    );
    const dialog = getByRole('dialog');
    expect(dialog).toHaveClass('beast-surface-glass');
  });

  it('passes glaze prop down to the underlying Surface', () => {
    const { getByRole } = render(
      <Dialog open={true} title="Dialog" variant="glass" glaze={{ frost: 'lg', tint: 'dark' }}>
        Glazed Dialog
      </Dialog>
    );
    const dialog = getByRole('dialog');
    expect(dialog).toHaveAttribute('style', expect.stringContaining('--beast-glass-frost: var(--beast-glass-frost-lg)'));
  });
});
