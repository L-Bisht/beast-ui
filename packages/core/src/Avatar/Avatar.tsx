import { useState, forwardRef } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { Frame } from '../Frame/Frame.js';
import type { FrameProps } from '../Frame/Frame.js';

export interface AvatarProps extends Omit<FrameProps<'div'>, 'size'> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circular' | 'rounded';
  fallback?: ReactNode;
}

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0 || !parts[0]) return '';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const DefaultPersonIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    { src, alt, name, size = 'md', variant = 'circular', fallback, className, style, ...rest },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);

    const sizes = {
      sm: '32px',
      md: '40px',
      lg: '48px',
      xl: '64px',
    };

    const pxSize = sizes[size];

    const borderRadius = variant === 'circular' ? '50%' : 'var(--beast-radius-md)';

    const customStyle: CSSProperties = {
      ...style,
      width: pxSize,
      height: pxSize,
      borderRadius,
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--beast-color-surface-variant)',
      color: 'var(--beast-color-on-surface)',
      flexShrink: 0,
    };

    const shouldShowFallback = !src || hasError;

    let fallbackContent = fallback;
    if (!fallbackContent) {
      if (name) {
        fallbackContent = getInitials(name);
      } else {
        fallbackContent = <DefaultPersonIcon />;
      }
    }

    return (
      <Frame
        ref={ref}
        className={className}
        style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
        {...rest}
      >
        {shouldShowFallback ? (
          <span className="beast-avatar-fallback">{fallbackContent}</span>
        ) : (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            onError={() => { setHasError(true); }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </Frame>
    );
  }
);

Avatar.displayName = 'Avatar';
