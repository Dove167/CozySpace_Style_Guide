import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'feature';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  variant = 'default',
  onClick,
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300 border';

  const variantClasses = {
    default: 'bg-[var(--color-secondary)] shadow-[var(--shadow-md)] border-[var(--color-primary)]/20 hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5',
    feature: 'bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)]/10 shadow-[var(--shadow-md)] border-[var(--color-primary)]/30 text-center',
  };

  const clickableClasses = onClick ? 'cursor-pointer hover:shadow-lg' : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)]">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;