export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
      {/* Huge Outlined Japanese Text */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full flex-col items-center justify-center pointer-events-none opacity-10 mix-blend-screen">
        <span 
          className="text-[45vw] font-medium leading-[0.8] tracking-widest text-transparent md:text-[40vw]"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
        >
          創造
        </span>
        <span className="mt-4 text-3xl font-thin uppercase tracking-[1em] text-neutral-600 md:text-5xl lg:text-7xl lg:tracking-[1.2em]">
          Create
        </span>
      </div>
    </div>
  );
};
