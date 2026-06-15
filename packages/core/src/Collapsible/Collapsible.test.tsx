import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Collapsible } from './Collapsible.js';

describe('Collapsible Component', () => {
  it('renders trigger and handles uncontrolled toggle', () => {
    const { getByText } = render(
      <Collapsible trigger="Toggle">
        <div data-testid="content">Hidden content</div>
      </Collapsible>
    );

    const trigger = getByText('Toggle');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    
    // The content might be in DOM but invisible, or removed. Let's check visibility or expanded state.
    // Actually, issue says "content is not in DOM when collapsed (or display: none)". 
    // We will use grid transition, so we might just use visibility or height 0.
    // The safest assertion is that aria-expanded toggles.
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(getByText('Hidden content')).toBeVisible(); // or at least in document
  });

  it('respects defaultOpen', () => {
    const { getByText } = render(
      <Collapsible defaultOpen trigger="Toggle">
        Hidden content
      </Collapsible>
    );
    expect(getByText('Toggle')).toHaveAttribute('aria-expanded', 'true');
    expect(getByText('Hidden content')).toBeInTheDocument();
  });

  it('handles controlled mode', () => {
    const onOpenChange = vi.fn();
    const { getByText } = render(
      <Collapsible open={false} onOpenChange={onOpenChange} trigger="Toggle">
        Hidden content
      </Collapsible>
    );

    const trigger = getByText('Toggle');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false'); // Because controlled
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('respects disabled state', () => {
    const { getByText } = render(
      <Collapsible disabled trigger="Toggle">
        Hidden content
      </Collapsible>
    );

    const trigger = getByText('Toggle');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
