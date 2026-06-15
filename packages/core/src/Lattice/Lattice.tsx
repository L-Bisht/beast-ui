import { forwardRef } from 'react';
import type { ElementType, ReactElement, Ref, CSSProperties } from 'react';
import { Frame, type FrameProps } from '../Frame/Frame.js';

const isScale = (val: string | number) => /^(1|2|3|4|5|6|7|8|9|10|11|12)$/.test(String(val));
const getGapValue = (val: string | number | undefined) => {
  if (val === undefined) return undefined;
  return isScale(val) ? `var(--beast-space-${val})` : String(val);
};

export interface LatticeOwnProps {
  columns?: number | string;
  rows?: string;
  gap?: string | number;
  columnGap?: string | number;
  rowGap?: string | number;
  areas?: string;
}

export type LatticeProps<E extends ElementType> = LatticeOwnProps & FrameProps<E>;

type LatticeComponent = <E extends ElementType = 'div'>(
  props: LatticeProps<E>
) => ReactElement | null;

export const Lattice: LatticeComponent = forwardRef(
  <E extends ElementType = 'div'>(
    {
      as,
      columns,
      rows,
      gap,
      columnGap,
      rowGap,
      areas,
      className,
      style,
      ...rest
    }: LatticeProps<E>,
    ref: Ref<Element>
  ) => {
    const customStyle: CSSProperties = {
      ...style,
      ...(columns !== undefined && { gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns }),
      ...(rows !== undefined && { gridTemplateRows: rows }),
      ...(gap !== undefined && { gap: getGapValue(gap) }),
      ...(columnGap !== undefined && { columnGap: getGapValue(columnGap) }),
      ...(rowGap !== undefined && { rowGap: getGapValue(rowGap) }),
      ...(areas !== undefined && { gridTemplateAreas: areas }),
    };

    const Element = as || 'div';

    return (
      <Frame
        as={Element as any}
        ref={ref as any}
        display="grid"
        className={className}
        style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
        {...(rest as any)}
      />
    );
  }
) as LatticeComponent;
