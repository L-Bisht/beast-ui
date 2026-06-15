import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from './Card.js';

describe('Card Component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Card>Card Content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('beast-card');
    expect(card).toHaveClass('beast-card-elevated');
    expect(card).toHaveTextContent('Card Content');
  });

  it('renders outlined variant', () => {
    const { container } = render(<Card variant="outlined">Outlined</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('beast-card-outlined');
  });

  it('adds clickable styles when clickable is true', () => {
    const { container } = render(<Card clickable>Click me</Card>);
    expect(container.firstChild).toHaveClass('beast-card-clickable');
  });

  it('renders header correctly', () => {
    const { getByText } = render(<Card header={<h3>Header Title</h3>}>Content</Card>);
    const header = getByText('Header Title');
    expect(header).toBeInTheDocument();
    expect(header.parentElement).toHaveClass('beast-card-header');
  });

  it('renders footer correctly', () => {
    const { getByText } = render(<Card footer={<button>Action</button>}>Content</Card>);
    const footer = getByText('Action');
    expect(footer).toBeInTheDocument();
    expect(footer.parentElement).toHaveClass('beast-card-footer');
  });

  it('renders media full-bleed image', () => {
    const { container } = render(<Card media="http://example.com/image.jpg">Content</Card>);
    const img = container.querySelector('img')!;
    expect(img).toHaveAttribute('src', 'http://example.com/image.jpg');
    expect(img.parentElement).toHaveClass('beast-card-media');
  });
});
