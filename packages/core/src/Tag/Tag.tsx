import React, { forwardRef, type ReactNode, type KeyboardEvent } from 'react';
import { Frame } from '../Frame/Frame.js';
import type { FrameProps } from '../Frame/Frame.js';
import styles from './Tag.module.css';

export interface TagProps extends Omit<FrameProps<'div'>, 'color' | 'size' | 'variant'> {
  variant?: 'filled' | 'outlined' | 'soft' | 'glass';
  color?: 'primary' | 'danger' | 'warning' | 'success' | 'info';
  size?: 'sm' | 'md';
  onDelete?: () => void;
  icon?: ReactNode;
  clickable?: boolean;
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      variant = 'filled',
      color = 'primary',
      size = 'md',
      onDelete,
      icon,
      clickable = false,
      children,
      className,
      onClick,
      onKeyDown,
      ...rest
    },
    ref
  ) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (clickable && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick?.(e as any);
      }
      onKeyDown?.(e);
    };

    const handleDelete = (e: React.MouseEvent | React.KeyboardEvent) => {
      e.stopPropagation();
      onDelete?.();
    };

    const classes = [
      styles.tag,
      styles[variant],
      styles[color],
      styles[size],
      clickable && styles.clickable,
      className,
      // For backwards compatibility in tests if needed
      'beast-tag',
      `beast-tag-${variant}`,
      `beast-tag-${color}`,
      `beast-tag-${size}`,
    ].filter(Boolean).join(' ');

    return (
      <Frame
        ref={ref}
        variant={variant === 'glass' ? 'glass' : 'solid'}
        className={classes}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onClick={clickable ? onClick : undefined}
        onKeyDown={clickable ? handleKeyDown : onKeyDown}
        display="inline-flex"
        {...rest}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{children}</span>
        {onDelete && (
          <button
            type="button"
            className={styles.deleteButton}
            aria-label="Remove"
            onClick={handleDelete}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </Frame>
    );
  }
);

Tag.displayName = 'Tag';
