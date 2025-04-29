import React from 'react';

export const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'default',
  size = 'default',
  ...props 
}) => {
  // Base styles that apply to all buttons
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  // Variant styles
  let variantStyles = '';
  if (variant === 'outline') {
    variantStyles = 'border border-current text-current hover:bg-gray-100';
  } else if (variant === 'ghost') {
    variantStyles = 'hover:bg-gray-100 text-current';
  } else if (variant === 'link') {
    variantStyles = 'underline-offset-4 hover:underline text-current';
  } else {
    // Default variant
    variantStyles = 'bg-gray-800 text-white hover:bg-gray-900';
  }
  
  // Size styles
  let sizeStyles = '';
  if (size === 'sm') {
    sizeStyles = 'h-9 px-3 text-sm';
  } else if (size === 'lg') {
    sizeStyles = 'h-11 px-8 text-base';
  } else if (size === 'icon') {
    sizeStyles = 'h-10 w-10';
  } else {
    // Default size
    sizeStyles = 'h-10 px-4 py-2 text-sm';
  }
  
  // Combine all styles
  const combinedClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;
  
  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};