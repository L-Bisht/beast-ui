import React, { type ElementType, type ComponentPropsWithRef, forwardRef } from 'react';
import styles from './Frame.module.css';

const isScale = (val: string | number) => /^(1|2|3|4|5|6|7|8|9|10|11|12)$/.test(String(val));
const getTokenValue = (val: string | number | undefined, prefix: string) => {
  if (val === undefined) return undefined;
  return isScale(val) ? `var(--beast-${prefix}-${val})` : String(val);
};

export interface FrameOwnProps<E extends ElementType = ElementType> {
  as?: E;
  padding?: string | number;
  margin?: string | number;
  display?: string;
  position?: string;
  overflow?: string;
  variant?: 'solid' | 'glass';
  glaze?: { frost?: 'sm' | 'md' | 'lg'; tint?: 'light' | 'dark' | 'none'; };
}

export type FrameProps<E extends ElementType> = FrameOwnProps<E> &
  Omit<ComponentPropsWithRef<E>, keyof FrameOwnProps>;

type FrameComponent = <E extends ElementType = 'div'>(
  props: FrameProps<E>
) => React.ReactElement | null;

export const Frame: FrameComponent = forwardRef(
  <E extends ElementType = 'div'>(
    {
      as,
      padding,
      margin,
      display,
      position,
      overflow,
      variant = 'solid',
      glaze,
      className,
      style,
      ...rest
    }: FrameProps<E>,
    ref: React.Ref<Element>
  ) => {
    const Element = as || 'div';

    const customStyle: React.CSSProperties = {
      ...style,
      ...(padding !== undefined && { padding: getTokenValue(padding, 'space') }),
      ...(margin !== undefined && { margin: getTokenValue(margin, 'space') }),
      ...(display !== undefined && { display }),
      ...(position !== undefined && { position }),
      ...(overflow !== undefined && { overflow }),
      ...(glaze?.frost && { '--beast-glass-frost': `var(--beast-glass-frost-${glaze.frost})` } as any),
      ...(glaze?.tint && { '--beast-glass-tint': `var(--beast-glass-tint-${glaze.tint})` } as any),
    };

    const combinedClassName = [
      styles.frame,
      variant === 'glass' && 'beast-frame-glass',
      variant === 'glass' && styles.glass,
      className
    ].filter(Boolean).join(' ');

    return (
      <Element
        ref={ref as any}
        className={combinedClassName}
        style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
        {...rest}
      />
    );
  }
) as FrameComponent;
