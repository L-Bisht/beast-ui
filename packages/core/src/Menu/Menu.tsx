import React, { useRef } from 'react';
import { 
  useMenuTrigger, 
  useMenu, 
  useMenuItem, 
  useMenuSection,
  useButton, 
  usePopover, 
  Overlay, 
  FocusScope, 
  DismissButton 
} from 'react-aria';
import { useMenuTriggerState, useTreeState, Item, Section, type TreeState, type Node } from 'react-stately';
import type { AriaMenuProps } from 'react-aria';
import { Surface } from '../Surface/Surface.js';
import styles from './Menu.module.css';

// Export react-stately components as our subcomponents
export const MenuItem = Item as (props: React.ComponentProps<typeof Item> & { shortcut?: string; icon?: React.ReactNode; disabled?: boolean }) => React.ReactElement | null;
export const MenuGroup = Section;

export function MenuSeparator() {
  return null;
}
MenuSeparator.getCollectionNode = function* (_props: any) {
  yield {
    type: 'item',
    props: { ..._props, isSeparator: true },
    rendered: null,
    textValue: 'separator',
    hasChildNodes: false,
  };
};

export interface MenuProps<T extends object> extends AriaMenuProps<T> {
  trigger: React.ReactElement;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  variant?: 'solid' | 'glass';
  glaze?: { frost?: 'sm' | 'md' | 'lg'; tint?: 'light' | 'dark' | 'none'; };
}

function MenuPopup({
  state,
  placement: _placement,
  className,
  variant,
  glaze,
  ...props
}: any) {
  const ref = useRef<HTMLUListElement>(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <Surface 
      elevation={4} 
      radius="md" 
      padding="1" 
      className={`${styles.menuPopup} ${variant === 'glass' ? styles.glassMenu : ''}`} 
      variant={variant === 'glass' ? 'glass' : 'solid'} 
      border={variant === 'glass'}
      glaze={glaze}
    >
      <ul {...menuProps} ref={ref} className={`${styles.menu} ${className || ''}`}>
        {[...state.collection].map((item) => {
          if (item.type === 'section') {
            return <MenuSection key={item.key} section={item} state={state} onAction={props.onAction} />;
          }
          return <MenuItemComponent key={item.key} item={item} state={state} onAction={props.onAction} />;
        })}
      </ul>
    </Surface>
  );
}

function MenuSection<T extends object>({
  section,
  state,
  onAction,
}: {
  section: Node<T>;
  state: TreeState<T>;
  onAction?: (key: any) => void;
}) {
  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    'aria-label': section['aria-label']
  });

  return (
    <li {...itemProps} className={styles.section}>
      {section.rendered && (
        <span {...headingProps} className={styles.sectionHeader}>
          {section.rendered}
        </span>
      )}
      <ul {...groupProps} className={styles.group}>
        {[...section.childNodes].map((node) => (
          <MenuItemComponent key={node.key} item={node} state={state} onAction={onAction} />
        ))}
      </ul>
    </li>
  );
}

function MenuItemComponent<T extends object>({
  item,
  state,
  onAction,
}: {
  item: Node<T>;
  state: TreeState<T>;
  onAction?: (key: any) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { menuItemProps, isFocused, isPressed, isDisabled } = useMenuItem(
    { key: item.key, onAction },
    state,
    ref
  );

  const { icon, shortcut, isSeparator } = item.props;

  if (isSeparator) {
    return <li role="separator" className={styles.separator} />;
  }

  return (
    <li
      {...menuItemProps}
      ref={ref}
      className={`
        ${styles.item} 
        ${isFocused ? styles.focused : ''} 
        ${isPressed ? styles.pressed : ''} 
        ${isDisabled ? styles.disabled : ''}
      `}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{item.rendered}</span>
      {shortcut && <span className={styles.shortcut}>{shortcut}</span>}
    </li>
  );
}

export const MenuRoot = <T extends object>({ trigger: triggerElement, placement, className, ...restProps }: MenuProps<T>) => {
  const state = useTreeState(restProps);
  const menuTriggerState = useMenuTriggerState(restProps as any);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, menuTriggerState, triggerRef);
  const { buttonProps } = useButton(menuTriggerProps, triggerRef);

  const popoverRef = useRef<HTMLDivElement>(null);
  const { popoverProps, underlayProps } = usePopover(
    {
      triggerRef,
      popoverRef,
      placement: placement || 'bottom',
      offset: 8,
    },
    menuTriggerState
  );

  const trigger = React.cloneElement(triggerElement, {
    ...buttonProps,
    ref: triggerRef,
  } as any);

  return (
    <div style={{ display: 'inline-block' }}>
      {trigger}
      {menuTriggerState.isOpen && (
        <Overlay>
          <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
          <div
            {...popoverProps}
            ref={popoverRef}
            style={{
              ...popoverProps.style,
              zIndex: 1000,
            }}
          >
            <DismissButton onDismiss={menuTriggerState.close} />
            <FocusScope restoreFocus>
              <MenuPopup 
                {...restProps} 
                {...menuProps} 
                state={state} 
                className={className}
              />
            </FocusScope>
            <DismissButton onDismiss={menuTriggerState.close} />
          </div>
        </Overlay>
      )}
    </div>
  );
};

export const Menu = Object.assign(MenuRoot, {
  Item: MenuItem,
  Group: MenuGroup,
  Separator: MenuSeparator,
});
