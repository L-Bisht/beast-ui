import React, { type ElementType, type ComponentPropsWithRef, forwardRef } from 'react';

export interface TextOwnProps<E extends ElementType = ElementType> {
  as?: E;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'surface' | 'on-surface' | 'surface-variant' | 'border' | 'muted';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
}

export type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentPropsWithRef<E>, keyof TextOwnProps>;

type TextComponent = <E extends ElementType = 'p'>(
  props: TextProps<E>
) => React.ReactElement | null;

export const Text: TextComponent = forwardRef(
  <E extends ElementType = 'p'>(
    {
      as,
      size,
      weight,
      color,
      align,
      truncate,
      className,
      style,
      ...rest
    }: TextProps<E>,
    ref: React.Ref<Element>
  ) => {
    const Element = as || 'p';

    const customStyle: React.CSSProperties = {
      ...style,
      ...(size && { fontSize: `var(--beast-font-size-${size})` }),
      ...(weight && { fontWeight: `var(--beast-font-weight-${weight})` }),
      ...(color && { color: `var(--beast-color-${color})` }),
      ...(align && { textAlign: align }),
      ...(truncate && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }),
    };

    return (
      <Element
        ref={ref as any}
        className={className}
        style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
        {...rest}
      />
    );
  }
) as TextComponent;
