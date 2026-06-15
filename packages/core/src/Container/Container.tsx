import { forwardRef } from 'react';
import type { ElementType, ReactElement, Ref, CSSProperties } from 'react';
import { Frame, type FrameProps } from '../Frame/Frame.js';

const isScale = (val: string | number) => /^(1|2|3|4|5|6|7|8|9|10|11|12)$/.test(String(val));
const getPaddingValue = (val: string | number | undefined) => {
  if (val === undefined) return undefined;
  return isScale(val) ? `var(--beast-space-${val})` : String(val);
};

const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
} as const;

type Breakpoint = keyof typeof BREAKPOINTS;

const getMaxWidth = (maxWidth: Breakpoint | string | number | undefined) => {
  if (maxWidth === undefined) return undefined;
  if (maxWidth in BREAKPOINTS) return BREAKPOINTS[maxWidth as Breakpoint];
  return String(maxWidth);
};

export interface ContainerOwnProps {
  maxWidth?: Breakpoint | string | number;
  padding?: string | number;
}

export type ContainerProps<E extends ElementType> = ContainerOwnProps & Omit<FrameProps<E>, 'padding' | 'margin'>;

type ContainerComponent = <E extends ElementType = 'div'>(
  props: ContainerProps<E>
) => ReactElement | null;

export const Container: ContainerComponent = forwardRef(
  <E extends ElementType = 'div'>(
    {
      as,
      maxWidth,
      padding,
      className,
      style,
      ...rest
    }: ContainerProps<E>,
    ref: Ref<Element>
  ) => {
    const customStyle: CSSProperties = {
      ...style,
      marginLeft: 'auto',
      marginRight: 'auto',
      ...(maxWidth !== undefined && { maxWidth: getMaxWidth(maxWidth) }),
    };

    if (padding !== undefined) {
      customStyle.padding = getPaddingValue(padding);
    } else {
      customStyle.paddingLeft = 'var(--beast-space-4)';
      customStyle.paddingRight = 'var(--beast-space-4)';
    }

    const Element = as || 'div';

    return (
      <Frame
        as={Element as any}
        ref={ref as any}
        className={className}
        style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
        {...(rest as any)}
      />
    );
  }
) as ContainerComponent;
