import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Menu } from './Menu.js';
import { Item, Section } from 'react-stately';

describe('Menu Component', () => {
  it('opens on trigger click', () => {
    const { getByRole, queryByRole } = render(
      <Menu trigger={<button>Options</button>}>
        <Item key="edit">Edit</Item>
        <Item key="delete">Delete</Item>
      </Menu>
    );
    expect(queryByRole('menu')).not.toBeInTheDocument();
    fireEvent.click(getByRole('button', { name: 'Options' }));
    expect(getByRole('menu')).toBeInTheDocument();
    expect(getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
  });

  it('handles item action', () => {
    const onAction = vi.fn();
    const { getByRole } = render(
      <Menu trigger={<button>Options</button>} onAction={onAction}>
        <Item key="edit">Edit</Item>
      </Menu>
    );
    fireEvent.click(getByRole('button', { name: 'Options' }));
    fireEvent.click(getByRole('menuitem', { name: 'Edit' }));
    expect(onAction).toHaveBeenCalledWith('edit');
  });

  it('renders disabled items', () => {
    const { getByRole } = render(
      <Menu trigger={<button>Options</button>} disabledKeys={['delete']}>
        <Item key="edit">Edit</Item>
        <Item key="delete">Delete</Item>
      </Menu>
    );
    fireEvent.click(getByRole('button', { name: 'Options' }));
    const deleteItem = getByRole('menuitem', { name: 'Delete' });
    expect(deleteItem).toHaveAttribute('aria-disabled', 'true');
  });

  it('supports sections/groups', () => {
    const { getByRole } = render(
      <Menu trigger={<button>Options</button>}>
        <Section title="Actions">
          <Item key="edit">Edit</Item>
        </Section>
      </Menu>
    );
    fireEvent.click(getByRole('button', { name: 'Options' }));
    const group = getByRole('group', { name: 'Actions' });
    expect(group).toBeInTheDocument();
  });

  it('renders a separator', () => {
    const { getByRole, getAllByRole } = render(
      <Menu trigger={<button>Options</button>}>
        <Item key="1">One</Item>
        <Menu.Separator key="sep" />
        <Item key="2">Two</Item>
      </Menu>
    );
    fireEvent.click(getByRole('button', { name: 'Options' }));
    expect(getAllByRole('separator')).toHaveLength(1);
  });
});
