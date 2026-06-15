import React, { useRef, createContext, useContext, type ReactNode } from 'react';
import { useSelectState, Item, Section } from 'react-stately';
import { useSelect, useButton, useListBox, useOption, HiddenSelect, useOverlayPosition } from 'react-aria';
import { createPortal } from 'react-dom';

// --- Shared Core ---

function ListBox(props: any) {
  const ref = useRef(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className="beast-select-listbox"
      style={{
        margin: 0,
        padding: 'var(--beast-space-2)',
        listStyle: 'none',
        backgroundColor: 'var(--beast-color-surface, #fff)',
        border: '1px solid var(--beast-color-border, #ccc)',
        borderRadius: 'var(--beast-radius-md, 4px)',
        boxShadow: 'var(--beast-shadow-md, 0 4px 6px rgba(0,0,0,0.1))',
        maxHeight: '300px',
        overflow: 'auto',
      }}
    >
      {[...state.collection].map((item) => {
        if (item.type === 'section') {
          return <ListBoxSection key={item.key} section={item} state={state} />;
        }
        if (item.type === 'item') {
          if (item.rendered?.props?.['data-is-separator']) {
            return <li key={item.key} role="separator" style={{ height: '1px', backgroundColor: 'var(--beast-color-border, #ccc)', margin: '4px 0', listStyle: 'none' }} />;
          }
          return <Option key={item.key} item={item} state={state} />;
        }
        return null;
      })}
    </ul>
  );
}

function ListBoxSection({ section, state }: any) {
  return (
    <>
      {section.rendered && (
        <li style={{ padding: '8px 16px', fontSize: '12px', fontWeight: 'bold', color: 'var(--beast-color-muted, #888)', textTransform: 'uppercase' }}>
          {section.rendered}
        </li>
      )}
      <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
        {[...section.childNodes].map((item) => {
          if (item.rendered?.props?.['data-is-separator']) {
            return <li key={item.key} role="separator" style={{ height: '1px', backgroundColor: 'var(--beast-color-border, #ccc)', margin: '4px 0', listStyle: 'none' }} />;
          }
          return <Option key={item.key} item={item} state={state} />;
        })}
      </ul>
    </>
  );
}

function Option({ item, state }: any) {
  const ref = useRef(null);

  const { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      className="beast-select-option"
      style={{
        padding: 'var(--beast-space-2, 8px) var(--beast-space-4, 16px)',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        backgroundColor: isFocused ? 'var(--beast-color-surface-variant, #f0f0f0)' : 'transparent',
        color: isDisabled ? 'var(--beast-color-muted, #888)' : isSelected ? 'var(--beast-color-primary, #007bff)' : 'var(--beast-color-on-surface, #000)',
        fontWeight: isSelected ? 'bold' : 'normal',
        borderRadius: 'var(--beast-radius-sm, 2px)',
        outline: 'none',
      }}
    >
      {item.rendered}
    </li>
  );
}

// --- Props API ---

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  label?: string;
  options?: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  helperText?: React.ReactNode;
  error?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
}

