'use client';
import React from 'react';
import { useMouseHovered } from 'react-use';

export default function Arch({ children }) {
  const ref = React.useRef(null);
  const { elX, elY } = useMouseHovered(ref, {
    whenHovered: true,
  });
  return (
    <div
      ref={ref}
      style={{ '--x': `${elX}px`, '--y': `${elY}px` }}
      className="container relative flex grow flex-col place-items-center overflow-hidden rounded-t-full bg-pink-100 pt-24 ring-2 ring-pink-900 before:pointer-events-none before:absolute before:inset-[-1px] before:z-[1] before:select-none before:bg-[radial-gradient(2000px_circle_at_var(--x)_var(--y),_#fde04766_0%,_transparent_40%)] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] before:hover:opacity-100 dark:bg-pink-900 dark:ring-pink-100"
    >
      {children}
    </div>
  );
}
