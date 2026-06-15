import React, { type ElementType, type ReactNode, type ComponentPropsWithRef } from 'react';
import { useLink } from 'react-aria';
import styles from './Link.module.css';

export type LinkColor = 'primary' | 'on-surface' | 'inherit' | 'neutral';
export type LinkUnderline = 'always' | 'hover' | 'none';

export type LinkProps<C extends ElementType = 'a'> = {
  as?: C;
  href?: string;
  external?: boolean;
  color?: LinkColor;
  underline?: LinkUnderline;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & Omit<ComponentPropsWithRef<C>, 'as' | 'color'>;

export const Link = React.forwardRef<any, LinkProps<any>>(
  (
    {
      as,
      href,
      external,
      color = 'primary',
      underline = 'hover',
      disabled,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const Component = as || 'a';
    
    // Setup external link props
    const externalProps = external 
      ? { target: '_blank', rel: 'noopener noreferrer' } 
      : {};

    const internalRef = React.useRef<any>(null);
    const { linkProps } = useLink(
      { 
        ...rest, 
        href: disabled ? undefined : href, 
        isDisabled: disabled,
        elementType: typeof Component === 'string' ? Component : 'span' 
      }, 
      internalRef
    );

    // Merge refs
    const setRefs = (el: any) => {
      internalRef.current = el;
      if (typeof ref === 'function') ref(el);
      else if (ref) (ref as any).current = el;
    };

    const classes = [
      'beast-link',
      styles.link,
      `beast-link-color-${color}`,
      styles[`color-${color}`],
      `beast-link-underline-${underline}`,
      styles[`underline-${underline}`],
      disabled && 'beast-link-disabled',
      disabled && styles.disabled,
      className,
    ].filter(Boolean).join(' ');

    const finalLinkProps = { ...linkProps } as Record<string, any>;
    if (disabled) {
      delete finalLinkProps.href;
      delete finalLinkProps.onClick;
    }

    return (
      <Component
        {...finalLinkProps}
        {...externalProps}
        {...rest}
        ref={setRefs}
        className={classes}
        aria-disabled={disabled ? 'true' : undefined}
      >
        {children}
      </Component>
    );
  }
) as <C extends ElementType = 'a'>(
  props: LinkProps<C> & { ref?: React.Ref<any> }
) => React.ReactElement;

// Since we type cast the component for generics, we have to attach displayName directly to the variable
(Link as any).displayName = 'Link';
