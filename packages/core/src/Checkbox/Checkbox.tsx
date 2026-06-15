import { forwardRef, useId, useEffect, useRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: ReactNode;
  indeterminate?: boolean;
  error?: string;
  size?: 'sm' | 'md';
  color?: 'primary' | 'danger' | 'success';
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      indeterminate = false,
      error,
      size = 'md',
      color = 'primary',
      disabled = false,
      className,
      style,
      id: providedId,
      ...rest
    },
    forwardedRef
  ) => {
    const defaultId = useId();
    const id = providedId || defaultId;
    const internalRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const ref = (node: HTMLInputElement) => {
      internalRef.current = node;
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    const isError = Boolean(error);

    const wrapperClasses = [
      'beast-checkbox-wrapper',
      `beast-checkbox-${size}`,
      `beast-checkbox-${color}`,
      isError && 'beast-checkbox-error',
      disabled && 'beast-checkbox-disabled',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClasses} style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px', ...style }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <div className="beast-checkbox-input-container" style={{ position: 'relative', display: 'flex' }}>
            <input
              ref={ref}
              type="checkbox"
              id={id}
              disabled={disabled}
              aria-invalid={isError ? 'true' : undefined}
              className="beast-checkbox-input"
              style={{
                opacity: 0,
                position: 'absolute',
                width: '100%',
                height: '100%',
                margin: 0,
                cursor: disabled ? 'not-allowed' : 'pointer',
                zIndex: 1,
              }}
              {...rest}
            />
            <div
              className="beast-checkbox-visual"
              style={{
                width: size === 'sm' ? '16px' : '20px',
                height: size === 'sm' ? '16px' : '20px',
                border: '2px solid var(--beast-color-border)',
                borderRadius: 'var(--beast-radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              <span className="beast-checkbox-indicator" style={{ display: 'none' }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor" strokeWidth="2">
                  {indeterminate ? (
                    <line x1="2" y1="4" x2="8" y2="4" />
                  ) : (
                    <polyline points="1.5 4.5 3.5 6.5 8.5 1.5" />
                  )}
                </svg>
              </span>
            </div>
          </div>

          {label && (
            <label
              htmlFor={id}
              className="beast-checkbox-label"
              style={{
                cursor: disabled ? 'not-allowed' : 'pointer',
                fontSize: size === 'sm' ? 'var(--beast-font-size-sm)' : 'var(--beast-font-size-md)',
                color: disabled ? 'var(--beast-color-muted)' : 'var(--beast-color-on-surface)',
              }}
            >
              {label}
            </label>
          )}
        </div>
        
        {isError && (
          <div className="beast-checkbox-error-text" style={{ color: 'var(--beast-color-danger)', fontSize: 'var(--beast-font-size-xs)' }}>
            {error}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
