import { ReactNode } from 'react';

interface EditorialFrameProps {
  children: ReactNode;
  assetId?: string;
  revision?: string;
  className?: string;
}

export const EditorialFrame = ({ 
  children, 
  assetId = 'IMG-000', 
  revision = 'REV.A', 
  className = '' 
}: EditorialFrameProps) => {
  return (
    <div className={`relative w-full editorial-frame ${className}`}>
      
      {/* Top Left Registration */}
      <div className="absolute -top-3 -left-3 w-4 h-4 border-t border-l border-neutral-700/50 z-50 pointer-events-none"></div>
      
      {/* Bottom Right Registration */}
      <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b border-r border-neutral-700/50 z-50 pointer-events-none"></div>

      {/* Asset Metadata - Top Right */}
      <div className="absolute -top-6 right-0 flex items-center gap-4 z-50 pointer-events-none opacity-40">
        <span className="font-mono text-[7px] tracking-[0.3em] text-neutral-400 uppercase">
          {assetId}
        </span>
        <span className="font-mono text-[7px] tracking-[0.3em] text-neutral-600 uppercase">
          {revision}
        </span>
      </div>

      {/* The wrapped image/content */}
      {children}

    </div>
  );
};
