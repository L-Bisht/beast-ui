import React, { forwardRef } from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed';
  color?: string;
  spacing?: string | number;
}

const isScale = (val: string | number) => /^(1|2|3|4|5|6|7|8|9|10|11|12)$/.test(String(val));
const getSpacingValue = (val: string | number | undefined) => {
  if (val === undefined) return undefined;
  return isScale(val) ? `var(--beast-space-${val})` : String(val);
};

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'solid',
      color = 'border',
      spacing,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const spacingValue = getSpacingValue(spacing);

    const customStyle: React.CSSProperties = {
      ...style,
      borderStyle: variant,
      borderColor: `var(--beast-color-${color})`,
      ...(orientation === 'horizontal' ? {
        borderWidth: '0 0 1px 0',
        width: '100%',
        marginTop: spacingValue,
        marginBottom: spacingValue,
      } : {
        borderWidth: '0 0 0 1px',
        height: '100%',
        display: 'inline-block',
        marginLeft: spacingValue,
        marginRight: spacingValue,
      }),
    };

    return (
      <hr
        ref={ref}
        className={['beast-divider', className].filter(Boolean).join(' ')}
        style={customStyle}
        role="separator"
        aria-orientation={orientation}
        {...rest}
      />
    );
  }
);

Divider.displayName = 'Divider';
