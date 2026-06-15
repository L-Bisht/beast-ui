import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { Select } from './Select.js';

describe('Select Compound API', () => {
  it('renders a fully functional select with compound components', () => {
    const { getByRole, getByText } = render(
      <Select.Root label="Fruit">
        <Select.Trigger>
          <Select.Value placeholder="Choose a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </Select.Root>
    );

    expect(getByText('Fruit')).toBeInTheDocument();
    
    const trigger = getByRole('button');
    expect(trigger).toBeInTheDocument();
    expect(trigger.textContent).toContain('Choose a fruit');

    fireEvent.click(trigger);

    const listbox = screen.getByRole('listbox');
    expect(listbox).toBeInTheDocument();

    const appleOption = screen.getByRole('option', { name: 'Apple' });
    fireEvent.click(appleOption);

    expect(trigger.textContent).toContain('Apple');
  });

  it('supports groups and separators', () => {
    render(
      <Select.Root label="Food">
        <Select.Trigger>
          <Select.Value placeholder="Select food" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group label="Fruits">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Group>
          <Select.Separator />
          <Select.Group label="Vegetables">
            <Select.Item value="carrot">Carrot</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    expect(screen.getByText('Fruits')).toBeInTheDocument();
    expect(screen.getByText('Vegetables')).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('handles controlled state', () => {
    const onChange = vi.fn();
    render(
      <Select.Root value="banana" onChange={onChange}>
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </Select.Root>
    );

    const trigger = screen.getByRole('button');
    expect(trigger.textContent).toContain('Banana');

    fireEvent.click(trigger);
    const appleOption = screen.getByRole('option', { name: 'Apple' });
    fireEvent.click(appleOption);

    expect(onChange).toHaveBeenCalledWith('apple');
  });
});
