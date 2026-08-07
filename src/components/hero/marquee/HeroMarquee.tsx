export const HeroMarquee = () => {
  const content = [
    'Engineering', 'Design', 'Systems', 'AI', 'Research', 'Storytelling'
  ];

  return (
    <div className="absolute bottom-0 left-0 z-20 flex w-full overflow-hidden border-t border-neutral-900/40 bg-[#050505] py-3 md:py-4">
      {/* 
        We use a repeating track that overshoots the viewport 
        to support the infinite GSAP scroll animation without breaking UI.
      */}
      <div className="hero-marquee-track flex w-fit items-center whitespace-nowrap text-[8px] font-light uppercase tracking-[0.5em] text-neutral-600 md:text-[9px]">
        {[...content, ...content, ...content, ...content].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="px-12 md:px-20">{item}</span>
            <span className="opacity-50">&bull;</span>
          </div>
        ))}
      </div>
    </div>
  );
};
