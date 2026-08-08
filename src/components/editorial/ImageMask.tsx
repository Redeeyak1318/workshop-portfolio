import { ReactNode } from 'react';

export type MaskVariant = 'vertical-fade' | 'diagonal-fade' | 'corner-dissolve' | 'architectural-crop' | 'blueprint-frame' | 'photographic-development' | 'none';

interface ImageMaskProps {
  variant: MaskVariant;
  children: ReactNode;
  className?: string;
}

export const ImageMask = ({ variant, children, className = '' }: ImageMaskProps) => {
  const getMaskStyle = () => {
    switch (variant) {
      case 'vertical-fade':
        return {
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        };
      case 'diagonal-fade':
        return {
          WebkitMaskImage: 'linear-gradient(to bottom right, black 20%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.2) 70%, transparent 95%), radial-gradient(ellipse at 80% 20%, rgba(0,0,0,0.3) 0%, transparent 50%)',
          WebkitMaskComposite: 'add',
          maskImage: 'linear-gradient(to bottom right, black 20%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.2) 70%, transparent 95%), radial-gradient(ellipse at 80% 20%, rgba(0,0,0,0.3) 0%, transparent 50%)',
          maskComposite: 'add'
        };
      case 'corner-dissolve':
        return {
          WebkitMaskImage: 'radial-gradient(ellipse at top left, black 40%, transparent 90%)',
          maskImage: 'radial-gradient(ellipse at top left, black 40%, transparent 90%)'
        };
      case 'architectural-crop':
        return {
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskComposite: 'source-in',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          maskComposite: 'intersect'
        };
      case 'blueprint-frame':
        return {
          WebkitMaskImage: 'linear-gradient(to right, transparent 2px, black 2px, black calc(100% - 2px), transparent calc(100% - 2px)), linear-gradient(to bottom, transparent 2px, black 2px, black calc(100% - 2px), transparent calc(100% - 2px))',
          WebkitMaskComposite: 'source-in',
          maskImage: 'linear-gradient(to right, transparent 2px, black 2px, black calc(100% - 2px), transparent calc(100% - 2px)), linear-gradient(to bottom, transparent 2px, black 2px, black calc(100% - 2px), transparent calc(100% - 2px))',
          maskComposite: 'intersect'
        };
      case 'photographic-development':
        return {
          WebkitMaskImage: 'radial-gradient(circle at center, black var(--mask-size, 0%), transparent calc(var(--mask-size, 0%) + 30%))',
          maskImage: 'radial-gradient(circle at center, black var(--mask-size, 0%), transparent calc(var(--mask-size, 0%) + 30%))',
        };
      case 'none':
      default:
        return {};
    }
  };

  return (
    <div 
      className={`relative w-full h-full editorial-mask ${className}`}
      style={getMaskStyle()}
    >
      {children}
    </div>
  );
};
