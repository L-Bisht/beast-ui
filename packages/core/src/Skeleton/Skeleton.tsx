import React, { forwardRef } from 'react';
import styles from './Skeleton.module.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave' | 'none';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
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
    const isMultiLine = variant === 'text' && lines > 1;

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
              variant="text"
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
      `beast-skeleton-${variant}`,
      styles[variant],
      `beast-skeleton-${animation}`,
      styles[animation],
      className,
    ].filter(Boolean).join(' ');

    const customStyle = {
      ...style,
      ...(width !== undefined && { width: typeof width === 'number' ? `${width}px` : width }),
      ...(height !== undefined && { height: typeof height === 'number' ? `${height}px` : height }),
    };

    return (
      <div
        ref={ref}
        className={classes}
        style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
        aria-hidden="true"
        {...rest}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
