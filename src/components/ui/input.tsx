import * as React from 'react';

import { tailwindColors } from '@/lib/colors';
import { cn } from '@/lib/utils';

import Icon, { IconType } from './icon';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  iconColor?: keyof typeof tailwindColors;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, icon, iconColor = 'ocean-dark-20', disabled, ...props },
    ref,
  ) => {
    return (
      <div
        className={cn(
          'flex w-full items-center gap-x-2 rounded-xl border border-ocean-light-40 bg-white p-3 text-sm  placeholder:text-ocean-light-40 ',
          disabled && 'bg-ocean-light-30',
        )}
      >
        {icon && <Icon icon={icon} fill={iconColor}></Icon>}
        <input
          type={type}
          className={cn('outline-none disabled:bg-ocean-light-30', className)}
          ref={ref}
          disabled={disabled}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
