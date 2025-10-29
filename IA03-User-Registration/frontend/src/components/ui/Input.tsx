import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = '', ...rest }: Props) {
  return (
    <input
      {...rest}
      className={[
        'w-full rounded-xl border-2 border-gray-200 bg-white/80',
        'px-4 py-2.5 text-[15px] shadow-sm',
        'placeholder:text-gray-500',
        'focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20',
        'transition',
        className,
      ].join(' ')}
    />
  );
}
