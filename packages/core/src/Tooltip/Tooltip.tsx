import React, { useState, useRef, useEffect, type ReactNode, useCallback } from 'react';
import { createPortal } from 'react-dom';

export interface TooltipProps {
  content: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  arrow?: boolean;
  children: React.ReactElement;
}

const generateId = () => `tooltip-${Math.random().toString(36).slice(2, 11)}`;

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  delay = 200,
  arrow = false,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipId] = useState(generateId);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const showTooltip = useCallback(() => {
    clearTimer();
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  }, [delay]);

  const hideTooltip = useCallback(() => {
    clearTimer();
    setIsVisible(false);
  }, []);

  useEffect(() => {
    return () => { clearTimer(); };
  }, []);

  const childProps = {
    onMouseEnter: (e: React.MouseEvent) => {
      showTooltip();
      const p = children.props as Record<string, any>;
      if (p.onMouseEnter) p.onMouseEnter(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hideTooltip();
      const p = children.props as Record<string, any>;
      if (p.onMouseLeave) p.onMouseLeave(e);
    },
    onFocus: (e: React.FocusEvent) => {
      showTooltip();
      const p = children.props as Record<string, any>;
      if (p.onFocus) p.onFocus(e);
    },
    onBlur: (e: React.FocusEvent) => {
      hideTooltip();
      const p = children.props as Record<string, any>;
      if (p.onBlur) p.onBlur(e);
    },
    'aria-describedby': isVisible ? tooltipId : undefined,
  };

  return (
    <>
      {React.cloneElement(children, childProps)}
      {isVisible &&
        createPortal(
          <div
            id={tooltipId}
            role="tooltip"
            className="beast-tooltip"
            style={{
              position: 'absolute',
              zIndex: 1000,
              backgroundColor: 'var(--beast-color-surface-variant)',
              color: 'var(--beast-color-on-surface)',
              padding: 'var(--beast-space-2) var(--beast-space-4)',
              borderRadius: 'var(--beast-radius-md)',
              fontSize: 'var(--beast-font-size-sm)',
            }}
          >
            {content}
            {arrow && <div className="beast-tooltip-arrow" />}
          </div>,
          document.body
        )}
    </>
  );
};
