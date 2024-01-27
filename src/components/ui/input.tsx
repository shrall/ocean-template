import * as React from 'react';

import { cn } from '@/lib/utils';

type InputStyle = 'default' | 'underline';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  inputStyle?: InputStyle;
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error = false,
      leftNode,
      inputStyle = 'default',
      rightNode,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          'flex w-full items-center gap-x-2 border-ocean-light-40 bg-white text-sm  placeholder:text-ocean-light-40 ',
          disabled && 'bg-ocean-light-30',
          inputStyle === 'default' && 'rounded-xl border p-3',
          inputStyle === 'underline' && 'border-0 border-b-2 py-1',
          error && 'border-ocean-danger-20',
          rightNode && 'relative py-3',
        )}
      >
        {leftNode}
        <input
          type={type}
          className={cn(
            'w-full outline-none disabled:bg-ocean-light-30',
            className,
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {rightNode}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
