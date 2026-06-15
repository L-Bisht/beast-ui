import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Lattice } from './Lattice.js';

describe('Lattice', () => {
  it('renders a grid container with display: grid', () => {
    const { container } = render(<Lattice data-testid="lattice" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('display')).toBe('grid');
    expect(el.tagName).toBe('DIV');
  });

  it('sets grid-template-columns: repeat(N, 1fr) when columns is a number', () => {
    const { container } = render(<Lattice columns={3} />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('grid-template-columns')).toBe('repeat(3, 1fr)');
  });

  it('sets grid-template-columns custom string when columns is a string', () => {
    const { container } = render(<Lattice columns="1fr 2fr 1fr" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('grid-template-columns')).toBe('1fr 2fr 1fr');
  });

  it('maps gap prop to --beast-space-* tokens', () => {
    const { container } = render(<Lattice gap="4" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('gap')).toBe('var(--beast-space-4)');
  });

  it('maps independent columnGap and rowGap', () => {
    const { container } = render(<Lattice columnGap="2" rowGap="6" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('column-gap')).toBe('var(--beast-space-2)');
    expect(el.style.getPropertyValue('row-gap')).toBe('var(--beast-space-6)');
  });

  it('sets grid-template-areas', () => {
    const { container } = render(<Lattice areas="'header header' 'sidebar main'" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue('grid-template-areas')).toBe("'header header' 'sidebar main'");
  });

  it('supports polymorphic as prop and forwards ref', () => {
    const ref = React.createRef<HTMLFormElement>();
    const { container } = render(<Lattice as="form" ref={ref} id="ref-lattice" />);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('FORM');
    expect(ref.current?.id).toBe('ref-lattice');
  });
});