// We type the Select component as an intersection so it can be called directly or as Select.Root
export const Select = React.forwardRef<HTMLButtonElement, SelectProps>((props, forwardedRef) => {
  const {
    label,
    options,
    value,
    defaultValue,
    onChange,
    placeholder = 'Select an option',
    helperText,
    error,
    size = 'md',
    disabled = false,
    required = false,
    fullWidth = false,
  } = props;

  const statelyProps = {
    label,
    isDisabled: disabled,
    isRequired: required,
    selectedKey: value,
    defaultSelectedKey: defaultValue,
    onSelectionChange: (key: React.Key | null) => { if (key !== null) onChange?.(key.toString()); },
    items: (options || []).map(opt => ({ ...opt, key: opt.value })),
    children: (item: any) => <Item textValue={item.label}>{item.label}</Item>,
    disabledKeys: (options || []).filter(o => o.disabled).map(o => o.value),
  };

  const state = useSelectState(statelyProps);
  const ref = useRef<HTMLButtonElement>(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(statelyProps, state, ref);
  const { buttonProps } = useButton(triggerProps, ref);

  const isError = Boolean(error);
  
  React.useEffect(() => {
    if (typeof forwardedRef === 'function') {
      forwardedRef(ref.current);
    } else if (forwardedRef) {
      forwardedRef.current = ref.current;
    }
  }, [ref, forwardedRef]);

  const overlayRef = useRef(null);
  const { overlayProps } = useOverlayPosition({
    targetRef: ref,
    overlayRef,
    placement: 'bottom start',
    offset: 4,
    isOpen: state.isOpen,
  });

  if (!options) {
    // If no options, it might be used as a compound component?
    // Actually, Select is only for props API. Select.Root is for compound.
    return null;
  }

  const wrapperClasses = [
    'beast-select-wrapper',
    `beast-select-${size}`,
    fullWidth && 'beast-select-full-width',
    disabled && 'beast-select-disabled',
    isError && 'beast-select-error',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses} style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px', width: fullWidth ? '100%' : 'auto' }}>
      {label && (
        <label {...labelProps} style={{ fontSize: '14px', fontWeight: '500' }}>
          {label}
        </label>
      )}
      
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={label}
        name={props.label}
      />

      <button
        {...buttonProps}
        ref={ref}
        className="beast-select-trigger"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          backgroundColor: 'transparent',
          border: `1px solid ${isError ? 'var(--beast-color-danger, red)' : 'var(--beast-color-border, #ccc)'}`,
          borderRadius: '4px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          outline: 'none',
          minWidth: '200px',
        }}
      >
        <span {...valueProps} style={{ color: state.selectedItem ? 'inherit' : 'var(--beast-color-muted, #888)' }}>
          {state.selectedItem ? state.selectedItem.rendered : placeholder}
        </span>
        <span aria-hidden="true" style={{ paddingLeft: '8px' }}>▼</span>
      </button>

      {state.isOpen && typeof document !== 'undefined' && createPortal(
        <div
          {...overlayProps}
          ref={overlayRef}
          style={{
            ...overlayProps.style,
            zIndex: 1000,
            minWidth: ref.current?.offsetWidth || 'auto',
          }}
        >
          <ListBox
            {...menuProps}
            state={state}
          />
        </div>,
        document.body
      )}

      {isError ? (
        <div className="beast-select-error-text" style={{ color: 'var(--beast-color-danger, red)', fontSize: '12px' }}>
          {error}
        </div>
      ) : helperText ? (
        <div className="beast-select-helper-text" style={{ color: 'var(--beast-color-muted, #888)', fontSize: '12px' }}>
          {helperText}
        </div>
      ) : null}
    </div>
  );
}) as any;

Select.displayName = 'Select';


// --- Compound API ---

const SelectContext = createContext<any>(null);

