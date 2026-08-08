import { RefObject } from 'react';

export interface HeroMarqueeProps {
  marqueeRef: RefObject<HTMLDivElement | null>;
  marqueeTrackRef: RefObject<HTMLDivElement | null>;
}

export const HeroMarquee = ({ marqueeRef, marqueeTrackRef }: HeroMarqueeProps) => {
  // A long string of text repeated multiple times to ensure seamless infinite scrolling
  const marqueeText = "CREATING SYSTEMS . ARCHITECTING SPACES . BUILDING CALM SOFTWARE . ";
  const fullText = marqueeText.repeat(8);

  return (
    <div ref={marqueeRef} className="relative flex w-full flex-col overflow-hidden border-t border-neutral-900/50 bg-[#030303] py-4">
      <div ref={marqueeTrackRef} className="flex whitespace-nowrap">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">
          {fullText}
        </span>
      </div>
    </div>
  );
};
