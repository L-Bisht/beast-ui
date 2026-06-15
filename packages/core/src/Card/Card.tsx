import { forwardRef } from 'react';
import type { ElementType, ReactNode, ReactElement } from 'react';
import { Surface } from '../Surface/Surface.js';
import type { SurfaceProps } from '../Surface/Surface.js';
import styles from './Card.module.css';

export interface CardOwnProps<E extends ElementType = 'div'> {
  as?: E;
  variant?: 'elevated' | 'outlined';
  padding?: string | number | 'none';
  clickable?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  media?: string;
}

export type CardProps<E extends ElementType> = CardOwnProps<E> &
  Omit<SurfaceProps<E>, keyof CardOwnProps>;

type CardComponent = <E extends ElementType = 'div'>(
  props: CardProps<E>
) => ReactElement | null;

export const Card: CardComponent = forwardRef(
  <E extends ElementType = 'div'>(
    {
      as,
      variant = 'elevated',
      padding = '4',
      clickable = false,
      header,
      footer,
      media,
      className,
      children,
      ...rest
    }: CardProps<E>,
    ref: React.Ref<Element>
  ) => {
    const isOutlined = variant === 'outlined';

    const classes = [
      'beast-card',
      styles.card,
      `beast-card-${variant}`,
      clickable && 'beast-card-clickable',
      clickable && styles.clickable,
      className,
    ].filter(Boolean).join(' ');

    const Element = as || 'div';

    return (
      <Surface
        as={Element as any}
        ref={ref}
        className={classes}
        elevation={isOutlined ? 0 : 1}
        border={isOutlined}
        radius="lg"
        padding="none" // Card manages its own padding for sections
        {...(rest)}
      >
        {media && (
          <div className={`beast-card-media ${styles.media}`}>
            <img src={media} alt="" />
          </div>
        )}
        
        {header && (
          <div className={`beast-card-header ${styles.header}`}>
            {header}
          </div>
        )}
        
        <div 
          className={`beast-card-body ${styles.body}`}
          style={padding !== 'none' ? { padding: `var(--beast-space-${padding}, ${padding})` } : undefined}
        >
          {children}
        </div>
        
        {footer && (
          <div className={`beast-card-footer ${styles.footer}`}>
            {footer}
          </div>
        )}
      </Surface>
    );
  }
) as CardComponent;