export const SelectRoot = ({ children, value, defaultValue, onChange, label, disabled, required }: any) => {
  const items: any[] = [];
  
  // A helper to traverse React elements and build Stately items
  const traverse = (nodes: ReactNode) => {
    React.Children.forEach(nodes, (child) => {
      if (!React.isValidElement(child)) return;
      const element = child as React.ReactElement<any>;
      if (element.type === SelectContent) {
        traverse(element.props.children);
      } else if (element.type === SelectGroup) {
        const groupItems: any[] = [];
        React.Children.forEach(element.props.children, (groupChild) => {
          if (React.isValidElement(groupChild)) {
            const groupElement = groupChild as React.ReactElement<any>;
            if (groupElement.type === SelectItem) {
              groupItems.push({ type: 'item', value: groupElement.props.value, label: groupElement.props.children });
            } else if (groupElement.type === SelectSeparator) {
              groupItems.push({ type: 'separator' });
            }
          }
        });
        items.push({ type: 'group', label: element.props.label, items: groupItems });
      } else if (element.type === SelectItem) {
        items.push({ type: 'item', value: element.props.value, label: element.props.children });
      } else if (element.type === SelectSeparator) {
        items.push({ type: 'separator' });
      }
    });
  };
  
  traverse(children);

  const statelyProps = {
    label,
    isDisabled: disabled,
    isRequired: required,
    selectedKey: value,
    defaultSelectedKey: defaultValue,
    onSelectionChange: (key: React.Key | null) => { if (key !== null) onChange?.(key.toString()); },
    children: items.map(item => {
      if (item.type === 'group') {
        return (
          <Section key={item.label} title={item.label}>
            {item.items.map((i: any, idx: number) => {
              if (i.type === 'separator') {
                 return <Item key={`sep-g-${idx}`} textValue="separator"><span data-is-separator="true" /></Item>;
              }
              return <Item key={i.value} textValue={typeof i.label === 'string' ? i.label : i.value}>{i.label}</Item>;
            })}
          </Section>
        );
      } else if (item.type === 'separator') {
        return <Item key={`sep-${Math.random()}`} textValue="separator"><span data-is-separator="true" /></Item>;
      } else {
        return <Item key={item.value} textValue={typeof item.label === 'string' ? item.label : item.value}>{item.label}</Item>
      }
    }),
  };

  const state = useSelectState(statelyProps);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(statelyProps, state, triggerRef);

  return (
    <SelectContext.Provider value={{ state, triggerRef, labelProps, triggerProps, valueProps, menuProps, label }}>
      <div className="beast-select-root" style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
        <HiddenSelect state={state} triggerRef={triggerRef} label={label} />
        {children}
      </div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = React.forwardRef<HTMLButtonElement, any>((props, _ref) => {
  const ctx = useContext(SelectContext);
  const { buttonProps } = useButton(ctx.triggerProps, ctx.triggerRef);
  
  return (
    <button
      {...buttonProps}
      ref={ctx.triggerRef}
      className="beast-select-trigger"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        backgroundColor: 'transparent',
        border: `1px solid var(--beast-color-border, #ccc)`,
        borderRadius: '4px',
        cursor: 'pointer',
        outline: 'none',
        minWidth: '200px',
      }}
    >
      {props.children}
      <span aria-hidden="true" style={{ paddingLeft: '8px' }}>▼</span>
    </button>
  );
});

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const ctx = useContext(SelectContext);
  return (
    <span {...ctx.valueProps} style={{ color: ctx.state.selectedItem ? 'inherit' : 'var(--beast-color-muted, #888)' }}>
      {ctx.state.selectedItem ? ctx.state.selectedItem.rendered : placeholder}
    </span>
  );
};

export const SelectContent = () => {
  const ctx = useContext(SelectContext);
  const overlayRef = useRef(null);
  const { overlayProps } = useOverlayPosition({
    targetRef: ctx.triggerRef,
    overlayRef,
    placement: 'bottom start',
    offset: 4,
    isOpen: ctx.state.isOpen,
  });

  if (!ctx.state.isOpen) return null;

  return typeof document !== 'undefined' ? createPortal(
    <div {...overlayProps} ref={overlayRef} style={{ ...overlayProps.style, zIndex: 1000, minWidth: ctx.triggerRef.current?.offsetWidth || 'auto' }}>
      <ListBox state={ctx.state} menuProps={ctx.menuProps} />
    </div>,
    document.body
  ) : null;
};

// These don't render themselves. They are just used to configure the tree.
export const SelectItem = (_props: any) => { return null; };
export const SelectGroup = (_props: any) => { return null; };
export const SelectSeparator = () => { return <li role="separator" style={{ height: '1px', backgroundColor: 'var(--beast-color-border, #ccc)', margin: '4px 0' }} />; };

Select.Root = SelectRoot;
Select.Trigger = SelectTrigger;
Select.Value = SelectValue;
Select.Content = SelectContent;
Select.Item = SelectItem;
Select.Group = SelectGroup;
Select.Separator = SelectSeparator;
