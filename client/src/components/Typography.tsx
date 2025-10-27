import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'large';
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties; // Added to allow inline styles
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
  as,
}) => {
  const variants = {
    h1: 'text-4xl font-bold font-[var(--font-accent)] leading-tight text-[var(--color-text-primary)] mb-6',
    h2: 'text-3xl font-semibold font-[var(--font-accent)] leading-tight text-[var(--color-text-accent)] mb-5',
    h3: 'text-2xl font-semibold font-[var(--font-primary)] leading-tight text-[var(--color-text-primary)] mb-4',
    h4: 'text-xl font-semibold font-[var(--font-primary)] leading-tight text-[var(--color-text-accent)] mb-3',
    h5: 'text-lg font-semibold font-[var(--font-primary)] leading-tight text-[var(--color-text-primary)] mb-3',
    h6: 'text-base font-semibold font-[var(--font-primary)] uppercase tracking-wider text-[var(--color-text-accent)] mb-2',
    p: 'text-base font-[var(--font-primary)] leading-relaxed text-[var(--color-text-primary)] mb-4',
    large: 'text-lg font-[var(--font-primary)] leading-relaxed text-[var(--color-text-primary)] mb-4',
    small: 'text-sm font-[var(--font-primary)] text-[var(--color-text-secondary)] mb-2',
  };

  const Component = as || (variant.startsWith('h') ? variant : 'p');

  return React.createElement(
    Component,
    { className: `${variants[variant]} ${className}` },
    children
  );
};

export default Typography;