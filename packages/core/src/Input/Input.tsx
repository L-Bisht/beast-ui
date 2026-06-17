import { forwardRef, useId, type ReactNode, type InputHTMLAttributes } from 'react';
import { Surface } from '../Surface/Surface.js';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: ReactNode;
  error?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined' | 'filled' | 'glass';
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'md',
      variant = 'outlined',
      startAdornment,
      endAdornment,
      fullWidth = false,
      disabled = false,
      required = false,
      className,
      style,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const defaultId = useId();
    const id = providedId || defaultId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;

    const isError = Boolean(error);
    const describedBy = isError ? errorId : helperText ? helperId : undefined;

    const wrapperClasses = [
      'beast-input-wrapper',
      fullWidth && 'beast-input-full-width',
      className,
    ].filter(Boolean).join(' ');

    const containerClasses = [
      'beast-input-container',
      `beast-input-${variant}`,
      `beast-input-${size}`,
      isError && 'beast-input-error',
      disabled && 'beast-input-disabled',
    ].filter(Boolean).join(' ');

    return (
      <div
        className={wrapperClasses}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--beast-space-1)',
          ...(fullWidth && { width: '100%' }),
          ...style,
        }}
      >
        {label && (
          <label
            htmlFor={id}
            className="beast-input-label"
            style={{
              fontSize: 'var(--beast-font-size-sm)',
              fontWeight: 'var(--beast-font-weight-medium)',
              color: disabled ? 'var(--beast-color-muted)' : 'var(--beast-color-on-surface)',
            }}
          >
            {label}
            {required && <span className="beast-input-required-asterisk" style={{ color: 'var(--beast-color-danger)', marginLeft: 'var(--beast-space-1)' }}>*</span>}
          </label>
        )}
        
        <Surface
          className={containerClasses}
          variant={variant === 'glass' ? 'glass' : 'solid'}
          border={variant === 'outlined' || variant === 'glass'}
          radius="md"
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: variant === 'filled' ? 'var(--beast-color-surface-variant)' : variant === 'glass' ? undefined : 'transparent',
            padding: 'var(--beast-space-2) var(--beast-space-3)' // Ensure padding is correct for Surface
          }}
        >
          {startAdornment && <span className="beast-input-adornment start">{startAdornment}</span>}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={isError ? 'true' : undefined}
            aria-errormessage={isError ? errorId : undefined}
            aria-describedby={describedBy}
            className="beast-input-element"
            style={{ flex: 1, backgroundColor: 'transparent', border: 'none', outline: 'none', minWidth: 0 }}
            {...rest}
          />
          {endAdornment && <span className="beast-input-adornment end">{endAdornment}</span>}
        </Surface>

        {isError ? (
          <div id={errorId} className="beast-input-error-text" style={{ color: 'var(--beast-color-danger)', fontSize: 'var(--beast-font-size-xs)' }}>
            {error}
          </div>
        ) : helperText ? (
          <div id={helperId} className="beast-input-helper-text" style={{ color: 'var(--beast-color-muted)', fontSize: 'var(--beast-font-size-xs)' }}>
            {helperText}
          </div>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
