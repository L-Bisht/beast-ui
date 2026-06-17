import React, { type ElementType, type ComponentPropsWithRef, forwardRef, type ReactNode } from 'react';
import { Frame } from '../Frame/Frame.js';
import styles from './Button.module.css';

export interface ButtonOwnProps<E extends ElementType = ElementType> {
  as?: E;
  variant?: 'solid' | 'outlined' | 'soft' | 'ghost' | 'glass';
  color?: 'default' | 'primary' | 'danger' | 'warning' | 'success';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  glaze?: { frost?: 'sm' | 'md' | 'lg'; tint?: 'light' | 'dark' | 'none'; };
}

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithRef<E>, keyof ButtonOwnProps>;

type ButtonComponent = <E extends ElementType = 'button'>(
  props: ButtonProps<E>
) => React.ReactElement | null;

export const Button: ButtonComponent = forwardRef(
  <E extends ElementType = 'button'>(
    {
      as,
      variant = 'solid',
      color = 'default',
      size = 'md',
      icon,
      iconPosition = 'start',
      loading = false,
      disabled = false,
      fullWidth = false,
      children,
      className,
      style,
      onClick,
      ...rest
    }: ButtonProps<E>,
    ref: React.Ref<Element>
  ) => {
    const Element = as || 'button';

    const isIconOnly = Boolean(icon && !children);

    const classes = [
      styles.button,
      'beast-button',
      `beast-button-${variant}`,
      `beast-button-${color}`,
      `beast-button-${size}`,
      styles[size],
      isIconOnly && 'beast-button-icon-only',
      isIconOnly && styles.iconOnly,
      fullWidth && 'beast-button-full-width',
      className,
    ].filter(Boolean).join(' ');

    const isDisabled = disabled || loading;

    const renderIcon = () => {
      if (loading) {
        return (
          <span className="beast-spinner beast-button-spinner">
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
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
          </span>
        );
      }
      if (icon) {
        return <span className="beast-button-icon">{icon}</span>;
      }
      return null;
    };

    return (
      <Frame
        as={Element as any}
        ref={ref}
        variant={variant === 'glass' ? 'glass' : 'solid'}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading ? 'true' : undefined}
        aria-disabled={disabled ? 'true' : undefined}
        onClick={isDisabled ? undefined : onClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--beast-space-2)',
          ...(fullWidth && { width: '100%' }),
          ...style,
        }}
        {...rest}
      >
        {iconPosition === 'start' && renderIcon()}
        {children && <span className="beast-button-label">{children}</span>}
        {iconPosition === 'end' && renderIcon()}
      </Frame>
    );
  }
) as ButtonComponent;
