import React, { type ReactNode, useState, Children, isValidElement, cloneElement } from 'react';
import { useBreadcrumbs, useBreadcrumbItem } from 'react-aria';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbProps {
  children: ReactNode;
  separator?: ReactNode;
  maxItems?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DefaultSeparator = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.defaultSeparator}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const BreadcrumbRoot = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      children,
      separator = DefaultSeparator,
      maxItems,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const { navProps } = useBreadcrumbs({ ...rest });
    const [isExpanded, setIsExpanded] = useState(false);

    const items = Children.toArray(children).filter(isValidElement);
    
    // Process items to clone with separator and isCurrent
    const totalItems = items.length;
    
    let visibleItems = items;
    if (maxItems !== undefined && totalItems > maxItems && !isExpanded) {
      // If maxItems is 3: show 1st, ellipsis, last two? Or first, ellipsis, last?
      // Typical: first, ellipsis, then as many from the end to satisfy maxItems.
      // So if maxItems = 3: 1 visible at start, 2 visible at end.
      const itemsAfterEllipsis = maxItems - 1;
      visibleItems = [
        items[0],
        <li key="ellipsis" className={styles.ellipsisItem}>
          <button 
            type="button" 
            className={styles.ellipsisButton}
            onClick={() => { setIsExpanded(true); }}
            aria-label="Show more breadcrumbs"
          >
            ...
          </button>
          <span className={styles.separator} aria-hidden="true">{separator}</span>
        </li>,
        ...items.slice(-itemsAfterEllipsis)
      ];
    }

    const renderedItems = visibleItems.map((child) => {
      const isCurrent = child === items[totalItems - 1]; // Use original items to determine if it's the absolute last
      // If the child is our custom ellipsis node, it already has the separator built in.
      if (child.key === 'ellipsis') return child;

      return cloneElement(child, {
        isCurrent,
        separator: !isCurrent ? separator : undefined,
      } as Partial<BreadcrumbItemProps>);
    });

    const classes = [
      'beast-breadcrumb',
      styles.breadcrumb,
      className,
    ].filter(Boolean).join(' ');

    return (
      <nav {...navProps} ref={ref} className={classes} style={style}>
        <ol className={styles.list}>
          {renderedItems}
        </ol>
      </nav>
    );
  }
);

BreadcrumbRoot.displayName = 'Breadcrumb';

export interface BreadcrumbItemProps {
  children: ReactNode;
  href?: string;
  isCurrent?: boolean;
  separator?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  (
    {
      children,
      href,
      isCurrent,
      separator,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const itemRef = React.useRef<HTMLAnchorElement | HTMLSpanElement>(null);
    
    const { itemProps } = useBreadcrumbItem(
      { 
        ...rest, 
        isCurrent, 
        elementType: href ? 'a' : 'span',
        children
      }, 
      itemRef
    );

    const Element = href ? 'a' : 'span';
    
    // We omit onClick, etc. from rest if we want to pass them to Element, 
    // but useBreadcrumbItem provides them via itemProps.
    const combinedProps = {
      ...itemProps,
      href,
      className: `${styles.itemLink} ${isCurrent ? styles.current : ''}`,
    };

    return (
      <li className={`${styles.item} ${className || ''}`} style={style} ref={ref}>
        {isCurrent ? (
          <span {...combinedProps} ref={itemRef} aria-current="page">
            {children}
          </span>
        ) : (
          <Element {...combinedProps} ref={itemRef as any}>
            {children}
          </Element>
        )}
        {separator && (
          <span className={styles.separator} aria-hidden="true">
            {separator}
          </span>
        )}
      </li>
    );
  }
);

BreadcrumbItem.displayName = 'Breadcrumb.Item';

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
});
