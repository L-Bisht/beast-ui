import React, { forwardRef } from 'react';
import { Frame } from '../Frame/Frame.js';
import styles from './Skeleton.module.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  shape?: 'text' | 'circular' | 'rectangular';
  variant?: 'solid' | 'glass';
  animation?: 'pulse' | 'wave' | 'none';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      shape = 'text',
      variant = 'solid',
      animation = 'pulse',
      width,
      height,
      lines = 1,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isMultiLine = shape === 'text' && lines > 1;

    if (isMultiLine) {
      return (
        <div 
          ref={ref}
          className={`beast-skeleton-container ${styles.container} ${className || ''}`}
          style={{ width: width !== undefined ? width : '100%', ...style }}
          aria-hidden="true"
          {...rest}
        >
          {Array.from({ length: lines }).map((_, i) => (
            <Skeleton
              key={i}
              shape="text"
              variant={variant}
              animation={animation}
              height={height}
              style={{
                width: i === lines - 1 ? '60%' : '100%',
              }}
            />
          ))}
        </div>
      );
    }

    const classes = [
      'beast-skeleton',
      styles.skeleton,
      `beast-skeleton-${shape}`,
      styles[shape],
      `beast-skeleton-${animation}`,
      styles[animation],
      className,
    ].filter(Boolean).join(' ');

    const customStyle = {
      ...style,
      ...(width !== undefined && { width: typeof width === 'number' ? `${width}px` : width }),
      ...(height !== undefined && { height: typeof height === 'number' ? `${height}px` : height }),
      ...(variant === 'glass' && { backgroundColor: 'transparent' }),
    };

    return (
      <Frame
        ref={ref}
        variant={variant === 'glass' ? 'glass' : 'solid'}
        className={classes}
        style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
        aria-hidden="true"
        {...rest}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
