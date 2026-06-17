import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTooltipTriggerState } from 'react-stately';
import { useTooltipTrigger, useTooltip, useOverlayPosition, mergeProps } from 'react-aria';
import { Surface } from '../Surface/Surface.js';
import styles from './Tooltip.module.css';

export interface TooltipProps {
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  arrow?: boolean;
  variant?: 'solid' | 'glass';
  children: React.ReactElement;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { content, delay = 200, position = 'top', arrow = false, variant = 'solid', children } = props;
  
  const state = useTooltipTriggerState({ delay });
  const triggerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, triggerRef);
  
  const { tooltipProps: ariaTooltipProps } = useTooltip(tooltipProps, state);
  
  const { overlayProps, placement } = useOverlayPosition({
    placement: position,
    targetRef: triggerRef,
    overlayRef,
    offset: arrow ? 8 : 4,
    isOpen: state.isOpen,
  });

  // Preserve child's ref if any, though React.cloneElement overrides ref if not careful.
  // Assuming child is a simple element or forwards ref correctly.
  const child = React.Children.only(children);
  const childProps = mergeProps(child.props, triggerProps);

  return (
    <>
      {React.cloneElement(child, {
        ...childProps,
        ref: triggerRef,
      })}
      {state.isOpen && typeof document !== 'undefined' && createPortal(
        <Surface
          {...mergeProps(ariaTooltipProps, overlayProps)}
          ref={overlayRef as any}
          className={`${styles.tooltip} beast-tooltip`}
          data-placement={placement}
          variant={variant === 'glass' ? 'glass' : 'solid'}
          elevation={2}
          radius="md"
          border={variant === 'glass'}
          style={{
            ...overlayProps.style,
            ...(variant === 'glass' && { backgroundColor: 'transparent', boxShadow: 'none' })
          }}
        >
          {content}
          {arrow && <div className={`${styles.arrow} beast-tooltip-arrow`} style={variant === 'glass' ? { display: 'none' } : undefined} />}
        </Surface>,
        document.body
      )}
    </>
  );
};
