import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { Surface } from '../Surface/Surface.js';
import styles from './Alert.module.css';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  severity?: 'default' | 'info' | 'success' | 'warning' | 'danger';
  variant?: 'solid' | 'outlined' | 'soft' | 'glass';
  title?: ReactNode;
  icon?: ReactNode | false;
  closable?: boolean;
  onClose?: () => void;
}

const DefaultIcons = {
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  danger: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      severity = 'default',
      variant = 'soft',
      title,
      icon,
      closable,
      onClose,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const isDangerOrWarning = severity === 'danger' || severity === 'warning';
    const role = isDangerOrWarning ? 'alert' : 'status';

    const classes = [
      'beast-alert',
      styles.alert,
      `beast-alert-${severity}`,
      styles[severity],
      `beast-alert-${variant}`,
      styles[variant],
      className,
    ].filter(Boolean).join(' ');

    const IconComponent = icon !== undefined ? icon : DefaultIcons[severity];

    return (
      <Surface
        ref={ref}
        className={classes}
        role={role}
        elevation={0}
        radius="md"
        border={variant === 'outlined' || variant === 'glass'}
        variant={variant === 'glass' ? 'glass' : 'solid'}
        {...rest}
      >
        {IconComponent !== false && (
          <span className={`beast-alert-icon ${styles.icon}`}>
            {IconComponent}
          </span>
        )}
        
        <div className={`beast-alert-content ${styles.content}`}>
          {title && <div className={`beast-alert-title ${styles.title}`}>{title}</div>}
          <div className={styles.body}>{children}</div>
        </div>

        {(closable || onClose) && (
          <button
            type="button"
            className={`beast-alert-close ${styles.closeButton}`}
            onClick={onClose}
            aria-label="Close alert"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </Surface>
    );
  }
);

Alert.displayName = 'Alert';
