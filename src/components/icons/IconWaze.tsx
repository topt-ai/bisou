import React from 'react';

interface IconProps {
  size?: number | string;
  className?: string;
  fill?: string;
  stroke?: string;
}

export function IconWaze({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* High-quality Waze-like SVG outline */}
      <path d="M18.86 16.79c-1.46-1.57-4.32-2.12-6.86-2.12s-5.4.55-6.86 2.12A10.01 10.01 0 1 0 12 2v1l0 1Z" />
      <path d="M5.14 16.79A14 14 0 0 1 12 12c2.61 0 4.8.54 6.86 2.12" />
      <circle cx="8" cy="9" r="1.5" />
      <circle cx="16" cy="9" r="1.5" />
      <path d="m14 16-2 2-2-2" />
    </svg>
  );
}
