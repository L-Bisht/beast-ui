import React, { useRef } from 'react';
import { useDialog, useModalOverlay, Overlay, FocusScope, type AriaDialogProps } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';
import { Surface } from '../Surface/Surface.js';
import styles from './Dialog.module.css';

export interface DialogProps extends AriaDialogProps {
  open?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'fullscreen';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  variant?: 'solid' | 'glass';
  glaze?: {
    frost?: 'sm' | 'md' | 'lg';
    tint?: 'light' | 'dark' | 'none';
  };
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Dialog = ({
  open = false,
  onClose,
  title,
  description,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  variant = 'solid',
  glaze,
  children,
  className,
  style,
  ...rest
}: DialogProps) => {
  // Use statically controlled state since component provides open/onClose
  const state = useOverlayTriggerState({
    isOpen: open,
    onOpenChange: (isOpen) => {
      if (!isOpen && onClose) {
        onClose();
      }
    },
  });

  const ref = useRef<HTMLDivElement>(null);
  const descId = React.useId();
  
  const { dialogProps, titleProps } = useDialog(
    {
      ...rest,
      role: 'dialog',
      'aria-describedby': description ? descId : undefined,
    },
    ref
  );

  const { modalProps, underlayProps } = useModalOverlay(
    {
      isDismissable: closeOnOverlayClick,
      isKeyboardDismissDisabled: !closeOnEscape,
    },
    state,
    ref
  );

  if (!state.isOpen) {
    return null;
  }

  const classes = [
    'beast-dialog',
    styles.dialog,
    `beast-dialog-${size}`,
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Overlay>
      <div 
        className={styles.underlay} 
        {...underlayProps} 
        data-testid="dialog-overlay"
      >
        <FocusScope contain restoreFocus autoFocus>
          <Surface
            {...modalProps}
            {...dialogProps}
            ref={ref}
            className={classes}
            style={style}
            elevation={4}
            radius="lg"
            padding="6"
            aria-modal="true"
            variant={variant === 'glass' ? 'glass' : 'solid'}
            glaze={glaze}
          >
            {title && (
              <h2 {...titleProps} className={`beast-dialog-title ${styles.title}`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`beast-dialog-description ${styles.description}`} id={descId}>
                {description}
              </p>
            )}
            <div className={`beast-dialog-content ${styles.content}`}>
              {children}
            </div>
            {onClose && (
              <button 
                type="button"
                className={`beast-dialog-close ${styles.closeButton}`} 
                onClick={onClose}
                aria-label="Close dialog"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </Surface>
        </FocusScope>
      </div>
    </Overlay>
  );
};

Dialog.displayName = 'Dialog';
