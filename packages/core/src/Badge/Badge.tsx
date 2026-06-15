import { forwardRef } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { Frame } from '../Frame/Frame.js';
import type { FrameProps } from '../Frame/Frame.js';

export interface BadgeProps extends Omit<FrameProps<'div'>, 'content'> {
  content?: ReactNode;
  variant?: 'standard' | 'dot';
  color?: 'primary' | 'danger' | 'warning' | 'success';
  max?: number;
  invisible?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  children?: ReactNode;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      content,
      variant = 'standard',
      color = 'primary',
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
    
    if (variant === 'standard' && typeof content === 'number' && max !== undefined && content > max) {
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
      backgroundColor: `var(--beast-color-${color})`,
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
        color: 'white',
      }),
      ...style,
    };

    const wrapperStyle: CSSProperties = {
      position: 'relative',
      display: 'inline-flex',
    };

    return (
      <div style={wrapperStyle} ref={ref}>
        {children}
        {!invisible && (
          <Frame
            className={['beast-badge', variant === 'dot' ? 'beast-badge-dot' : '', className].filter(Boolean).join(' ')}
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
