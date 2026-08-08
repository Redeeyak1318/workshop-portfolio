import Image from 'next/image';
import { GrainOverlay } from './GrainOverlay';
import { BlueprintOverlay } from './BlueprintOverlay';
import { VerticalAnnotation } from './VerticalAnnotation';
import { CoordinateLabel } from './CoordinateLabel';
import { ImageMask, MaskVariant } from './ImageMask';
import { EditorialFrame } from './EditorialFrame';
import { PlaceholderArt } from './PlaceholderArt';

interface EditorialImageProps {
  src?: string | null;
  alt: string;
  maskStyle?: MaskVariant;
  monochrome?: boolean;
  withGrain?: boolean;
  withBlueprint?: boolean;
  coordinates?: { lat: number; lng: number };
  verticalAnnotation?: string;
  className?: string;
  aspectRatio?: string;
  assetId?: string;
  revision?: string;
  overlayIntensity?: number;
}

export const EditorialImage = ({
  src,
  alt,
  maskStyle = 'none',
  monochrome = true,
  withGrain = true,
  withBlueprint = false,
  coordinates,
  verticalAnnotation,
  className = '',
  aspectRatio = 'aspect-video',
  assetId = 'SYS-IMG',
  revision = 'REV.01',
  overlayIntensity = 0.05,
}: EditorialImageProps) => {
  return (
    <EditorialFrame assetId={assetId} revision={revision} className={`editorial-image ${className}`}>
      
      {verticalAnnotation && (
        <VerticalAnnotation className="absolute -left-10 top-1/2 -translate-y-1/2 z-60">
          {verticalAnnotation}
        </VerticalAnnotation>
      )}

      {coordinates && (
        <div className="absolute bottom-6 right-6 z-60">
          <CoordinateLabel lat={coordinates.lat} lng={coordinates.lng} />
        </div>
      )}

      <ImageMask variant={maskStyle}>
        <div className={`relative w-full ${aspectRatio} bg-[#050505] overflow-hidden editorial-artwork`}>
          
          {/* z-0: Base Fallback */}
          <div className="absolute inset-0 bg-[#050505]"></div>

          {/* z-10: Actual Artwork or Placeholder Image */}
          <div className={`ed-image absolute inset-0 z-10 ${monochrome ? 'grayscale contrast-125 brightness-75 opacity-90' : ''}`}>
            <Image 
              src={src || '/images/placeholders/architectural-01.png'} 
              alt={alt} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          {/* z-40: Vignette Gradient */}
          <div className="absolute inset-0 z-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.9)_100%)]"></div>

          {/* z-45: Light Sweep Layer (For future animations) */}
          <div className="editorial-sweep absolute inset-0 z-[45] pointer-events-none opacity-0 mix-blend-screen bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] transform -translate-x-full"></div>

          {/* z-50: Grain Overlay */}
          {withGrain && (
            <div className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay">
              <GrainOverlay opacity={overlayIntensity * 1.5} />
            </div>
          )}
          
        </div>
      </ImageMask>

      {/* Blueprint Overlay positioned outside the mask so it bleeds over the edges */}
      {withBlueprint && (
        <div className="editorial-blueprint absolute -inset-6 z-30 pointer-events-none mix-blend-screen opacity-60">
          <BlueprintOverlay opacity={overlayIntensity} />
          
          {/* Subtle drafting marks bleeding over */}
          <div className="absolute top-10 -right-2 w-4 h-[1px] bg-neutral-700/50"></div>
          <div className="absolute bottom-20 -left-2 w-4 h-[1px] bg-neutral-700/50"></div>
          <div className="absolute -top-2 left-1/4 w-[1px] h-4 bg-neutral-700/50"></div>
        </div>
      )}

      {/* Floating Editorial Metadata */}
      <div className="editorial-metadata absolute top-8 -right-8 flex flex-col gap-1 z-60 pointer-events-none opacity-20 origin-bottom-right -rotate-90">
        <span className="font-mono text-[6px] tracking-[0.4em] text-neutral-400 uppercase">DRAWING INDEX</span>
      </div>
      
      <div className="editorial-metadata absolute -bottom-8 left-12 flex items-center gap-4 z-60 pointer-events-none opacity-20">
        <span className="font-mono text-[6px] tracking-[0.4em] text-neutral-400 uppercase">FRAME-01</span>
        <div className="w-8 h-[1px] bg-neutral-700"></div>
        <span className="font-mono text-[6px] tracking-[0.4em] text-neutral-500 uppercase">EDITORIAL 2026</span>
      </div>

    </EditorialFrame>
  );
};
