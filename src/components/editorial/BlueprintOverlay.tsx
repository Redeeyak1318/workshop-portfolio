export interface BlueprintOverlayProps {
  opacity?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BlueprintOverlay = ({ opacity = 0.02, size = 'md', className = '' }: BlueprintOverlayProps) => {
  const sizeMap = {
    sm: '2rem 2rem',
    md: '4rem 4rem',
    lg: '8rem 8rem'
  };

  return (
    <div 
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      style={{ 
        opacity,
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
        backgroundSize: sizeMap[size] 
      }}
    />
  );
};
