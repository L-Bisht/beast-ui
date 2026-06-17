import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Alert } from './Alert.js';

describe('Alert Component', () => {
  it('renders default props correctly', () => {
    const { getByText, getByRole } = render(<Alert severity="info">Message</Alert>);
    expect(getByText('Message')).toBeInTheDocument();
    
    // Status role for info
    expect(getByRole('status')).toBeInTheDocument();
  });

  it('applies danger styling and alert role', () => {
    const { getByRole } = render(<Alert severity="danger">Danger</Alert>);
    const alert = getByRole('alert');
    expect(alert).toHaveClass('beast-alert-danger');
  });

  it('renders default severity', () => {
    const { getByRole } = render(<Alert severity="default">Default</Alert>);
    const alert = getByRole('status');
    expect(alert).toHaveClass('beast-alert-default');
  });

  it('renders title', () => {
    const { getByText } = render(<Alert title="Error Title">Message</Alert>);
    const title = getByText('Error Title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('beast-alert-title');
  });

  it('handles onClose callback', () => {
    const onClose = vi.fn();
    const { getByRole } = render(<Alert onClose={onClose} closable>Message</Alert>);
    const button = getByRole('button', { name: /close alert/i });
    fireEvent.click(button);
    expect(onClose).toHaveBeenCalled();
  });

  it('renders custom icon', () => {
    const { getByTestId } = render(<Alert icon={<span data-testid="custom-icon" />}>Message</Alert>);
    expect(getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('does not render icon when icon is false', () => {
    const { container } = render(<Alert icon={false}>Message</Alert>);
    // Look for the icon container class, it shouldn't be there
    expect(container.querySelector('.beast-alert-icon')).not.toBeInTheDocument();
  });

  it('applies variant class correctly', () => {
    const { getByRole } = render(<Alert variant="outlined" severity="success">Success</Alert>);
    expect(getByRole('status')).toHaveClass('beast-alert-outlined');
  });

  it('applies solid variant instead of filled', () => {
    // using 'solid' variant (typescript will fail if not defined but we are forcing it here)
    const { getByRole } = render(<Alert variant={"solid" as any} severity="info">Solid</Alert>);
    expect(getByRole('status')).toHaveClass('beast-alert-solid');
  });

  it('passes variant="glass" prop to underlying Surface', () => {
    const { getByRole } = render(<Alert variant="glass" severity="info">Glass</Alert>);
    const status = getByRole('status');
    expect(status).toHaveClass('beast-surface-glass');
    expect(status).toHaveClass('beast-alert-glass');
  });
});
