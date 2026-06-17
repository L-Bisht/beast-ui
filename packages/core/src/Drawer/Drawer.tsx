import { useRef } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { useDialog, useModalOverlay, Overlay, FocusScope } from 'react-aria';
import type { AriaDialogProps } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';
import { Surface } from '../Surface/Surface.js';
import styles from './Drawer.module.css';

export interface DrawerProps extends AriaDialogProps {
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | string | number;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  variant?: 'solid' | 'glass';
  glaze?: { frost?: 'sm' | 'md' | 'lg'; tint?: 'light' | 'dark' | 'none'; };
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Drawer = ({
  open = false,
  onClose,
  title,
  anchor = 'right',
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  variant = 'solid',
  glaze,
  children,
  className,
  style,
  ...rest
}: DrawerProps) => {
  const state = useOverlayTriggerState({
    isOpen: open,
    onOpenChange: (isOpen) => {
      if (!isOpen && onClose) {
        onClose();
      }
    },
  });

  const ref = useRef<HTMLDivElement>(null);
  const { dialogProps, titleProps } = useDialog(
    {
      ...rest,
      role: 'dialog',
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

  const isStandardSize = ['sm', 'md', 'lg'].includes(size as string);

  const classes = [
    'beast-drawer',
    styles.drawer,
    `beast-drawer-${anchor}`,
    styles[anchor],
    isStandardSize && `beast-drawer-size-${size}`,
    isStandardSize && styles[`size-${size}`],
    className,
  ].filter(Boolean).join(' ');

  const customStyle: CSSProperties = { ...style };
  if (!isStandardSize) {
    if (anchor === 'left' || anchor === 'right') {
      customStyle.width = typeof size === 'number' ? `${size}px` : size;
    } else {
      customStyle.height = typeof size === 'number' ? `${size}px` : size;
    }
  }

  return (
    <Overlay>
      <div className={styles.underlay} {...underlayProps}>
        <FocusScope contain restoreFocus autoFocus>
          <Surface
            {...modalProps}
            {...dialogProps}
            ref={ref}
            className={classes}
            style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
            elevation={4}
            radius="none"
            aria-modal="true"
            variant={variant === 'glass' ? 'glass' : 'solid'}
            glaze={glaze}
          >
            {title && (
              <div className={`beast-drawer-header ${styles.header}`}>
                <h2 {...titleProps} className={`beast-drawer-title ${styles.title}`}>
                  {title}
                </h2>
                {onClose && (
                  <button 
                    type="button"
                    className={`beast-drawer-close ${styles.closeButton}`} 
                    onClick={onClose}
                    aria-label="Close drawer"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
            )}
            
            {!title && onClose && (
              <button 
                type="button"
                className={`beast-drawer-close ${styles.closeButtonAbsolute}`} 
                onClick={onClose}
                aria-label="Close drawer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}

            <div className={`beast-drawer-content ${styles.content}`}>
              {children}
            </div>
          </Surface>
        </FocusScope>
      </div>
    </Overlay>
  );
};

Drawer.displayName = 'Drawer';
