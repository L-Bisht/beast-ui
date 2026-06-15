import { useState, useCallback, forwardRef, useId } from 'react';
import type { ReactNode, CSSProperties, KeyboardEvent } from 'react';
import styles from './Collapsible.module.css';

export interface CollapsibleProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: ReactNode | ((props: { isOpen: boolean }) => ReactNode);
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      trigger,
      disabled = false,
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledOpen !== undefined;
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

    const handleToggle = useCallback(() => {
      if (disabled) return;
      const nextState = !isOpen;
      if (!isControlled) {
        setUncontrolledOpen(nextState);
      }
      onOpenChange?.(nextState);
    }, [disabled, isOpen, isControlled, onOpenChange]);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleToggle();
      }
    };

    const triggerElement = typeof trigger === 'function' ? trigger({ isOpen }) : trigger;
    const contentId = useId();

    return (
      <div 
        ref={ref}
        className={['beast-collapsible', styles.collapsible, className].filter(Boolean).join(' ')} 
        style={style}
        {...rest}
      >
        <div
          className={`beast-collapsible-trigger ${styles.trigger} ${disabled ? styles.disabled : ''}`}
          onClick={handleToggle}
          onKeyDown={disabled ? undefined : handleKeyDown}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-expanded={isOpen}
          aria-controls={contentId}
          aria-disabled={disabled}
        >
          {triggerElement}
        </div>
        <div
          id={contentId}
          className={`beast-collapsible-content ${styles.contentWrapper}`}
          aria-hidden={!isOpen}
          style={{
            gridTemplateRows: isOpen ? '1fr' : '0fr',
          }}
        >
          <div className={styles.contentInner}>
            {children}
          </div>
        </div>
      </div>
    );
  }
);

Collapsible.displayName = 'Collapsible';
