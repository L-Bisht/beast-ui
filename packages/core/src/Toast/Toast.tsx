import React, { 
  createContext, 
  useContext, 
  useState, 
  useCallback, 
  useEffect, 
  useRef,
  type ReactNode
} from 'react';
import { createPortal } from 'react-dom';
import { Surface } from '../Surface/Surface.js';
import styles from './Toast.module.css';

let toastIdCounter = 0;

export type ToastSeverity = 'info' | 'success' | 'warning' | 'danger';

export interface ToastOptions {
  severity?: ToastSeverity;
  duration?: number;
  closable?: boolean;
  action?: ReactNode;
}

export interface ToastMessage extends ToastOptions {
  id: string;
  message: ReactNode;
  visible: boolean;
}

interface ToastContextType {
  toast: {
    (message: ReactNode, options?: ToastOptions): string;
    info: (message: ReactNode, options?: Omit<ToastOptions, 'severity'>) => string;
    success: (message: ReactNode, options?: Omit<ToastOptions, 'severity'>) => string;
    warning: (message: ReactNode, options?: Omit<ToastOptions, 'severity'>) => string;
    danger: (message: ReactNode, options?: Omit<ToastOptions, 'severity'>) => string;
  };
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context.toast;
};

export interface ToastProviderProps {
  children: ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ 
  children, 
  position = 'bottom-right' 
}) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => 
      prev.map((t) => t.id === id ? { ...t, visible: false } : t)
    );
    
    // Remove from state after animation
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300); // 300ms exit animation
  }, []);

  const addToast = useCallback((message: ReactNode, options: ToastOptions = {}) => {
    const id = `toast-${++toastIdCounter}`;
    const newToast: ToastMessage = {
      id,
      message,
      visible: true,
      duration: 5000,
      closable: true,
      severity: 'info',
      ...options,
    };

    setToasts((prev) => [...prev, newToast]);
    return id;
  }, []);

  const toast = Object.assign(
    (message: ReactNode, options?: ToastOptions) => addToast(message, options),
    {
      info: (message: ReactNode, options?: Omit<ToastOptions, 'severity'>) => addToast(message, { ...options, severity: 'info' }),
      success: (message: ReactNode, options?: Omit<ToastOptions, 'severity'>) => addToast(message, { ...options, severity: 'success' }),
      warning: (message: ReactNode, options?: Omit<ToastOptions, 'severity'>) => addToast(message, { ...options, severity: 'warning' }),
      danger: (message: ReactNode, options?: Omit<ToastOptions, 'severity'>) => addToast(message, { ...options, severity: 'danger' }),
    }
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      {typeof document !== 'undefined' && createPortal(
        <div className={`${styles.container} ${styles[position]}`}>
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onDismiss={() => { dismiss(t.id); }} />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

const DefaultIcons = {
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  danger: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
};

interface ToastItemProps {
  toast: ToastMessage;
  onDismiss: () => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onDismiss }) => {
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (toast.duration && toast.duration > 0 && toast.visible && !isPaused) {
      timerRef.current = setTimeout(() => {
        onDismiss();
      }, toast.duration);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [toast.duration, toast.visible, isPaused, onDismiss]);

  const severityClass = `beast-toast-${toast.severity}`;
  const animationClass = toast.visible ? styles.enter : styles.exit;

  return (
    <Surface
      className={`beast-toast ${styles.toast} ${styles[toast.severity!]} ${severityClass} ${animationClass}`}
      role="status"
      aria-live="polite"
      elevation={3}
      radius="md"
      onMouseEnter={() => { setIsPaused(true); }}
      onMouseLeave={() => { setIsPaused(false); }}
    >
      <div className={styles.iconWrapper}>
        {DefaultIcons[toast.severity!]}
      </div>
      <div className={styles.content}>
        {toast.message}
      </div>
      {toast.action && (
        <div className={styles.action}>
          {toast.action}
        </div>
      )}
      {toast.closable && (
        <button 
          className={styles.closeButton} 
          onClick={onDismiss}
          aria-label="Close toast"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </Surface>
  );
};
