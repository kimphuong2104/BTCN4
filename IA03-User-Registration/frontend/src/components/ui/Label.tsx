import React from 'react';

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ className = '', ...rest }: Props) {
  return <label {...rest} className={['block text-sm font-medium text-gray-700', className].join(' ')} />;
}
