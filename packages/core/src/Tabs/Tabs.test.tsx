import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Tabs } from './Tabs.js';

describe('Tabs Component', () => {
  it('renders tabs and panels correctly', () => {
    const { getByRole, queryByText } = render(
      <Tabs defaultSelectedKey="tab1">
        <Tabs.List aria-label="My Tabs">
          <Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="tab1">Content 1</Tabs.Panel>
        <Tabs.Panel id="tab2">Content 2</Tabs.Panel>
      </Tabs>
    );

    const tablist = getByRole('tablist');
    expect(tablist).toBeInTheDocument();
    
    const tab1 = getByRole('tab', { name: 'Tab 1' });
    const tab2 = getByRole('tab', { name: 'Tab 2' });
    
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');
    
    expect(getByRole('tabpanel')).toHaveTextContent('Content 1');
    expect(queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('handles tab selection via click', () => {
    const { getByRole, getByText } = render(
      <Tabs defaultSelectedKey="tab1">
        <Tabs.List>
          <Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="tab1">Content 1</Tabs.Panel>
        <Tabs.Panel id="tab2">Content 2</Tabs.Panel>
      </Tabs>
    );

    const tab2 = getByRole('tab', { name: 'Tab 2' });
    fireEvent.click(tab2);
    
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(getByText('Content 2')).toBeInTheDocument();
  });

  it('handles keyboard navigation (ArrowRight)', () => {
    const { getByRole } = render(
      <Tabs defaultSelectedKey="tab1">
        <Tabs.List>
          <Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="tab1">Content 1</Tabs.Panel>
        <Tabs.Panel id="tab2">Content 2</Tabs.Panel>
      </Tabs>
    );

    const tab1 = getByRole('tab', { name: 'Tab 1' });
    const tab2 = getByRole('tab', { name: 'Tab 2' });
    
    tab1.focus();
    fireEvent.keyDown(tab1, { key: 'ArrowRight' });
    
    // In typical manual selection tabs, arrow focuses AND selects.
    // Let's assume it focuses and selects (automatic selection).
    expect(tab2).toHaveAttribute('aria-selected', 'true');
  });

  it('applies variants and orientations', () => {
    const { getByRole } = render(
      <Tabs defaultSelectedKey="tab1" variant="outlined" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="tab1">Content 1</Tabs.Panel>
      </Tabs>
    );

    const tablist = getByRole('tablist');
    expect(tablist).toHaveAttribute('aria-orientation', 'vertical');
    expect(tablist.parentElement).toHaveClass('beast-tabs-outlined');
  });

  it('disables tabs', () => {
    const { getByRole } = render(
      <Tabs defaultSelectedKey="tab1">
        <Tabs.List>
          <Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab id="tab2" disabled>Tab 2</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="tab1">Content 1</Tabs.Panel>
        <Tabs.Panel id="tab2">Content 2</Tabs.Panel>
      </Tabs>
    );

    const tab2 = getByRole('tab', { name: 'Tab 2' });
    expect(tab2).toHaveAttribute('aria-disabled', 'true');
    
    fireEvent.click(tab2);
    expect(tab2).toHaveAttribute('aria-selected', 'false');
  });
});
