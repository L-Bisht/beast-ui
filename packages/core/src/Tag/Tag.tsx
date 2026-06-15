import React, { forwardRef, type ReactNode, type KeyboardEvent } from 'react';
import { Frame } from '../Frame/Frame.js';
import type { FrameProps } from '../Frame/Frame.js';

export interface TagProps extends Omit<FrameProps<'div'>, 'color' | 'size'> {
  variant?: 'filled' | 'outlined' | 'soft';
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
      style,
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
      'beast-tag',
      `beast-tag-${variant}`,
      `beast-tag-${color}`,
      `beast-tag-${size}`,
      clickable && 'beast-tag-clickable',
      className,
    ].filter(Boolean).join(' ');

    return (
      <Frame
        ref={ref}
        className={classes}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onClick={clickable ? onClick : undefined}
        onKeyDown={clickable ? handleKeyDown : onKeyDown}
        display="inline-flex"
        style={{ alignItems: 'center', ...style }}
        {...rest}
      >
        {icon && <span className="beast-tag-icon">{icon}</span>}
        <span className="beast-tag-label">{children}</span>
        {onDelete && (
          <button
            type="button"
            className="beast-tag-delete"
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
