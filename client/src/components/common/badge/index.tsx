import React from 'react';

import departure_today from '../../../assets/images/departure_today.svg';

interface BadgeProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  type: string;
}

export default function Badge({ type, ...rest }: BadgeProps) {
  const src = { departure_today }[type];

  if (!src) return null;

  return <img src={src} alt={type} {...rest} />;
}
