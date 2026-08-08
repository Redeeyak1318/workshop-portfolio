import { ReactNode } from 'react';

interface BaseModuleProps {
  label: string;
  children: ReactNode;
  className?: string;
  showLine?: boolean;
}

export const BaseModule = ({ label, children, className = '', showLine = true }: BaseModuleProps) => {
  return (
    <div className={`about-module group relative flex flex-col py-8 transition-sweep-target ${className}`}>
      {/* Module Meta Label */}
      <div className="mb-8 flex items-center gap-3">
        {showLine && <div className="h-[2px] w-[2px] bg-neutral-600 transition-colors"></div>}
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-500">
          {label}
        </span>
      </div>
      
      {/* Content */}
      <div className="flex-1 relative z-10 editorial-fade-layer">
        {children}
      </div>
    </div>
  );
};
