import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb.js';

describe('Breadcrumb Component', () => {
  it('renders a breadcrumb trail', () => {
    const { getByRole, getAllByRole } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item>Shoes</Breadcrumb.Item>
      </Breadcrumb>
    );

    const nav = getByRole('navigation', { name: 'Breadcrumbs' });
    expect(nav).toBeInTheDocument();

    const list = getByRole('list');
    expect(list).toBeInTheDocument();

    const items = getAllByRole('listitem');
    expect(items).toHaveLength(3);

    // Links
    expect(items[0]).toHaveTextContent('Home');
    expect(items[1]).toHaveTextContent('Products');
    expect(items[2]).toHaveTextContent('Shoes');

    // ARIA current
    expect(items[2].querySelector('span[aria-current="page"]')).toBeInTheDocument();
  });

  it('renders custom separator', () => {
    const { getAllByText } = render(
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Shoes</Breadcrumb.Item>
      </Breadcrumb>
    );

    expect(getAllByText('>')).toHaveLength(1);
  });

  it('collapses items when maxItems is exceeded', () => {
    const { getByRole, getAllByRole, queryByText } = render(
      <Breadcrumb maxItems={3}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/1">One</Breadcrumb.Item>
        <Breadcrumb.Item href="/2">Two</Breadcrumb.Item>
        <Breadcrumb.Item href="/3">Three</Breadcrumb.Item>
        <Breadcrumb.Item>Current</Breadcrumb.Item>
      </Breadcrumb>
    );

    // Should render 1st, ellipsis, 4th, 5th
    const items = getAllByRole('listitem');
    expect(items).toHaveLength(4);

    expect(items[0]).toHaveTextContent('Home');
    expect(items[1]).toHaveTextContent('...');
    expect(items[2]).toHaveTextContent('Three');
    expect(items[3]).toHaveTextContent('Current');

    expect(queryByText('One')).not.toBeInTheDocument();
    expect(queryByText('Two')).not.toBeInTheDocument();

    // Expand
    const ellipsis = getByRole('button', { name: 'Show more breadcrumbs' });
    fireEvent.click(ellipsis);

    // All items should be visible now
    const allItems = getAllByRole('listitem');
    expect(allItems).toHaveLength(5);
    expect(allItems[1]).toHaveTextContent('One');
    expect(allItems[2]).toHaveTextContent('Two');
  });
});
