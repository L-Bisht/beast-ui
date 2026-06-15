import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Drawer } from './Drawer.js';

describe('Drawer Component', () => {
  it('does not render when open is false', () => {
    const { queryByRole } = render(
      <Drawer open={false} title="Menu">
        Content
      </Drawer>
    );
    expect(queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders correctly when open', () => {
    const { getByRole, getByText } = render(
      <Drawer open={true} title="Menu">
        Drawer Content
      </Drawer>
    );
    expect(getByRole('dialog')).toBeInTheDocument();
    expect(getByText('Menu')).toBeInTheDocument();
    expect(getByText('Drawer Content')).toBeInTheDocument();
  });

  it('handles Escape key to close', () => {
    const onClose = vi.fn();
    const { getByRole } = render(
      <Drawer open={true} onClose={onClose} closeOnEscape={true}>
        Content
      </Drawer>
    );
    fireEvent.keyDown(getByRole('dialog'), { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('applies anchor class correctly', () => {
    const { getByRole } = render(<Drawer open={true} anchor="right">Content</Drawer>);
    expect(getByRole('dialog')).toHaveClass('beast-drawer-right');
  });

  it('applies size class correctly', () => {
    const { getByRole } = render(<Drawer open={true} size="lg">Content</Drawer>);
    expect(getByRole('dialog')).toHaveClass('beast-drawer-size-lg');
  });
});
