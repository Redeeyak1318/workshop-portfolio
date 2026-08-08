import { ReactNode } from 'react';

interface MetadataLabelProps {
  children: ReactNode;
  className?: string;
}

export const MetadataLabel = ({ children, className = '' }: MetadataLabelProps) => {
  return (
    <span className={`font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-500 ${className}`}>
      {children}
    </span>
  );
};
