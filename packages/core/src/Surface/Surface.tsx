import React, { type ElementType, type ComponentPropsWithRef, forwardRef } from 'react';
import styles from './Surface.module.css';

const isScale = (val: string | number) => /^(1|2|3|4|5|6|7|8|9|10|11|12)$/.test(String(val));
const getTokenValue = (val: string | number | undefined, prefix: string) => {
  if (val === undefined) return undefined;
  return isScale(val) ? `var(--beast-${prefix}-${val})` : String(val);
};

export interface SurfaceOwnProps<E extends ElementType = ElementType> {
  as?: E;
  elevation?: 0 | 1 | 2 | 3 | 4;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  padding?: string | number;
  border?: boolean;
}

export type SurfaceProps<E extends ElementType> = SurfaceOwnProps<E> &
  Omit<ComponentPropsWithRef<E>, keyof SurfaceOwnProps>;

type SurfaceComponent = <E extends ElementType = 'div'>(
  props: SurfaceProps<E>
) => React.ReactElement | null;

export const Surface: SurfaceComponent = forwardRef(
  <E extends ElementType = 'div'>(
    {
      as,
      elevation = 0,
      radius = 'md',
      padding,
      border = false,
      className,
      style,
      ...rest
    }: SurfaceProps<E>,
    ref: React.Ref<Element>
  ) => {
    const Element = as || 'div';

    const customStyle: React.CSSProperties = {
      ...style,
      ...(padding !== undefined && { padding: getTokenValue(padding, 'space') }),
    };

    const combinedClassName = [
      'beast-surface',
      styles.surface,
      `beast-surface-elevation-${elevation}`,
      styles[`elevation-${elevation}`],
      `beast-surface-radius-${radius}`,
      styles[`radius-${radius}`],
      border && 'beast-surface-bordered',
      border && styles.bordered,
      className,
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
) as SurfaceComponent;
