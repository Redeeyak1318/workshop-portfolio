import { ReactNode } from 'react';

interface BaseModuleProps {
  label?: string;
  children: ReactNode;
  className?: string;
  variant?: 'solid' | 'outline' | 'transparent' | 'dark' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  showLine?: boolean;
}

export const BaseModule = ({ 
  label, 
  children, 
  className = '', 
  variant = 'transparent',
  padding = 'lg',
  showLine = true 
}: BaseModuleProps) => {
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'solid':
        return 'bg-[#0a0a0a] border border-neutral-900/50';
      case 'outline':
        return 'bg-transparent border border-neutral-800/40';
      case 'dark':
        return 'bg-[#030303] border border-neutral-900/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]';
      case 'glass':
        return 'bg-[#070707]/60 backdrop-blur-sm border border-neutral-800/30';
      case 'transparent':
      default:
        return 'bg-transparent';
    }
  };

  const getPaddingStyles = () => {
    switch (padding) {
      case 'none': return 'p-0';
      case 'sm': return 'p-4 md:p-6';
      case 'md': return 'p-6 md:p-8';
      case 'lg': return 'p-8 md:p-10';
      case 'xl': return 'p-10 md:p-16';
      default: return 'p-8 md:p-10';
    }
  };

  return (
    <div className={`about-module group relative flex flex-col ${getVariantStyles()} ${getPaddingStyles()} ${className}`}>
      {/* Module Meta Label */}
      {label && (
        <div className="mb-8 flex items-center gap-3">
          {showLine && <div className="h-[1px] w-[8px] bg-neutral-600 transition-colors"></div>}
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-neutral-500">
            {label}
          </span>
        </div>
      )}
      
      {/* Content */}
      <div className="flex-1 relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
