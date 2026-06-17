import { forwardRef } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { Frame } from '../Frame/Frame.js';
import type { FrameProps } from '../Frame/Frame.js';

export interface BadgeProps extends Omit<FrameProps<'div'>, 'content' | 'variant'> {
  content?: ReactNode;
  variant?: 'solid' | 'outlined' | 'soft' | 'dot' | 'glass';
  color?: 'default' | 'primary' | 'danger' | 'warning' | 'success';
  max?: number;
  invisible?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  children?: ReactNode;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      content,
      variant = 'solid',
      color = 'default',
      max,
      invisible = false,
      position = 'top-right',
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    let displayContent: ReactNode = content;
    
    if (variant !== 'dot' && typeof content === 'number' && max !== undefined && content > max) {
      displayContent = `${max}+`;
    }

    if (variant === 'dot') {
      displayContent = '';
    }

    const positionStyle: CSSProperties = {
      position: 'absolute',
      zIndex: 1,
      ...(position.includes('top') && { top: '0px' }),
      ...(position.includes('bottom') && { bottom: '0px' }),
      ...(position.includes('left') && { left: '0px' }),
      ...(position.includes('right') && { right: '0px' }),
    };

    const badgeStyle: CSSProperties = {
      ...positionStyle,
      display: invisible ? 'none' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...(variant === 'dot' ? {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
      } : {
        padding: '0 4px',
        borderRadius: '9999px',
        minWidth: '20px',
        height: '20px',
        fontSize: '12px',
        color: variant === 'outlined' ? `var(--beast-color-${color})` : variant === 'soft' || variant === 'glass' ? `var(--beast-color-${color}-dark)` : 'white',
        backgroundColor: variant === 'outlined' ? 'var(--beast-color-surface)' : variant === 'glass' ? 'transparent' : variant === 'soft' ? `var(--beast-color-${color}-light)` : `var(--beast-color-${color})`,
        border: variant === 'outlined' ? `1px solid var(--beast-color-${color})` : 'none',
        ...(variant === 'glass' ? { '--beast-glass-tint': `color-mix(in srgb, var(--beast-color-${color}-light) 40%, transparent)` } : {}),
      }),
      ...style,
    } as React.CSSProperties;

    const wrapperStyle: CSSProperties = {
      position: 'relative',
      display: 'inline-flex',
    };

    return (
      <div style={wrapperStyle} ref={ref}>
        {children}
        {!invisible && (
          <Frame
            variant={variant === 'glass' ? 'glass' : 'solid'}
            className={['beast-badge', `beast-badge-${variant}`, variant === 'dot' ? 'beast-badge-dot' : '', className].filter(Boolean).join(' ')}
            style={badgeStyle}
            {...rest}
          >
            {displayContent}
          </Frame>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
