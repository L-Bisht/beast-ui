import { forwardRef } from 'react';
import type { ElementType, ReactElement, Ref, CSSProperties } from 'react';
import { Frame, type FrameProps } from '../Frame/Frame.js';

const isScale = (val: string | number) => /^(1|2|3|4|5|6|7|8|9|10|11|12)$/.test(String(val));
const getGapValue = (val: string | number | undefined) => {
  if (val === undefined) return undefined;
  return isScale(val) ? `var(--beast-space-${val})` : String(val);
};

export interface FlexOwnProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: string | number;
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export type FlexProps<E extends ElementType> = FlexOwnProps & FrameProps<E>;

type FlexComponent = <E extends ElementType = 'div'>(
  props: FlexProps<E>
) => ReactElement | null;

export const Flex: FlexComponent = forwardRef(
  <E extends ElementType = 'div'>(
    {
      as,
      direction,
      gap,
      align,
      justify,
      wrap,
      className,
      style,
      ...rest
    }: FlexProps<E>,
    ref: Ref<Element>
  ) => {
    const customStyle: CSSProperties = {
      ...style,
      ...(direction && { flexDirection: direction }),
      ...(gap !== undefined && { gap: getGapValue(gap) }),
      ...(align && { alignItems: align }),
      ...(justify && { justifyContent: justify }),
      ...(wrap && { flexWrap: wrap }),
    };

    const Element = as || 'div';

    return (
      <Frame
        as={Element as any}
        ref={ref as any}
        display="flex"
        className={className}
        style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
        {...(rest as any)}
      />
    );
  }
) as FlexComponent;
