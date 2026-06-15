import React, { forwardRef } from 'react';
import styles from './Spinner.module.css';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | number;
  color?: 'primary' | 'on-surface' | 'inherit';
  label?: string;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = 'md',
      color = 'inherit',
      label = 'Loading',
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isCustomSize = typeof size === 'number';

    const classes = [
      'beast-spinner',
      styles.spinner,
      !isCustomSize && `beast-spinner-${size}`,
      !isCustomSize && styles[size as string],
      `beast-spinner-${color}`,
      styles[color],
      className,
    ].filter(Boolean).join(' ');

    const customStyle = isCustomSize
      ? { ...style, width: `${size}px`, height: `${size}px` }
      : style;

    return (
      <div
        ref={ref}
        className={classes}
        style={customStyle}
        role="status"
        {...rest}
      >
        <svg
          className={styles.svg}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={styles.track}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className={styles.head}
            d="M12 2C6.47715 2 2 6.47715 2 12"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <span className={`beast-visually-hidden ${styles.visuallyHidden}`}>
          {label}
        </span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';
