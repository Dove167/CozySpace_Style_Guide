import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  children,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const baseClasses = 'font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300';

  const variantClasses = {
    primary: 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-[var(--color-text-primary)] shadow-[var(--shadow-cloud)] hover:shadow-lg hover:-translate-y-0.5 hover:shadow-[var(--color-primary)]/40',
    secondary: 'bg-[var(--color-secondary)] text-[var(--color-text-accent)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary-dark)]',
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-[var(--shadow-cloud)]'
    : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;