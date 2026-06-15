import React, { 
  createContext, 
  useContext, 
  useState, 
  useRef, 
  useEffect,
  type KeyboardEvent,
  type ReactNode,
  type HTMLAttributes
} from 'react';
import styles from './Tabs.module.css';

export type TabsOrientation = 'horizontal' | 'vertical';
export type TabsVariant = 'underline' | 'filled' | 'outlined';

interface TabsContextType {
  selectedKey: string;
  setSelectedKey: (key: string) => void;
  orientation: TabsOrientation;
  variant: TabsVariant;
  tabRefs: React.MutableRefObject<Map<string, HTMLButtonElement>>;
  registerTab: (key: string, ref: HTMLButtonElement) => void;
  unregisterTab: (key: string) => void;
  keys: string[];
}

const TabsContext = createContext<TabsContextType | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs wrapper');
  }
  return context;
};

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  selectedKey?: string;
  defaultSelectedKey?: string;
  onSelectionChange?: (key: string) => void;
  orientation?: TabsOrientation;
  variant?: TabsVariant;
  children: ReactNode;
}

export const TabsRoot = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      selectedKey: controlledKey,
      defaultSelectedKey,
      onSelectionChange,
      orientation = 'horizontal',
      variant = 'underline',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const [uncontrolledKey, setUncontrolledKey] = useState<string>(defaultSelectedKey || '');
    
    const isControlled = controlledKey !== undefined;
    const selectedKey = isControlled ? controlledKey : uncontrolledKey;

    const setSelectedKey = (key: string) => {
      if (!isControlled) {
        setUncontrolledKey(key);
      }
      onSelectionChange?.(key);
    };

    const tabRefs = useRef(new Map<string, HTMLButtonElement>());
    const [keys, setKeys] = useState<string[]>([]);

    const registerTab = (key: string, el: HTMLButtonElement) => {
      tabRefs.current.set(key, el);
      setKeys(Array.from(tabRefs.current.keys()));
      
      // Auto-select first tab if none selected
      if (!selectedKey && tabRefs.current.size === 1) {
        setSelectedKey(key);
      }
    };

    const unregisterTab = (key: string) => {
      tabRefs.current.delete(key);
      setKeys(Array.from(tabRefs.current.keys()));
    };

    const classes = [
      'beast-tabs',
      styles.tabs,
      `beast-tabs-${orientation}`,
      styles[orientation],
      `beast-tabs-${variant}`,
      styles[variant],
      className,
    ].filter(Boolean).join(' ');

    return (
      <TabsContext.Provider
        value={{
          selectedKey,
          setSelectedKey,
          orientation,
          variant,
          tabRefs,
          registerTab,
          unregisterTab,
          keys,
        }}
      >
        <div ref={ref} className={classes} data-orientation={orientation} {...rest}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

TabsRoot.displayName = 'Tabs';

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, ...rest }, ref) => {
    const { orientation, variant } = useTabsContext();

    const classes = [
      'beast-tabs-list',
      styles.tabList,
      styles[`list-${orientation}`],
      styles[`list-${variant}`],
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        ref={ref}
        role="tablist"
        aria-orientation={orientation}
        className={classes}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

TabList.displayName = 'Tabs.List';

export interface TabProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'id'> {
  id: string;
  disabled?: boolean;
  children: ReactNode;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ id, disabled, children, className, onClick, onKeyDown, ...rest }, ref) => {
    const { 
      selectedKey, 
      setSelectedKey, 
      orientation, 
      variant,
      registerTab,
      unregisterTab,
      keys,
      tabRefs
    } = useTabsContext();

    const isSelected = selectedKey === id;
    const internalRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      if (internalRef.current) {
        registerTab(id, internalRef.current);
      }
      return () => { unregisterTab(id); };
    }, [id, registerTab, unregisterTab]);

    const setRefs = (el: HTMLButtonElement) => {
      internalRef.current = el;
      if (typeof ref === 'function') ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement>).current = el;
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        setSelectedKey(id);
      }
      onClick?.(e);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;

      const currentIndex = keys.indexOf(id);
      let nextIndex = currentIndex;

      const navNext = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
      const navPrev = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';

      if (e.key === navNext) {
        e.preventDefault();
        nextIndex = (currentIndex + 1) % keys.length;
      } else if (e.key === navPrev) {
        e.preventDefault();
        nextIndex = (currentIndex - 1 + keys.length) % keys.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = keys.length - 1;
      }

      if (nextIndex !== currentIndex) {
        const nextKey = keys[nextIndex];
        const nextTab = tabRefs.current.get(nextKey);
        
        // Skip disabled
        if (nextTab && !nextTab.disabled) {
          nextTab.focus();
          setSelectedKey(nextKey); // Auto-select
        }
      }

      onKeyDown?.(e);
    };

    const classes = [
      'beast-tab',
      styles.tab,
      styles[`tab-${variant}`],
      isSelected && 'beast-tab-selected',
      isSelected && styles.selected,
      disabled && 'beast-tab-disabled',
      disabled && styles.disabled,
      className,
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={setRefs}
        role="tab"
        id={`beast-tab-${id}`}
        aria-selected={isSelected}
        aria-controls={`beast-panel-${id}`}
        aria-disabled={disabled}
        disabled={disabled}
        tabIndex={isSelected ? 0 : -1}
        className={classes}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Tab.displayName = 'Tabs.Tab';

export interface TabPanelProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  id: string;
  children: ReactNode;
}

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ id, children, className, ...rest }, ref) => {
    const { selectedKey } = useTabsContext();
    const isSelected = selectedKey === id;

    if (!isSelected) {
      return null;
    }

    const classes = [
      'beast-tab-panel',
      styles.panel,
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`beast-panel-${id}`}
        aria-labelledby={`beast-tab-${id}`}
        tabIndex={0}
        className={classes}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

TabPanel.displayName = 'Tabs.Panel';

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Panel: TabPanel,
});
