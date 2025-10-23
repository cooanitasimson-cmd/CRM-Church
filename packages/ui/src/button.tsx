import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import React from 'react';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variants: Record<Required<ButtonProps>['variant'], string> = {
    primary:
      'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900',
    secondary:
      'bg-white text-slate-900 border-slate-200 hover:bg-slate-100 focus-visible:ring-slate-400'
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`.trim()}
      {...props}
    />
  );
};

export default Button;
