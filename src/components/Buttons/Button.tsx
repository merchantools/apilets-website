import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ children, href, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-full font-medium transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-primary-500 text-gray-900 hover:bg-primary-600',
    secondary: 'bg-secondary text-white hover:bg-gray-700'
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
} 