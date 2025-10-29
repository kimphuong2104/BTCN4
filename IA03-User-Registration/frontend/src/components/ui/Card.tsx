import React from 'react';

export function Card({ className = '', children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={['rounded-2xl bg-white/60 backdrop-blur-xl shadow-lg ring-1 ring-black/5', className].join(' ')}>
      {children}
    </div>
  );
}

export function CardBody({ className = '', children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={['p-8', className].join(' ')}>{children}</div>;
}

export function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-b border-black/5 px-8 py-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
}
