import React, { forwardRef, useId, type InputHTMLAttributes, type ReactNode, useState } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success';
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      size = 'md',
      color = 'primary',
      disabled = false,
      checked: controlledChecked,
      defaultChecked,
      onChange,
      className,
      style,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const defaultId = useId();
    const id = providedId || defaultId;

    const isControlled = controlledChecked !== undefined;
    const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked || false);
    
    const checked = isControlled ? controlledChecked : uncontrolledChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setUncontrolledChecked(e.target.checked);
      }
      if (onChange) {
        onChange(e);
      }
    };

    const wrapperClasses = [
      'beast-switch-wrapper',
      `beast-switch-${size}`,
      disabled && 'beast-switch-disabled',
      className,
    ].filter(Boolean).join(' ');

    const dimensions = {
      sm: { width: '32px', height: '18px', thumb: '14px' },
      md: { width: '44px', height: '24px', thumb: '20px' },
      lg: { width: '56px', height: '30px', thumb: '26px' },
    }[size];

    return (
      <div className={wrapperClasses} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', ...style }}>
        <div className="beast-switch-container" style={{ position: 'relative', display: 'flex' }}>
          <input
            ref={ref}
            type="checkbox"
            id={id}
            role="switch"
            aria-checked={checked ? 'true' : 'false'}
            disabled={disabled}
            checked={checked}
            onChange={handleChange}
            className="beast-switch-input"
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
            className="beast-switch-track"
            style={{
              width: dimensions.width,
              height: dimensions.height,
              backgroundColor: checked ? `var(--beast-color-${color})` : 'var(--beast-color-surface-variant)',
              borderRadius: '9999px',
              transition: 'background-color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
              boxSizing: 'border-box',
            }}
          >
            <div
              className="beast-switch-thumb"
              style={{
                width: dimensions.thumb,
                height: dimensions.thumb,
                backgroundColor: 'white',
                borderRadius: '50%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s ease',
                transform: checked 
                  ? `translateX(calc(${dimensions.width} - ${dimensions.thumb} - 4px))` 
                  : 'translateX(0)',
              }}
            />
          </div>
        </div>

        {label && (
          <label
            htmlFor={id}
            className="beast-switch-label"
            style={{
              cursor: disabled ? 'not-allowed' : 'pointer',
              fontSize: 'var(--beast-font-size-md)',
              color: disabled ? 'var(--beast-color-muted)' : 'var(--beast-color-on-surface)',
            }}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
