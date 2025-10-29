import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export default function Button({ className = '', isLoading, children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={[
        'inline-flex items-center justify-center rounded-xl px-4 py-2.5 font-semibold',
        'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-sm transition active:scale-[0.99]',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        'hover:from-gray-800 hover:to-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60',
        className,
      ].join(' ')}
    >
      {isLoading && (
        <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
          <path className="opacity-75" d="M4 12a8 8 0 018-8v4" stroke="currentColor" strokeWidth="4" fill="none"/>
        </svg>
      )}
      {children}
    </button>
  );
}
