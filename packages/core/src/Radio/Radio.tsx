import React, { forwardRef, useId, createContext, useContext, type InputHTMLAttributes, type ReactNode, useState } from 'react';

// --- Context ---
interface RadioGroupContextValue {
  name: string;
  value?: string;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

// --- RadioGroup ---
export interface RadioGroupProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  orientation?: 'horizontal' | 'vertical';
  error?: string;
  label?: ReactNode;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name: providedName,
      value: controlledValue,
      defaultValue,
      onChange,
      orientation = 'vertical',
      error,
      label,
      disabled = false,
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const fallbackName = useId();
    const name = providedName || fallbackName;
    const labelId = `${name}-label`;

    const isControlled = controlledValue !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    
    const value = isControlled ? controlledValue : uncontrolledValue;

    const handleChange = (newValue: string) => {
      if (!isControlled) setUncontrolledValue(newValue);
    };

    const isError = Boolean(error);

    const classes = [
      'beast-radio-group',
      `beast-radio-group-${orientation}`,
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        ref={ref}
        className={classes}
        role="radiogroup"
        aria-labelledby={label ? labelId : undefined}
        aria-invalid={isError ? 'true' : undefined}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--beast-space-2)',
          ...style,
        }}
        {...rest}
      >
        {label && (
          <div id={labelId} className="beast-radio-group-label" style={{ fontWeight: 'var(--beast-font-weight-medium)', fontSize: 'var(--beast-font-size-sm)' }}>
            {label}
          </div>
        )}
        
        <div style={{ display: 'flex', flexDirection: orientation === 'vertical' ? 'column' : 'row', gap: 'var(--beast-space-2)' }}>
          <RadioGroupContext.Provider value={{ name, value, disabled }}>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                const element = child as React.ReactElement<any>;
                return React.cloneElement(element, {
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e.target.value);
                    if (onChange) onChange(e);
                    if (element.props.onChange) element.props.onChange(e);
                  }
                });
              }
              return child;
            })}
          </RadioGroupContext.Provider>
        </div>

        {isError && (
          <div className="beast-radio-group-error" style={{ color: 'var(--beast-color-danger)', fontSize: 'var(--beast-font-size-xs)' }}>
            {error}
          </div>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

// --- Radio ---
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  value: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      value,
      disabled: radioDisabled,
      checked: controlledChecked,
      className,
      style,
      id: providedId,
      onChange,
      ...rest
    },
    ref
  ) => {
    const defaultId = useId();
    const id = providedId || defaultId;
    const context = useContext(RadioGroupContext);

    const name = context?.name;
    const disabled = radioDisabled || context?.disabled || false;
    
    const isChecked = context?.value !== undefined
      ? context.value === value
      : controlledChecked;

    const wrapperClasses = [
      'beast-radio-wrapper',
      disabled && 'beast-radio-disabled',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClasses} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', ...style }}>
        <div className="beast-radio-input-container" style={{ position: 'relative', display: 'flex' }}>
          <input
            ref={ref}
            type="radio"
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            checked={isChecked}
            onChange={onChange}
            className="beast-radio-input"
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
            className="beast-radio-visual"
            style={{
              width: '20px',
              height: '20px',
              border: `2px solid ${isChecked ? 'var(--beast-color-primary)' : 'var(--beast-color-border)'}`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              transition: 'all 0.2s ease',
            }}
          >
            {isChecked && (
              <span className="beast-radio-indicator" style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--beast-color-primary)',
              }} />
            )}
          </div>
        </div>

        {label && (
          <label
            htmlFor={id}
            className="beast-radio-label"
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

Radio.displayName = 'Radio';
