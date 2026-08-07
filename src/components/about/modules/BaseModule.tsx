import { ReactNode } from 'react';

interface BaseModuleProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export const BaseModule = ({ label, children, className = '' }: BaseModuleProps) => {
  return (
    <div className={`about-card group relative flex flex-col border border-neutral-800/40 bg-[#050505] p-8 md:p-12 transition-all duration-500 ease-out hover:-translate-y-[2px] hover:border-neutral-700/60 hover:bg-[#0a0a0a] ${className}`}>
      {/* Module Meta Label */}
      <div className="mb-12 flex items-center gap-3">
        <div className="h-[2px] w-[2px] bg-neutral-600 group-hover:bg-neutral-400 transition-colors"></div>
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-500">
          {label}
        </span>
      </div>
      
      {/* Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};
