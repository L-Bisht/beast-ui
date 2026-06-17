import React, { forwardRef } from 'react';
import { Frame } from '../Frame/Frame.js';
import styles from './Progress.module.css';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'danger';
  label?: string;
  showValue?: boolean;
  variant?: 'solid' | 'glass';
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      max = 100,
      size = 'md',
      color = 'primary',
      variant = 'solid',
      label,
      showValue = false,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isIndeterminate = value === undefined;
    const clampedValue = isIndeterminate ? 0 : Math.min(Math.max(value, 0), max);
    const percentage = isIndeterminate ? 0 : Math.round((clampedValue / max) * 100);

    const classes = [
      'beast-progress',
      styles.progressContainer,
      `beast-progress-${size}`,
      styles[size],
      `beast-progress-${color}`,
      styles[color],
      className,
    ].filter(Boolean).join(' ');

    return (
      <div 
        className={classes} 
        style={style} 
        ref={ref}
        {...rest}
      >
        {(label || showValue) && (
          <div className={`beast-progress-label-container ${styles.labelContainer}`}>
            {label && <span className={styles.label}>{label}</span>}
            {showValue && !isIndeterminate && (
              <span className={styles.valueText}>{percentage}%</span>
            )}
          </div>
        )}
        <Frame
          variant={variant === 'glass' ? 'glass' : 'solid'}
          role="progressbar"
          aria-label={label}
          aria-valuenow={isIndeterminate ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={max}
          className={`beast-progress-track ${styles.track}`}
          style={{ backgroundColor: variant === 'glass' ? 'transparent' : undefined }}
        >
          <div
            className={`beast-progress-bar ${styles.bar} ${
              isIndeterminate ? `beast-progress-indeterminate ${styles.indeterminate}` : ''
            }`}
            style={{
              transform: isIndeterminate ? undefined : `translateX(-${100 - percentage}%)`,
            }}
          />
        </Frame>
      </div>
    );
  }
);

Progress.displayName = 'Progress';
